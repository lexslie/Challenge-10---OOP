const Engineer = require('../lib/Engineer');

// testing creation of engineer profile  
test('creates an Engineer profile', () => {
    const engineer = new Engineer('Leslie', 23, 'lesliiee727@gmail.com', 'lexslie');
    expect(engineer.github) .toEqual(expect.any(String));
});

// testing engineer github
test('engineer github', () => {
    const engineer = new Engineer('Leslie', 23, 'lesliiee727@gmail.com', 'lexslie');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// testing engineer role 
test('employee role', () => {
    const engineer = new Engineer('Leslie', 23, 'lesliiee727@gmail.com', 'lexslie');
    expect(engineer.getRole()).toEqual("Engineer");
});