const request = require('supertest');
const app = require('../../app');

describe('GET /user', () => {

    it('dados da tabela', async () => {

        const response = await request(app).get('/');
        expect(response.status).toBe(200);
    });

});

describe('POST /user', () => {

    let token;

    it('Login do DB', async () => {

        const response = await request(app).post('/login').send({
            email: 'milly@gmail.com',
            password: '123456789'
        });

        expect(response.status).toBe(200);
        expect(response.body.token).toBeDefined();
        token = response.body.token;
        
    });

    it('Obtenção do ID usando o token Bearer', async () => {
        // token = token.split(' ');
        const response = await request(app).get('/get_user')
            .set('Authorization', `Bearer ${token}`);
        expect(response.status).toBe(200);

    });

}); 

//CAR

describe('POST /car/create_car', () => {
    it('Criar carrinho', async () => {
        const response = await request(app).post('/car/create_car').send({ 
            id: 1,
         }); 
        expect(response.status).toBe(200);
    });
});

describe('GET /car/get_car/:id', () => {
    it('Obter carrinho por ID', async () => {
        const id = 2;
        const response = await request(app).get(`/car/get_car/${id}`);
        expect(response.status).toBe(200);
    });
});

describe('PUT /car/update_car/:id', () => {
    it('Atualizar carrinho por ID', async () => {
        const id = 2;
        const response = await request(app).put(`/car/update_car/${id}`).send({
            id: 5 
         });
        expect(response.status).toBe(200);
    });
});

describe('DELETE /car/delete_car/:id', () => {
    it('Deletar carrinho por ID', async () => {
        const id = 2;
        const response = await request(app).delete(`/car/delete_car/${id}`);
        expect(response.status).toBe(200);
    });
});

//PROD

describe('POST /prod/create_prod', () => {
    it('Criar produto', async () => {
        const response = await request(app).post('/prod/create_prod').send({
             id: 1,
             nome: 'feijão',
             descricao: "legal",
             valor: 10
        });
        expect(response.status).toBe(200);
    });
});

describe('GET /prod/get_prod/:id', () => {
    it('Obter produto por ID', async () => {
        const id = 1;
        const response = await request(app).get(`/prod/get_prod/${id}`);
        expect(response.status).toBe(200);
    });
});

describe('PUT /prod/update_prod/:id', () => {
    it('Atualizar produto por ID', async () => {
        const id = 1;
        const response = await request(app).put(`/prod/update_prod/${id}`).send({ 
            nome: 'Arroz',
            descricao: 'Produto de qualidade inquestionável' 
        });
        expect(response.status).toBe(200);
    });
});

describe('DELETE /prod/delete_prod/:id', () => {
    it('Deletar produto por ID', async () => {
        const id = 1;
        const response = await request(app).delete(`/prod/delete_prod/${id}`);
        expect(response.status).toBe(200);
    });
});