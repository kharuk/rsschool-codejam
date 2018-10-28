const assert = require('assert');
Object.freeze(assert);
const sumOfOther = require('./src/sumOfOther.js');
const make = require('./src/make.js');
const recursion = require('./src/recursion.js');

describe('sumOfOther', () => {
    it('1', () => {
        const result =  sumOfOther([2, 3, 4, 1]);
        assert.equal(result.toString() , [8, 7, 6, 9].toString());
    });

    it('2', () => {
        const result =  sumOfOther([5, 8, 3, 1]);
        assert.equal(result.toString() , [12, 9, 14, 16].toString());
    });

    it('3', () => {
        const result =  sumOfOther([250, 180, 32, 16]);
        assert.equal(result.toString() , [228, 298, 446, 462].toString());
    });

    it('4', () => {
        const result =  sumOfOther([]);
        assert.equal(result.toString() , [].toString());
    });
});

describe('make', () => {
    function sum(a, b) {
        return a + b;
    }

    function difference(a, b) {
        return a - b;
    }

    it('1', () => {
        const result =  make(15)(34, 21, 666)(41)(sum);
        assert.equal(result , 777);
    });

    it('2', () => {
        const result =  make(15)(34, 21)(55, 85)(41)(sum);
        assert.equal(result , 251);
    });

    it('3', () => {
        const result =  make(521)(34, 21)(55, 85)(41)(difference);
        assert.equal(result , 285);
    });

    it('4', () => {
        const result =  make(21)(34, 21)(55, 85)(41)((a,b)=> a + 2*b);
    assert.equal(result , 493);
    });

    it('5', () => {
        const result = make('aaa')('bbb')('ccc', 'ddd')(sum);
        assert.equal(result, 'aaabbbcccddd');
    });
});

describe('recursion', () => {
    it('1', () => {
        let tree = {"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}};
        const result =  recursion(tree);
        assert.deepEqual(result.toString() , ([[100], [90, 120], [70,99,110,130]]).toString());
    });

    it('2', () => {
        let tree = {"value":100};
    const result =  recursion(tree);
    assert.deepEqual(result.toString() , ([100]).toString());
    });

    it('3', () => {
        let tree = {};
        const result =  recursion(tree);
        assert.deepEqual(result.toString() , ([]).toString());
    });

    it('4', () => {
        let tree = {"value":100,"left":{"value":90,"left":{"value":70, "right":{"value":75}},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130,"left":{"value":125}}}};
        const result =  recursion(tree);
        assert.deepEqual(result.toString() , ([[100], [90, 120], [70,99,110,130], [75,125]]).toString());
    });
});