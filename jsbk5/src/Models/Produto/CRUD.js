const Produto = require('./produto_tb');

const create_prod = async (newdata) => {
    try {

        const prodCreate = await Produto.create(newdata);

        if (!prodCreate) {
            return ('Falha ao criar o produto');
        ;}

        return { success: true, message: 'Produto lançado com sucesso', data: prodCreate };
    } 
    
    catch(error) {
        return { success: false, error: error.message};
    };
};

const read_prod = async (prodId) => {
    try{
        const produtos = await Produto.findOne({where: { id: prodId }})

        return produtos ? { success: true, message: 'produtos chamado com sucesso', data: produtos} : 
        { success: false, message: 'produtos não encontrado' };

    }
    catch(error){
        return {error: error.message}
    };
};

const update_prod = async (prodId, newProd) => {
    try{

        const produtos = await read_prod(prodId);

        if(!produtos){
            return {sucess: false, massage: 'Produto não encontrado'}
        }

        await Produto.update(newProd, {
            where: {prodId}
        });

        return {sucess: produtos ? true : false }
    }
    catch(error){
        return {sucess: false, error: error.message}
    };
};

const delete_prod = async (prodId) => {
    try{

        const produtos = await read_prod(prodId);

        if(!produtos){
            return {sucess: false, massage: 'produto não encontrado'}
        };

        await Produto.destroy({
            where: {id: prodId}
        });

        return {sucess: true, message: 'produto deletado com sucesso'}
    }

    catch(error){
        return {success: false, error: error.message}
    };
};

module.exports = { create_prod,read_prod, update_prod, delete_prod }