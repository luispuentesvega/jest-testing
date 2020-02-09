beforeAll(() => {
    console.log('------beforeAll');
});

afterAll(() => {
    console.log('afterAll-------');
});

beforeEach(() => {
    console.log('...Before');
});

afterEach(() => {
    console.log('After...');
});

test('city database has Viena', () => {
    
});

test.only('city database has San Juan', () => {
    
});