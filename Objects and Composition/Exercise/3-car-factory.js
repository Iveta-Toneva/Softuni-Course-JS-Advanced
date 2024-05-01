function carFactory(car) {

    if (car.power <= 90) {
        car.engine = {
            power: 90,
            volume: 1800,
        }
    } else if (car.power > 90 && car.power < 200) {
        car.engine = {
            power: 120,
            volume: 2400,
        }
    } else if (car.power >= 200) {
        car.engine = {
            power: 200,
            volume: 3500,
        }
    }
    delete car.power;
    car.carriage = {
        type: car.carriage,
        color: car.color
    }

    delete car.color;
    let wheels = 0;
    if (car.wheelsize % 2 === 0) {
        car.wheelsize--;
    }

    wheels = car.wheelsize;
    delete car.wheelsize;
    car.wheels = [wheels, wheels, wheels, wheels];

    return car;

}
carFactory({
    model: 'Ferrari',
    power: 200,
    color: 'red',
    carriage: 'coupe',
    wheelsize: 21
});
