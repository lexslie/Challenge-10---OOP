const Employee = require('../lib/Employee');

// testing creation of employee profile 
test('creates a new employee', () => {
    const employee = new Employee('Leslie', 23, 'lesliiee727@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// testing employee name 
test('employee name', () => {
    const employee = new Employee('Leslie', 23, 'lesliiee727@gmail.com');
    expect(employee.getName()).toEqual(expect.any(String));
});

// testing employee id 
test('employee id', () => {
    const employee = new Employee('Leslie', 23, 'lesliiee727@gmail.com');
    expect(employee.getId()).toEqual(expect.any(Number));
});

// testing employee email
test('employee email', () => {
    const employee = new Employee('Leslie', 23, 'lesliiee727@gmail.com');
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// testing employee role
test('employee role', () => {
    const employee = new Employee('Leslie', 22, 'lesliiee727@gmail.com');
    expect(employee.getRole()).toEqual("Employee");
});