//CRUD
const User = require("./user_tb")

const get_user = async(data) => {

    const get_data = await User.findOne({ where: data});

    return get_data ? get_data.dataValues : false;
};

const get_all_users = async () => {
    try {

        const allUsers = await User.findAll();
        return allUsers.map(user => user.dataValues);
    } 
    
    catch (error) {
        throw new Error('Erro ao buscar todos os usuários do banco de dados');
    };
};

const add_user = async(data) => {

    const result = await User.create(data)
    return result ? result.dataValues : false;
};

const update_user = async(data,id) => {
    try{

        const result = await User.update(data,{where: {id}})
        
        return { success: result ? true : false };
    }

    catch (error) {
        return { success: false, error: error.message };
    };
};

const delete_user = async (id) => {
    try {
        
        const result = await User.destroy({ where: { id }});
        
        return { success: result ? true : false };
    } 
    
    catch (error) {
        return { success: false, error: error.message };
    };
};

module.exports = { get_user, add_user, update_user, delete_user, get_all_users }