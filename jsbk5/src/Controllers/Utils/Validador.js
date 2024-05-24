// Middleware (Decorator)
const {get_user} = require ("../../Models/User/CRUD")
const myDecoratorMiddleware = async (req, res, next) => {
    try{
        console.log('Decorator: Antes da execução da rota');

        const id = req.params.id;
        if (!/^[0-9]+$/.test(id) && id.length < 1) {
            res.status(404).json({ msg: "Id Não é um número" })
        };

        const id_user = parseInt(id);

        const result = await get_user({id:id_user});
        if(!result){
            res.status(404).json({ msg: "Id Não encontrado" })
        };

        // Executa a próxima função no ciclo de vida do middleware
        next();

    }
    
    catch(err){
        return res.status(500).json({ error: 'Erro interno do servidor' });
    };

    
    // console.log('Decorator: Após a execução da rota');
  };

  module.exports = myDecoratorMiddleware;