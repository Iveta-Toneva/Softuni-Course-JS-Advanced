import { expect } from 'chai';
import { isOddOrEven } from '../1-even-or-odd.js';

it('Should return undefined if the input is not string', () => {
    expect((isOddOrEven(1))).to.be.equal(undefined);
});

it('Should return undefined if the input is not string', () => {
    expect((isOddOrEven(['a', 'b']))).to.be.equal(undefined);
});

it('Should return even', () => {
    expect((isOddOrEven('aaaa'))).to.be.equal('even');
});

it('Should return odd', () => {
    expect((isOddOrEven('aaa'))).to.be.equal('odd');
});

it('Should return undefined if the input is with more string parameters', () => {
    expect((isOddOrEven('a', 'b', 'ccc'))).to.be.equal(undefined);
});