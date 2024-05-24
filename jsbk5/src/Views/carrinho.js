const express = require('express');
const car = express();

const { create_carrinho, get_carrinho, update_carrinho, delete_carrinho } = require('../Controllers/carrinho')

car.post('/create_car', create_carrinho);
car.get('/get_car/:id', get_carrinho);
car.put('/update_car/:id', update_carrinho);
car.delete('/delete_car/:id', delete_carrinho);

module.exports = car;