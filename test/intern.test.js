const Intern = require("../lib/Intern");

test("Can create school.", () => {
    const testSchool = "BOOT CAMP";
    const employeeInstance = new Intern("BEN", 2, "ben@eggs.com", testSchool);
    expect(employeeInstance.school).toBe(testSchool);
});

test("Testing officeNumber will return office number.", () => {
    const testSchool = "School Name";
    const employeeInstance = new Intern("BEN", 2, "ben@eggs.com", testSchool);
    expect(employeeInstance.getSchool()).toBe(testSchool);
});

test("Testing role.", () => {
    const returnValue = "Intern";
    const employeeInstance = new Intern("BEN", 2, "ben@eggs.com", "BOOT CAMP");
    expect(employeeInstance.getRole()).toBe(returnValue);
});