
const { Router } = require("express");
const jwt = require("jsonwebtoken");

module.exports = () => {

    const route = Router();

    route.get('/', (req, res, next) => {
        console.log('not authenticated');        
        res.sendStatus(201)
        next(); // จะส่ง error ไป เรียก app.use ใน พารามิเตอร์ตัวแรก
    });

    return route;

}