//Controllers

const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');

const { get_user, add_user, update_user, delete_user, get_all_users } = require('../Models/User/CRUD');


//Login
const login = async(req, res) => {

    try{
        const data =  req.body; // Dados de entrada email e password

        const user = await get_user({email: data.email});

        const passwordMatch = await bcrypt.compare(data.password, user.password);

        if(!passwordMatch){
            res.status(401).json({ error: 'Invalid credentials' });
        };

        const token = jsonwebtoken.sign({id:user.id},'Secreto',{expiresIn:'1h'});

        res.status(200).header('Authorization', `${token}`).json({ token });
    }
    catch (err) {
        res.status(500).send(err.message + " Erro no login");
    };

};

//Create
const create_user = async (req, res) => {
    try {
        const data = req.body;

        if (!data.name || !/^[a-zA-Z\s]+$/.test(data.name)) {
            return res.status(422).json({ msg: 'O nome é obrigatório e não pode conter números ou caracteres especiais' });
        };

        if (!data.email || !/\S+@\S+\.\S+/.test(data.email)) {
            return res.status(422).json({ msg: 'O email é obrigatório e deve estar no formato válido' });
        };

        if (!data.password || data.password.length < 8) {
            return res.status(422).json({ msg: 'A senha é obrigatória e deve ter pelo menos 8 caracteres' });
        };

        if (!data.phone || !/^[0-9-()]+$/) { 
            return res.status(422).json({ msg: 'O telefone é obrigatório' });
        };

        const userExist = await get_user({ email: data.email });

        if (userExist) {
            return res.status(422).json({ msg: 'Usuário já existe' });
        };

        const hashedPassword = await bcrypt.hash(data.password, 10)
        data.password = hashedPassword;

        const result = await add_user(data);
        if (result) {
            res.json({ result });
        } else {
            res.status(404).json({ msg: 'Id Não encontrado' });
        };
    }
    catch (err) {
        res.status(500).send(err);
    };
};

//GetId
const get_user_id = async (req, res) => {
   try{
        const decoded = req.decoded;
        const result = await get_user({id : parseInt(decoded.id)})
        
        if (result) {
            res.json({ result })
        } else {
            res.status(404).json({ msg: 'Id Não encontrado ou deletado' })
        };
   }
   catch(err){
        res.status(500).send(err);
   };
};

//GetAll
const get_all_users_handler = async (req, res) => {
    try {
       const users = await get_all_users(); // Função que busca todos os usuários
       res.json({ users });
    }

    catch (err) {
       res.status(500).send(err.message);
    };
 };

//Put
const update_user_id = async (req, res) => {
    const data = req.body;

    const decoded = req.decoded;
    
    const result = await update_user(data, parseInt(decoded.id));
    if (result) {
        res.json({msg: 'Usuário atualizado com sucesso, ', result });
    } else {
        res.status(404).json({msg: 'Falha ao atualizar o usuário ' });
    }
};

//Delete
const delete_user_id = async (req, res) => {
    const id = parseInt(req.params.id);
    
    try {
        const decoded = req.decoded;
        
        const result = await delete_user(parseInt(decoded.id));
        if (result) {
            res.json({msg: 'Usuário atualizado com sucesso, ', result });
        } else {
            res.status(404).json({msg: 'Falha ao atualizar o usuário ' });
        }
    } catch (error) {
        console.error('Erro:', error);
        res.status(500).json({ msg: 'Erro interno do servidor' });
    }
};



module.exports = { login, create_user, get_user_id, update_user_id, delete_user_id, get_all_users_handler };

