function fruitPrice(fruit, weightInGrams, pricePerKg) {

    let price = weightInGrams / 1000 * pricePerKg;
    console.log(`I need $${price.toFixed(2)} to buy ${(weightInGrams / 1000).toFixed(2)} kilograms ${fruit}.`);

}
fruitPrice('orange', 2500, 1.80);