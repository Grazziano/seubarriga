const app = require('express')();

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

module.exports = app;
