/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
*/

/**
 * @swagger
* /login:
 *   post:
 *     summary: Autentica um usuário
 *     tags: [Usuários]
 *     parameters:
 *       - in: path
 *         name: email
 *         description: Email
 *       - in: path
 *         name: password
 *         description: Senha
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Endereço de e-mail do usuário.
 *               password:
 *                 type: string
 *                 description: Senha do usuário.
 *           examples:
 *             example1:
 *               value:
 *                 "email": "edi@gmail.com"
 *                 "password": "12345678910"
 *     responses:
 *       200:
 *         description: Autenticação bem-sucedida
 * /{id}:
 *   get:
 *     summary: Obtém um usuário por ID
 *     tags: [Usuários]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do usuário a ser obtido
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Dados do usuário
 *         content:
 *           application/json:
 *             example:
 *               id: "123"
 *               name: "John Doe"
 *               email: "john.doe@example.com"
 *       404:
 *         description: Usuário não encontrado
 * /:
 *  get:
 *     summary: Pega todos os usuários
 *     tags: [Usuários]
 *     responses:
 *       200:
 *         description: Chamada bem Sucessida!
  *         content:
 *              application/json:
 *                 example: 
 *                    /

 * /post:
 *  post:
 *     summary: Lança novos usuários
 *     tags: [Usuários]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                type: string
 *               age: 
 *                 type: integer
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               phone: 
 *                 type: string
 *     responses:
 *       200:
 *         description: Lançamento bem sucessido!
 *         content:
 *          application/json:
 *            example:
 *              value:
 *                 name: "Yan"
 *                 age: 20
 *                 email: "Yan@gmail.com"
 *                 password: "12345678910"
 *                 phone: "990099009"  

 * /put/{id}:
 *  put:
 *     summary: Atualiza usuários
 *     tags: [Usuários]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                type: string
 *               age:
 *                 type: integer
 *               email:
 *                 type: string
 *               phone: 
 *                 type: string
 *     responses:
 *       200:
 *         description: Atualização bem sucessida!
 *         content:
 *             application/json:
 *                 example:
 *                     value:
 *                         name: "Mude O Nome"
* /delete/{id}:
 *   delete:
 *     summary: Deleta usuários por id
 *     tags: [Usuários]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Exclusão realizada com sucesso
 *         content:
 *           application/json:
 *             example:
 *               value:
 *                 id: 2
 */
