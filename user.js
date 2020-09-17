const { Router } = require("express");
const { logMiddleware1 } = require('./middleware');


module.exports = () => {
    const route = Router();
    route.use(logMiddleware1);

    route.get('/', (req, res, next) => { //get middleware.js
        console.log('get user');
        const {userId} = req.query; //query String  
        res.status(200).send({
            userId: userId
        });// postman => status
        next();// new Error เรียก app.use((err, req, res, next) => { // error
    });
    // Query params postman => http://localhost:3000/user?userId=999  

    route.get('/:id', (req, res, next) => { //post
        console.log('get user param');
        const { id } = req.params; //query String
        res.status(201).send({
            id: id
        });// postman => status
        next();
    });

    return route;
    // Params postman => http://localhost:3000/user/8998
}