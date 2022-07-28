const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "ShayBen";
    const  newEngineer = new Engineer("Shay", 2, "Shayb@gmail.com", testGithub);
    expect(newEngineer.github).toEqual(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "ShayBen";
    const newEngineer = new Engineer("ShayB", 2, "shayb@gmail.com", testGithub);
    expect(newEngineer.getGithub()).toEqual(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const newEngineer = new Engineer("shay", 2, "shayb@bendeck", "ShayB");
    expect(newEngineer.getRole()).toEqual(returnValue);
});