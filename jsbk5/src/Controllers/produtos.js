const { create_prod,read_prod, update_prod, delete_prod } = require('../Models/Produto/CRUD');

// Create produto
const create_produto = async (req, res) => {
    try {
        const newData = req.body;

        if (!newData.nome || typeof newData.nome !== 'string' || newData.nome.trim() === '') {
            return res.status(422).json({ msg: 'Nome do produto é obrigatório e deve ser uma string não vazia' });
        }

        if (!newData.descricao || typeof newData.descricao !== 'string' || newData.descricao.trim() === '') {
            return res.status(422).json({ msg: 'Descrição do produto é obrigatória e deve ser uma string não vazia' });
        }

        if (typeof newData.valor !== 'number' || isNaN(newData.valor) || newData.valor <= 0) {
            return res.status(422).json({ msg: 'Valor do produto é obrigatório e deve ser um número positivo' });
        }

        const result = await create_prod(newData);
        res.json(result);
    } catch (error) {
        console.error('Erro:', error);
        res.status(500).json({ msg: 'Erro interno do servidor' });
    }
};

// Get produto
const get_produto = async (req, res) => {
    try {
        const prodId = req.params.id;
        const result = await read_prod(prodId);
        res.json(result);
    }
    
    catch (error) {
        console.error('Erro:', error);
        res.status(500).json({ msg: 'Erro interno do servidor' });
    };
};

// Update produto
const update_produto = async (req, res) => {
    try {

        const prodId = req.params.id;

        const newData = req.body;

        const result = await update_prod(prodId, newData);
        res.json(result);
    } catch (error) {
        console.error('Erro:', error);
        res.status(500).json({ msg: 'Erro interno do servidor' });
    }
};

// Delete produto
const delete_produto = async (req, res) => {
    try {
        const prodId = req.params.id;
        const result = await delete_prod(prodId);
        res.json(result);
    } catch (error) {
        console.error('Erro:', error);
        res.status(500).json({ msg: 'Erro interno do servidor' });
    }
};


module.exports = { create_produto, get_produto, update_produto, delete_produto };