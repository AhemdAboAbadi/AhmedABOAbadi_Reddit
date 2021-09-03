const { join } = require('path');

const profilePage = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'profile.html'));
};

module.exports = profilePage;
