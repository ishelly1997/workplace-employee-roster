const Employee = require('../lib/Employee');
const employee = new Employee('Jeff','01','jeff@jeff.com');

test('test for input values', () => {
    expect(employee.name).toBe('Jeff');
    expect(employee.id).toBe('01');
    expect(employee.email).toBe('jeff@jeff.com')
})

test('test getName function', () => {
    expect(employee.getName()).toBe('Jeff');
})

test('test getId function', () => {
    expect(employee.getId()).toBe('01');
})

test('test getEmail function', () => {
    expect(employee.getEmail()).toBe('jeff@jeff.com');
})