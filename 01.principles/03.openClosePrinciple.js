var Rectangle = /** @class */ (function () {
    function Rectangle(height, width) {
        if (height === void 0) { height = 0; }
        if (width === void 0) { width = 0; }
        this.height = height;
        this.width = width;
    }
    Rectangle.prototype.area = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var Circle = /** @class */ (function () {
    function Circle(radius) {
        if (radius === void 0) { radius = 0; }
        this.radius = radius;
    }
    Circle.prototype.area = function () {
        return 3.14 * this.radius * this.radius;
    };
    return Circle;
}());
var AreaCalculator = /** @class */ (function () {
    function AreaCalculator() {
    }
    AreaCalculator.prototype.computeArea = function (shape) {
        return shape.area();
    };
    return AreaCalculator;
}());
var areaCalculator = new AreaCalculator;
var rectangle = new Rectangle(20, 20);
var circle = new Circle(2);
console.log(areaCalculator.computeArea(rectangle));
console.log(areaCalculator.computeArea(circle));
