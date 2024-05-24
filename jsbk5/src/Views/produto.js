const express = require('express');
const prod = express();

const { create_produto, get_produto, update_produto, delete_produto } = require('../Controllers/produtos')

prod.post('/create_prod', create_produto);
prod.get('/get_prod/:id', get_produto);
prod.put('/update_prod/:id', update_produto);
prod.delete('/delete_prod/:id', delete_produto);

module.exports = prod;