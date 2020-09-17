const { Router } = require("express");
const {logMiddleware1} = require("./middleware");
const jwt = require("jsonwebtoken");


module.exports = () => {
    const route = Router();
    route.use(logMiddleware1);
    // แบบที่ context
    route.get('/',(req, res, next) => {
        console.log('get user');
        const userId = req.query.userId;
        
        res.status(201).send({
            userId: userId
        });
        next(new Error('')); // จะส่ง error ไป เรียก app.use ใน พารามิเตอร์ตัวแรก
    });
    // http://localhost:3000/user?userId=111 ใช้ใน insomnia

    // แบบที่ query string
    route.get('/:id', (req, res, next) => {
        console.log('get user param');
        const { id } = req.params;
        
        res.status(201).send({
            id: id
        });
        next(); // จะส่ง error ไป เรียก app.use ใน พารามิเตอร์ตัวแรก
    });
    // http://localhost:3000/user/1111 ใช้ใน insomnia




    route.post('/', (req, res, next) => {
        const body = req.body;
        const accesToken = jwt.sign(body, "asdasdsadasdasdaszxc", {expiresIn: '1m'})
        console.log('post user');
        res.status(201).send({
            ...body,
            accesToken
        });
        next();// จะส่ง parameter req ไปที่ app.use console.log("success"); 
    // ถ้า next() ที่ตัวนี้ จะทำตัวล่าง
    });
    
    route.post('/login', (req, res, next) => {
        const token = req.headers["x-auth-token"];
        try {
            const decode = jwt.verify(token, "asdasdsadasdasdaszxc");
            res.status(200).send(decode);
        } catch (err) {
            res.sendStatus(401); 
        }
    });

return route;

}