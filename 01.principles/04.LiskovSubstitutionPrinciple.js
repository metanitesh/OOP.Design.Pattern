var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.area = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
//correct
var Square = /** @class */ (function () {
    function Square(side) {
        this.side = side;
    }
    Square.prototype.area = function () {
        return this.side * this.side;
    };
    return Square;
}());
