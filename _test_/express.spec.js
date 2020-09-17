const reqest = require("supertest")
const { app } = require('./../express');

describe("express", () => {
    describe("/user", () => {
        test("GET should 201", (done) => { //Get test  // ต้องมี done ถ้าไม่มี ก็ ผ่า่น หมด
            reqest(app)
                .get("/user")           //async s
                .end((err, res) => {
                    expect(res.status).toEqual(200);
                    done();
                });           
        });
    });
});