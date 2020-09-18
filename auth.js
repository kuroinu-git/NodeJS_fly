const { Router } = require('express');
const jwt = require('jsonwebtoken');

module.exports = () => {
  const signup = [];

  const route = Router();
  // http://localhost:3000/user?userId=111 ใช้ใน insomnia

  route.post('/signup', (req, res, next) => {
    const { username, password, role } = req.body;
    signup.push({ username, password, role });
    console.log('post auth');
    next();
  });

  route.post('/login', (req, res, next) => {
    const { username, password, role } = req.body;
    console.log(signup);
    const result = signup.filter((signup) => {
      return (
        username === signup.username &&
        password === signup.password &&
        role === signup.role
      );
    });
    if (result.length > 0) {
        const accesstoken = jwt.sign({ role: result[0].role }, 'sadasdasdasdas');
      res.status(200).send({ accesstoken });
    } else {
      res.status(401).send();
    }
  });

  return route;
};
