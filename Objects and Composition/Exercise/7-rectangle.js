function rectangle(width, height, color) {

    let colorSubstring = color.slice(1);
    let rectangleColor = color[0].toUpperCase() + colorSubstring;
    let object = { width, height, color: rectangleColor };

    object.calcArea = function () {
        return this.width * this.height;
    }

    return object;
}

