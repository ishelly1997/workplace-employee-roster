const Manager = require('../lib/Manager');'linda@jeff.com');

test('test for input values', () => {
    expect(employee.name).toBe('Linda');
    expect(employee.id).toBe('02');
    expect(employee.email).toBe('linda@jeff.com')
})

test('test getName function', () => {
    expect(employee.getName()).toBe('Linda');
})

test('test getId function', () => {
    expect(employee.getId()).toBe('02');
})

test('test getEmail function', () => {
    expect(employee.getEmail()).toBe('Linda@jeff.com');
})