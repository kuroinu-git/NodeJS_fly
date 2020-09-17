const express = require('express');
const middleware = require('./middleware'); //หรือจะใช้
// const {logMiddleware1} = require('./middleware'); ในกรณีที่เรียกใช้ยาวๆ
const user = require("./user");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use(middleware.logMiddleware1);

app.use("/user", user());

// this is middleware success!
app.use((req, res, next) => {
    console.log('success');
});

app.use((err, req, res, next) => {
    console.log(err);
}); // parameters err should be first position because app.get will send err function. 

module.exports = {
    app
}