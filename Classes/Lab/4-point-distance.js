class Point {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(firstPoint, secondPoint) {

        let firstDistance = Math.abs(firstPoint.x - secondPoint.x);
        let secondDistance = Math.abs(firstPoint.y - secondPoint.y);
        let result = Math.sqrt((firstDistance ** 2) + (secondDistance ** 2));
        return result;

    };
}
