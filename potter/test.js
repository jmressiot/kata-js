const price = require('./index');

test('testBasics', () => {
    expect(price([])).toBe(0);
    expect(price([1])).toBe(8);
    expect(price([2])).toBe(8);
    expect(price([3])).toBe(8);
    expect(price([4])).toBe(8);
    expect(price([1,1,1])).toBe(8*3);
});

test('testSimpleDiscounts', () => {
    expect(price([0,1])).toBe(8 * 2 * 0.95);
    expect(price([0,2,4])).toBe(8 * 3 * 0.9);
    expect(price([0,1,2,4])).toBe(8 * 4 * 0.8);
    expect(price([0,1,2,3,4])).toBe(8 * 5 * 0.75);
});

test('testlSeveralDiscounts', () => {
    expect(price([0, 0, 1])).toBe(8 + (8 * 2 * 0.95));
    expect(price([0, 0, 1, 1])).toBe(2 * (8 * 2 * 0.95));
    expect(price([0, 0, 1, 2, 2, 3])).toBe((8 * 4 * 0.8) + (8 * 2 * 0.95));
    expect(price([0, 1, 1, 2, 3, 4])).toBe(8 + (8 * 5 * 0.75));
});


test('testEdgeCases', () => {
    expect(price([0, 0, 1, 1, 2, 2, 3, 4])).toBe(2 * (8 * 4 * 0.8));
    expect(price([0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4])).toBe(3 * (8 * 5 * 0.75) + 2 * (8 * 4 * 0.8));
});
