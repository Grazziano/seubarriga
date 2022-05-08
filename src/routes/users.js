module.exports = () => {
  const findAll = (req, res) => {
    const users = [
      { name: 'Steve Rogers', email: 'steve@mail.com' },
      { name: 'Lara Croft', email: 'lara@mail.com' },
    ];
    res.status(200).json(users);
  };

  const create = (req, res) => {
    const { name, email } = req.body;
    res.status(201).json({ name, email });
  };

  return { findAll, create };
};
