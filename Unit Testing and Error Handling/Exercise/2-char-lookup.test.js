import { expect } from 'chai';
import { lookupChar } from '../2-char-lookup.js';


it('Should return undifened when the input is incorrect', () => {
    expect(lookupChar(1, 1)).to.be.equal(undefined);
});

it('Should return undifened when the input is incorrect', () => {
    expect(lookupChar(1, 'a')).to.be.equal(undefined);
});

it('Should return undifened when the input is incorrect', () => {
    expect(lookupChar('aaa', 1.5)).to.be.equal(undefined);
});

it('Should return undifened when the input is incorrect', () => {
    expect(lookupChar(1, 1.5)).to.be.equal(undefined);
});

it('Should return the correct char', () => {
    expect(lookupChar('abc', 0)).to.be.equal('a');
});

it('Should return the correct char', () => {
    expect(lookupChar('abcd', 3)).to.be.equal('d');
});

it('Should return incorrect index', () => {
    expect(lookupChar('abc', 3)).to.be.equal('Incorrect index');
});

it('Should return incorrect index', () => {
    expect(lookupChar('abc', -1)).to.be.equal('Incorrect index');
});
