const cors = require('cors');
const express = require('express');
const DB = require('./src/DB/DB.js');

const app = express();
app.use(express.json());
app.use(cors());

const userRoutes = require('./src/Views/user.js');
const prodRoutes = require('./src/Views/produto.js');
const carRoutes = require('./src/Views/carrinho.js');

app.use('/', userRoutes);
app.use('/prod', prodRoutes);
app.use('/car', carRoutes);

const PORT = 3000; 

app.listen(PORT, () => {
    DB.sync()
        .then(() => {
            console.log(`Servidor pronto na porta ${PORT}`);
        })
        .catch((err) => {
            console.error('Erro ao sincronizar o modelo com o DB: ', err);
        });
});

// Configuração do Swagger
// const swaggerOptions = {
//     swaggerDefinition: {
//       openapi: '3.0.0',
//       info: {
//         title: 'API de Usuários',
//         version: '1.0.0',
//         description: 'Documentação da API de Usuários com Swagger',
//       },
//       servers: [
//         {
//           url: 'http://localhost:3000',
//           description: 'Servidor local',
//         },
//       ],
//     },
//     apis: ['swagger.js', 'app.js'], // Caminho para os arquivos que contêm anotações JSDoc
// };
  
// const swaggerSpec = swaggerJsdoc(swaggerOptions);
// app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;