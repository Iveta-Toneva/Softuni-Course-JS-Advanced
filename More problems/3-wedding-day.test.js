import { expect } from 'chai';
import { weddingDay } from '../weddingDay.js';


describe('pickVenue', () => {

    it('should throw', () => {
        expect(() => weddingDay.pickVenue('100', 100, 'Sofia')).to.throw('Invalid Information!');
    })
    it('should throw', () => {
        expect(() => weddingDay.pickVenue(100, '100', 'Sofia')).to.throw('Invalid Information!');
    })
    it('should throw', () => {
        expect(() => weddingDay.pickVenue(100, 100, '')).to.throw('Invalid Information!');
    })
    it('should throw', () => {
        expect(() => weddingDay.pickVenue(100, 100, 1)).to.throw('Invalid Information!');
    })
    it('should throw', () => {
        expect(() => weddingDay.pickVenue('a', 'b', 1)).to.throw('Invalid Information!');
    })
    it('should throw', () => {
        expect(() => weddingDay.pickVenue(100, 100, 'Sofia')).to.throw('The location of this venue is not in the correct area!');
    });
    it('should return: This venue does not meet your requirements!', () => {
        expect(weddingDay.pickVenue(100, 100, 'Varna')).to.be.equal('This venue does not meet your requirements!');
    });
    it('should return: This venue does not meet your requirements!', () => {
        expect(weddingDay.pickVenue(100, 200, 'Varna')).to.be.equal('This venue does not meet your requirements!');
    });
    it('should return: This venue does not meet your requirements!', () => {
        expect(weddingDay.pickVenue(200, 300, 'Varna')).to.be.equal('This venue does not meet your requirements!');
    });

    it('should return true result', () => {
        expect(weddingDay.pickVenue(150, 120, 'Varna')).to.be.equal('This venue meets the requirements, with capacity of 150 guests and 120$ cover.')
    });

    it('should return true result', () => {
        expect(weddingDay.pickVenue(150, -1, 'Varna')).to.be.equal('This venue meets the requirements, with capacity of 150 guests and -1$ cover.')
    });

    it('should not meet the requirements', () => {
        expect(weddingDay.pickVenue(-1, -1, 'Varna')).to.be.equal('This venue does not meet your requirements!')
    });


});


describe('otherSpendings', () => {

    it('should throw', () => {
        expect(() => weddingDay.otherSpendings('a', [], true)).to.throw('Invalid Information');
    });

    it('should throw', () => {
        expect(() => weddingDay.otherSpendings([1, 1], 'a', true)).to.throw('Invalid Information');
    });
    it('should throw', () => {
        expect(() => weddingDay.otherSpendings([1, 1], ['a'], 'yes')).to.throw('Invalid Information');
    });

    // it('should throw', () => {
    //     expect(() => weddingDay.otherSpendings([], [], true)).to.throw('Invalid Information'); //
    // });

    it('should return true result', () => {
        expect(weddingDay.otherSpendings(['flowers'], ['pictures'], false)).to.be.equal('You spend 1200$ for wedding decoration and photography!');
    });

    it('should return true result', () => {
        expect(weddingDay.otherSpendings(['flowers'], ['pictures'], true)).to.be.equal('You spend 1020$ for wedding decoration and photography with 15% discount!');
    });

    it('should return true result', () => {
        expect(weddingDay.otherSpendings(['Fabric drapes and curtains'], ['video'], false)).to.be.equal('You spend 1700$ for wedding decoration and photography!');
    });

    it('should return true result', () => {
        expect(weddingDay.otherSpendings(['Fabric drapes and curtains'], ['video'], true)).to.be.equal('You spend 1445$ for wedding decoration and photography with 15% discount!');
    });


});


describe('tableDistribution', () => {

    it('should throw error', () => {
        expect(() => weddingDay.tableDistribution('1', '3')).to.throw('Invalid Information');
    });
    it('should throw error', () => {
        expect(() => weddingDay.tableDistribution('a', 'b')).to.throw('Invalid Information');
    });
    it('should throw error', () => {
        expect(() => weddingDay.tableDistribution(1, 'b')).to.throw('Invalid Information');
    });
    it('should throw error', () => {
        expect(() => weddingDay.tableDistribution(0, 0)).to.throw('Invalid Information');
    });
    it('should throw error', () => {
        expect(() => weddingDay.tableDistribution(1, 0)).to.throw('Invalid Information');
    });
    it('should throw error', () => {
        expect(() => weddingDay.tableDistribution(-1, -11)).to.throw('Invalid Information');
    });

    it('should return true result', () => {
        expect(weddingDay.tableDistribution(10, 3)).to.be.equal('There is only 3 people on every table, you can join some tables.');
    });

    it('should return true result', () => {
        expect(weddingDay.tableDistribution(100, 3)).to.be.equal('You have 3 tables with 33 guests on table.');
    });

});