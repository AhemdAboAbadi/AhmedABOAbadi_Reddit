const jwt = require('jsonwebtoken');
const getDataProfile = require('../database/quires/getProfileQuery');

const getProfile = (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, 'token', (err, decoded) => {
    if (err) {
      console.log(err);
      console.log(decoded);
      res.json({ msg: 'Error' });
    } else {
      console.log(decoded);
      getDataProfile(decoded.email)
        .then((data) => res.json(data))
        // .then((data) => console.log(data))
        .catch(() => res.status(500).json({ msg: 'Internal Server Error' }));
    }
  });
};

module.exports = getProfile;
