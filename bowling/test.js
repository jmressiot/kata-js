import * as bowling from './index';

describe('Bowling', () => {

    test('gutter game should return 0', () => {
        expect(bowling.score('-- -- -- -- -- -- -- -- -- --')).toEqual(0);
    });

    test('10 frames of 1+1 should return 20', () => {
        expect(bowling.score('11 11 11 11 11 11 11 11 11 11')).toEqual(20);
    });

    test('10 frames of 1 and miss should return 90', () => {
        expect(bowling.score('1- 1- 1- 1- 1- 1- 1- 1- 1- 1-')).toEqual(10);
    });

    test('9 frames of 1+1 then 10th with spare and final 1 should return 29', () => {
        expect(bowling.score('11 11 11 11 11 11 11 11 11 1/ 11')).toEqual(29);
    });

    test('9 frames of 1+1 then 10th with strike and final 1+1 should return 30', () => {
        expect(bowling.score('11 11 11 11 11 11 11 11 11 X 11')).toEqual(30);
    });
    
    test('10 frames of 5 and spare, with a final 5 should return 150', () => {
        expect(bowling.score('5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5')).toEqual(150);
    });

    test('(12 rolls: 12 strikes should return 300', () => {
        expect(bowling.score('X X X X X X X X X X X X')).toEqual(300);
    });

});