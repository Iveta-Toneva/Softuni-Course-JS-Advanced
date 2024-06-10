import { expect } from 'chai';
import { isSymmetric } from '../4-check-for-symmetry.js';


it('Should return true if array is symmetric', () => {

    let input = [7, 1, 7];
    let expectedResult = true;
    let actualResult = isSymmetric(input);

    expect(actualResult).to.be.equal(expectedResult);

});

it('Should return false if array is not symmetric', () => {

    let input = [1, 1, 2, 3, 4];
    let expectedResult = false;

    let actualResult = isSymmetric(input);
    expect(actualResult).to.be.equal(expectedResult);

});

it('Should return false if the input is not array', () => {

    let input = '7,1,7';
    let expectedResult = false;
    let actualResult = isSymmetric(input);
    expect(actualResult).to.be.equal(expectedResult);

});

it('Should return false for different data types in array', () => {
    let input = [7, 1, '7'];
    let expectedResult = false;
    let actualResult = isSymmetric(input);
    expect(actualResult).to.be.equal(expectedResult);
});

it('Should return false if the input is not array', () => {

    let input = undefined;
    let expectedResult = false;
    let actualResult = isSymmetric(input);
    expect(actualResult).to.be.equal(expectedResult);

});



