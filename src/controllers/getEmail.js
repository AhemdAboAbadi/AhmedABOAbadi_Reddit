const getEmail = (req, res) => {
  const { user } = req;
  res.json({ user });
};

module.exports = getEmail;
