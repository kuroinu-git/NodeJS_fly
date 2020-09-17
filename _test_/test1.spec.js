const { sum } = require("./../test1");
describe("sum", () => {
    test("should return 2 when operand1 and operand2 is 1", () => {
        //operand1 each 1 , operand2 each 2
        //การเขียน test ที่นิยม
        //Arrange => การเตรียมของ
        const operand1 = 2;
        const operand2 = 4;
        //Act => เช็ค object
        const result = sum(operand1,operand2);
        //Assert => ยืนยัน  assertEquals(expected, actual)
        expect(result).toEqual(6);
    });
});