const jwt = require('jsonwebtoken');

const logMiddleware1 = (req, res, next) => {
  console.log('middleware1');
  next(); // สั่งให้ทำต่อ แต่ถ้าใช้
  // ถ้าใช้ return next(); จะหยุด
}; // middleware main
// is export ให้ไฟล์อื่นเรียกใช้ได้

const logAdmin = (req, res, next) => {
  console.log('check admin');
  const token = req.headers['x-auth-token'];
  try {
    const decode = jwt.verify(token, 'sadasdasdasdas');
    console.log(decode);
    if (decode.role === 'admin') {
      next();
    }
    res.sendStatus(401);
  } catch (err) {
    res.sendStatus(401);
  }
};

const logUser = (req, res, next) => {
  console.log('check user');
  const token = req.headers['x-auth-token'];
  if (!token) {
    res.sendStatus(401);
    return;
  }
    const decode = jwt.verify(token, 'sadasdasdasdas');
    console.log(decode);
    if (decode.role === 'admin' || decode.role === 'user') {
      next();
    }
};

  

module.exports = {
  // ตัวหน้า ใช้ไรก็ได้ แต่ปกติจะใช้ชื่อเดียวกัน
  logMiddleware1: logMiddleware1,
  logAdmin,
  logUser,
  // หรือจะใช้
  // logmiddleware1
};
