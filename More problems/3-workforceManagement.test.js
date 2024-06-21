import { expect } from 'chai';
import { workforceManagement } from '../workforceManagement.js';


describe('recruitStaff', () => {

    it('should throw error', () => {
        expect(() => workforceManagement.recruitStaff('Ivan', 'HR', 10)).to.throw('We are not currently hiring for this role.');
    });
    it('should throw error', () => {
        expect(() => workforceManagement.recruitStaff('Ivan', 'QA', 1)).to.throw('We are not currently hiring for this role.');
    });

    it('should return true result', () => {
        expect(workforceManagement.recruitStaff('Ivan', 'Developer', 1)).to.be.equal(`Ivan is not suitable for this role.`);
    });
    it('should return true result', () => {
        expect(workforceManagement.recruitStaff('Ivan', 'Developer', 3)).to.be.equal(`Ivan is not suitable for this role.`);
    });

    it('should return true result', () => {
        expect(workforceManagement.recruitStaff('Ivan', 'Developer', 4)).to.be.equal(`Ivan has been successfully recruited for the role of Developer.`);
    });
    it('should return true result', () => {
        expect(workforceManagement.recruitStaff('Ivan', 'Developer', 10)).to.be.equal(`Ivan has been successfully recruited for the role of Developer.`);
    });

});

describe('computeWages', () => {
    it('should throw error', () => {
        expect(() => workforceManagement.computeWages(-1)).to.throw('Invalid hours');
    });
    it('should throw error', () => {
        expect(() => workforceManagement.computeWages('-1')).to.throw('Invalid hours');
    });
    it('should throw error', () => {
        expect(() => workforceManagement.computeWages()).to.throw('Invalid hours');
    });
    it('should return true result', () => {
        expect(workforceManagement.computeWages(10)).to.be.equal(180);
    });
    it('should return true result', () => {
        expect(workforceManagement.computeWages(10.5)).to.be.equal(189);
    });
    it('should return true result', () => {
        expect(workforceManagement.computeWages(1)).to.be.equal(18);
    });
    it('should return true result', () => {
        expect(workforceManagement.computeWages(160)).to.be.equal(2880);
    });
    it('should return true result', () => {
        expect(workforceManagement.computeWages(161)).to.be.equal(4398);
    });
});

describe('dismissEmployee', () => {
    it('should throw error', () => {
        expect(() => workforceManagement.dismissEmployee(['a', 'b', 'v'], -11)).to.throw('Invalid input');
    });
    it('should throw error', () => {
        expect(() => workforceManagement.dismissEmployee(['a', 'b', 'v'], 11)).to.throw('Invalid input');
    });
    it('should throw error', () => {
        expect(() => workforceManagement.dismissEmployee('a', 'b', 'v', 11)).to.throw('Invalid input');
    });
    it('should throw error', () => {
        expect(() => workforceManagement.dismissEmployee('a', 'b', 'v', 11)).to.throw('Invalid input');
    });
    it('should throw error', () => {
        expect(() => workforceManagement.dismissEmployee('a', 'b', 'v', 11)).to.throw('Invalid input');
    });
    it('should return true result', () => {
        expect(workforceManagement.dismissEmployee(['a', 'b'], 0)).to.be.equal('b');
    });
    it('should return true result', () => {
        expect(workforceManagement.dismissEmployee(['a', 'b', 'c', 'd'], 1)).to.be.equal('a, c, d');
    });

});

