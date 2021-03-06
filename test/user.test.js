const request = require('supertest');

const app = require('../src/app');

test('Deve listar todos os usuários', () => {
  return request(app)
    .get('/users')
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.body).toHaveLength(2);
      expect(res.body[0]).toHaveProperty('name', 'Steve Rogers');
    });
});

test('Deve inserir usuário com sucesso', () => {
  return request(app)
    .post('/users')
    .send({ name: 'Clark Kent', email: 'ck@mail.com' })
    .then((res) => {
      expect(res.status).toBe(201);
      expect(res.body.name).toBe('Clark Kent');
    });
});
