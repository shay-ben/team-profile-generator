const employee = require("./Deveope/lib/employee");

const employee = new employee();

test("test if you can find a constructor for the object", (
    expect(employee.name).toBe(BOB),
    expect(employee.ID).toBe(1),
    expect(employee.email).toBe ("fakeBOB@gmal.com"))

);
