const logMiddleware1 = (req, res, next) => {
    console.log('middleware1');
    next(); // สั่งให้ทำต่อ แต่ถ้าใช้ 
    // ถ้าใช้ return next(); จะหยุด
} // middleware main
// is export ให้ไฟล์อื่นเรียกใช้ได้
module.exports = {
    // ตัวหน้า ใช้ไรก็ได้ แต่ปกติจะใช้ชื่อเดียวกัน
    logMiddleware1: logMiddleware1,
    // หรือจะใช้
    // logmiddleware1
};