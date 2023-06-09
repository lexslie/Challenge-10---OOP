const Manager = require('../lib/Manager');

// testing creation of manager profile  
test('creates a Manager profile', () => {
    const manager = new Manager('Leslie', 23, 'lesliiee727@gmail.com', '7');
    expect(manager.officeNumber) .toEqual(expect.any(String));
});

// testing manager office number
test('manager office number', () => {
    const manager = new Manager('Leslie', 23, 'lesliiee727@gmail.com', '4');
    expect(manager.getofficeNumber()).toEqual(expect.stringContaining(manager.officeNumber.toString()));
});

// testing manager role 
test('manager role', () => {
    const manager = new Manager('Leslie', 23, 'lesliiee727@gmail.com', '4');
    expect(manager.getRole()).toEqual("Manager");
});