function carFactory(object) {

    let car = {};
    car.model = object.model;

    if (object.power <= 90) {

        car.engine = {
            power: 90,
            volume: 1800
        }

    } else if (object.power <= 120) {
        car.engine = {
            power: 120,
            volume: 2400,
        }

    } else {
        car.engine = {
            power: 200,
            volume: 3500
        }
    }
    car.carriage = {
        type: object.carriage,
        color: object.color
    }

    let wheels = 0;

    if (object.wheelsize % 2 === 0) {
        wheels = object.wheelsize-1;
    } else {
        wheels = object.wheelsize;
    }

    car.wheels = [wheels, wheels, wheels, wheels];

    return car;

}

carFactory({
    model: 'VW Golf II',

    power: 90,

    color: 'blue',

    carriage: 'hatchback',

    wheelsize: 14
});