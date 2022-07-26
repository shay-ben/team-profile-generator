const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "ShayBen";
    const employeeInstance = new Engineer("Shay", 2, "Shayb@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "ShayBen";
    const employeeInstance = new Engineer("ShayB", 2, "shayb@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("shay", 2, "shayb@bendeck", "ShayB");
    expect(employeeInstance.getRole()).toBe(returnValue);
});