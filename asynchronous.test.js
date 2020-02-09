const fetchData = async (callback) => {
    setTimeout(() => {
        return callback('peanut butter');
    }, 3000);
}

const fetchDataWithPromises = () => new Promise((resolve, reject) => {
    resolve('peanut butter');
});

// The test will finish until 'done' is called
test('the data is peanut butter', done => {
    const callBack = data => {
        try {
            expect(data).toBe('peanut butter');
            done();
        } catch(error) {
            done(error);
        }
    };
    fetchData(callBack);
});

test('Promises > the data is peanut butter', () => {
    return fetchDataWithPromises().then(data => {
        expect(data).toBe('peanut butter');
    });
});

test('Promises > resolves > the data is peanut butter', () => {
    return expect(fetchDataWithPromises()).resolves.toBe('peanut butter');
});

test('Promises > async/await > the data is peanut butter', async () => {
    const data = await fetchDataWithPromises();
    expect(data).toBe('peanut butter');
});



