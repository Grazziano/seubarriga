const app = require('express')();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

app.get('/', (req, res) => {
  res.status(200).send();
});

app.get('/users', (req, res) => {
  const users = [
    { name: 'Steve Rogers', email: 'steve@mail.com' },
    { name: 'Lara Croft', email: 'lara@mail.com' },
  ];
  res.status(200).json(users);
});

app.post('/users', (req, res) => {
  const { name, email } = req.body;
  res.status(201).json({ name, email });
});

module.exports = app;
