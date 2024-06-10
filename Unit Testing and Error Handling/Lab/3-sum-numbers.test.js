import { expect } from 'chai';
import { sum } from '../sum-of-numbers.js';


it('Should return the sum of the numbers', () => {

    let input = [1, 2, 3, 7];
    let expectedResult = 13;

    let actualResult = sum(input);

    expect(actualResult).to.be.equal(expectedResult);

});


