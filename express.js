const express = require('express'); // ตัวแปรเก็บ 1 modul
const { logMiddleware1 } = require('./middleware');
const user = require("./user");

const app = express(); // สร้าง modul มาเก็บ

//app.use(Middleware.logMiddleware1); // เรียกใช้ middelware แบบเต็ม จะมี extention  หรือ เรียกใช้
app.use(logMiddleware1);

app.use("/user", user());

app.use((req, res, next) => { //get middleware.js
    //console.log('get user');
    console.log('sucess');
    //res.sendStatus(200);// postman => status
    //next(new Error(''));// new Error เรียก app.use((err, req, res, next) => { // error
});

app.use((err,req, res, next) => { //post
    //console.log('post user');
    console.log(err);
    //res.sendStatus(201);
    //next();
});// ใส่่ enviroment ใส่ callback ให้



module.exports = {
    app         //มี endpoint start server
}