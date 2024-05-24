const Carrinho = require('./carrinho_tb');
const Produto = require('../Produto/produto_tb')

const create_car = async (newdata) => {
    try {

        const newCar = await Carrinho.create(newdata);

        return { success: true, message: 'Carrinho criado', data: newCar };

    }

    catch (error) {
        return { success: false, error: error.message };
    };
};

const read_car = async (carId) => {
    try {

        const carrinho = await Carrinho.findOne({ where: { id: carId } });
        
        return carrinho ? {success: true, message: 'Carrinho encontrado', data: carrinho} : 
        { success: false, message: 'Carrinho não encontrado' };

    }
    
    catch (error) {
        return { success: false, error: error.message };
    };
};

const update_car = async (carId, newData) => {
    try {

        const carrinho = await Carrinho.findOne({ where: { id: carId } });

        if (!carrinho) {
            return { success: false, message: 'Carrinho não encontrado' };
        };

        await Carrinho.update(newData, { where: { id: carId } });

        return { success: true, message: 'Carrinho atualizado com sucesso' };
    }
    
    catch (error) {
        return { success: false, error: error.message };
    };
};

const delete_car = async (carId) => {
    try {

        const carrinho = await read_car(carId);

        if (!carrinho.success) {
            return { success: false, message: 'Carrinho não encontrado para deleção' };
        };
        await Produto.destroy({ where: { id: carId } });
        await Carrinho.destroy({ where: { id: carId } });

        return { success: true, message: 'Carrinho deletado com sucesso' };
    }

     catch (error) {
        return { success: false, error: error.message };
    }
};

module.exports = { create_car, read_car, update_car, delete_car };