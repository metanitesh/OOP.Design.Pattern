interface Shape {
  area: () => number;
}

class Rectangle implements Shape {
  constructor(private height: number = 0, private width: number = 0) {
  }

  area() {
    return this.width * this.height
  }
}

class Circle implements Shape {
  constructor(private radius: number = 0) {
  }

  area() {
    return 3.14 * this.radius * this.radius
  }
}


class AreaCalculator {
  computeArea(shape) {
    return shape.area()
  }
}

const areaCalculator = new AreaCalculator
const rectangle = new Rectangle(20, 20)
const circle = new Circle(2)
console.log(areaCalculator.computeArea(rectangle))
console.log(areaCalculator.computeArea(circle))
