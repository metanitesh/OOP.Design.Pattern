interface Shape {
  area: () => number
}

class Rectangle implements Shape {
  constructor(public width: number, public height: number) {

  }
  area() {
    return this.width * this.height
  }
}

//correct
class Square implements Shape {
  constructor(private side: number) {

  }
  area() {
    return this.side * this.side
  }
}
