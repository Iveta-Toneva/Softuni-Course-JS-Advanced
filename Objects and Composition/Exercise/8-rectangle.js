function rectangle(width, height, color) {

    color = color[0].toUpperCase() + color.substring(1);
    let rectangle = { width, height, color };
    rectangle.calcArea = () => {
        let area = rectangle.width * rectangle.height;
        return area;
    };
    return rectangle;
}




