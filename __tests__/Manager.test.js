const Manager = require("../lib/Manager");

test("Can set office number via constructor", () => {
const testValue = "OfficeNumber";
const e = new Manager("Foo", 1, "test@test.com", testValue);
expect(e.office).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
const testValue = "Manager";
const e = new Manager("Foo", 1, "test@test.com", "OfficeNumber");
expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
const testValue = "OfficeNumber";
const e = new Manager("Foo", 1, "test@test.com", testValue);
expect(e.getOfficeNumber()).toBe(testValue);
});