const Intern = require('../lib/Intern');

// testing creation of intern profile  
test('creates an Intern profile', () => {
    const intern = new Intern('Leslie', 23, 'lesliiee727@gmail.com', 'UCSB');
    expect(intern.school) .toEqual(expect.any(String));
});

// testing intern school
test('intern school', () => {
    const intern = new Intern('Leslie', 23, 'lesliiee727@gmail.com', 'UCSB');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// testing intern role 
test('intern role', () => {
    const intern = new Intern('Leslie', 23, 'lesliiee727@gmail.com', 'UCSB');
    expect(intern.getRole()).toEqual("Intern");
});