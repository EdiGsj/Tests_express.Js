const { create_car, read_car, update_car, delete_car } = require('../Models/Carrinho/CRUD');

// Create carrinho
const create_carrinho = async (req, res) => {
    try {

        const newData = req.body;
        const result = await create_car(newData);
        res.json(result);
    }
    
    catch (error) {
        console.error('Erro:', error);
        res.status(500).json({ msg: 'Erro interno do servidor' });
    };
};

// Get carrinho
const get_carrinho = async (req, res) => {
    try {
        const carId = req.params.id;
        const result = await read_car(carId);
        res.json(result);
    }
    
    catch (error) {
        console.error('Erro:', error);
        res.status(500).json({ msg: 'Erro interno do servidor' });
    };
};

// Update carrinho
const update_carrinho = async (req, res) => {
    try {
        const carId = req.params.id;
        const newData = req.body;

        const result = await update_car(carId, newData);
        res.json(result);
    } 
    
    catch (error) {
        console.error('Erro:', error);
        res.status(500).json({ msg: 'Erro interno do servidor' });
    };
};

// Delete carrinho
const delete_carrinho = async (req, res) => {
    try {
        const carId = req.params.id;
        const result = await delete_car(carId);
        res.json(result);
    } 
    
    catch (error) {
        console.error('Erro:', error);
        res.status(500).json({ msg: 'Erro interno do servidor' });
    };
};

module.exports = { create_carrinho, get_carrinho, update_carrinho, delete_carrinho};