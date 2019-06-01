import * as potter from './index';

describe('Potter', () => {
    test('testBasics', () => {
        expect(potter.price([])).toEqual(0);
        expect(potter.price([1])).toEqual(8);
        expect(potter.price([2])).toEqual(8);
        expect(potter.price([3])).toEqual(8);
        expect(potter.price([4])).toEqual(8);
        expect(potter.price([1,1,1])).toEqual(8*3);
    });

    test('testSimpleDiscounts', () => {
        expect(potter.price([0,1])).toEqual(8 * 2 * 0.95);
        expect(potter.price([0,2,4])).toEqual(8 * 3 * 0.9);
        expect(potter.price([0,1,2,4])).toEqual(8 * 4 * 0.8);
        expect(potter.price([0,1,2,3,4])).toEqual(8 * 5 * 0.75);
    });

    test('testlSeveralDiscounts', () => {
        expect(potter.price([0, 0, 1])).toEqual(8 + (8 * 2 * 0.95));
        expect(potter.price([0, 0, 1, 1])).toEqual(2 * (8 * 2 * 0.95));
        expect(potter.price([0, 0, 1, 2, 2, 3])).toEqual((8 * 4 * 0.8) + (8 * 2 * 0.95));
        expect(potter.price([0, 1, 1, 2, 3, 4])).toEqual(8 + (8 * 5 * 0.75));
    });


    test('testEdgeCases', () => {
        expect(potter.price([0, 0, 1, 1, 2, 2, 3, 4])).toEqual(2 * (8 * 4 * 0.8));
        expect(potter.price([0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4])).toEqual(3 * (8 * 5 * 0.75) + 2 * (8 * 4 * 0.8));
    });

    test('testGroupByUniqueBooks', () => {
        expect(potter.groupByUniqueBooks([])).toEqual([0,0,0,0,0]);
        expect(potter.groupByUniqueBooks([1,1,2,2,3,3,3])).toEqual([0,2,2,3,0]);
    });

});