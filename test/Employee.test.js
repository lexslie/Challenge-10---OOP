const Employee = require('../lib/Employee');

// creates employee object 
test('creates a new employee', () => {
    const employee = new Employee('Leslie', 23, 'lesliiee727@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// gets id from getId() 
test('testing employee name', () => {
    const employee = new Employee('Leslie', 23, 'lesliiee727@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// gets id from getId() 
test('testing employee id', () => {
    const employee = new Employee('Leslie', 23, 'lesliiee727@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// gets emails from getEmail()
test('testing employee email', () => {
    const employee = new Employee('Leslie', 23, 'lesliiee727@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// gets role from getRole()
test('testing employee role', () => {
    const employee = new Employee('Leslie', 22, 'lesliiee727@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
}); 