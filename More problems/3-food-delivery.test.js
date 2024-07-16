import { expect } from 'chai';
import { foodDelivery } from '../food delivery.js';


it('', () => {
    expect(foodDelivery.getCategory('Vegan')).to.be.equal('Dishes that contain no animal products.');
})
it('', () => {
    expect(foodDelivery.getCategory('Vegetarian')).to.be.equal('Dishes that contain no meat or fish.');
})
it('', () => {
    expect(foodDelivery.getCategory('Gluten-Free')).to.be.equal('Dishes that contain no gluten.');
})
it('', () => {
    expect(foodDelivery.getCategory('All')).to.be.equal('All available dishes.');
})
it('', () => {
    expect(() => foodDelivery.getCategory('meat')).to.throw('Invalid Category!');
})
it('', () => {
    expect(() => foodDelivery.getCategory('egg')).to.throw('Invalid Category!');
})
it('', () => {
    expect(() => foodDelivery.getCategory('')).to.throw('Invalid Category!');
})
it('', () => {
    expect(() => foodDelivery.getCategory([])).to.throw('Invalid Category!');
})


it('', () => {
    expect(() => foodDelivery.addMenuItem([],5)).to.throw('Invalid Information!');
})
it('', () => {
    expect(() => foodDelivery.addMenuItem('egg',5)).to.throw('Invalid Information!');
})
it('', () => {
    expect(() => foodDelivery.addMenuItem('egg',11)).to.throw('Invalid Information!');
})
it('', () => {
    expect(() => foodDelivery.addMenuItem(['a','b'],3)).to.throw('Invalid Information!');
})
it('', () => {
    expect(() => foodDelivery.addMenuItem(['a','b'],'3')).to.throw('Invalid Information!');
})
it('', () => {
    expect(() => foodDelivery.addMenuItem(['a','b',3],'3')).to.throw('Invalid Information!');
})
it('', () => {
    expect(foodDelivery.addMenuItem(['a','b'],7)).to.be.equal('There are 0 available menu items matching your criteria!');
})



it('', () => {
    expect(() => foodDelivery.calculateOrderCost('',[],true)).to.throw('Invalid Information!');
})
it('', () => {
    expect(() => foodDelivery.calculateOrderCost([],'',true)).to.throw('Invalid Information!');
})
it('', () => {
    expect(() => foodDelivery.calculateOrderCost([],[],'yes')).to.throw('Invalid Information!');
})
it('', () => {
    expect(() => foodDelivery.calculateOrderCost()).to.throw('Invalid Information!');
})

it('', () => {
    expect(foodDelivery.calculateOrderCost(['standard'],['sauce'],false)).to.be.equal('You spend $4.00 for shipping and addons!');
})
it('', () => {
    expect(foodDelivery.calculateOrderCost(['express'],['beverage'],false)).to.be.equal('You spend $8.50 for shipping and addons!');
})

it('', () => {
    expect(foodDelivery.calculateOrderCost(['standard'],['sauce'],true)).to.be.equal('You spend $3.40 for shipping and addons with a 15% discount!');
})
it('', () => {
    expect(foodDelivery.calculateOrderCost(['express'],['beverage'],true)).to.be.equal('You spend $7.22 for shipping and addons with a 15% discount!');
})

