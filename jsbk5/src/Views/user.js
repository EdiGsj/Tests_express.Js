const express = require('express');
const user = express();

const { login, get_user_id, update_user_id, delete_user_id, create_user, get_all_users_handler } = require('../Controllers/user');
const authMiddleware = require('../Controllers/Utils/auth')

user.post('/login', login)
user.get('/get_user', authMiddleware ,get_user_id);
user.get('/', get_all_users_handler);
user.post('/create_user', create_user);
user.put('/put', authMiddleware, update_user_id);  
user.delete('/delete', authMiddleware, delete_user_id); 

module.exports = user;

