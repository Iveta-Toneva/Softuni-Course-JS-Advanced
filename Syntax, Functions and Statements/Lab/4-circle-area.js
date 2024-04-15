function circleArea(element) {

    if (typeof element === 'number') {
        let radius = element;
        let area = Math.PI * (radius ** 2);
        console.log(area.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof element}.`);
    }

}
circleArea('name');