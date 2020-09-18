const  request = require("supertest");
const { app } = require("../express"); // should be import same to export.

describe("express", () => {
    describe("/user", () => {
        test("GET should return 201", (done) => {
            request(app)
                .get("/user")
                .end((err, res) => {
                    expect(res.status).toEqual(201);
                    done();
                });
        });
    });
});

describe("express", () => {
    describe("/public", () => {
        test("GET should return 201", (done) => {
            request(app)
                .get("/public")
                .end((err, res) => {
                    expect(res.status).toEqual(201);
                    done();
                });
        });
    });
});

