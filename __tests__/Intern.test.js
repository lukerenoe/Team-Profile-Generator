const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
const testValue = "School";
const e = new Intern("Foo", 1, "test@test.com", testValue);
expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
const testValue = "Intern";
const e = new Intern("Foo", 1, "test@test.com", "School");
expect(e.getRole()).toBe(testValue);
});

test("Can get school name via getSchool()", () => {
const testValue = "School";
const e = new Intern("Foo", 1, "test@test.com", testValue);
expect(e.getSchool()).toBe(testValue);
});