function calories(array) {

    const foods = {};

    for (let index = 0; index < array.length; index++) {

        let food = array[index];
        let calories = Number(array[++index]);
        foods[food] = calories;

    }

    console.log(foods);

}
calories(['Yoghurt', '48', 'Rise', '138',

    'Apple', '52']);