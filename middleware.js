const logMiddleware1 = (req, res, next) => {
    console.log('middleware1');
    next();//สั่งให้ทำต่อ  ||  next() =>  return next
}
//export
module.exports = {
    //ตัวหน้าใช้อะไรก็ได้ แต่ ต้องตรงกัน logMiddleware1:
    //logMiddleware1: logMiddleware1  หรือจะใช้
    logMiddleware1
    //server.js => app.use(Middleware.logMiddleware1); // เรียกใช้ middelware
};