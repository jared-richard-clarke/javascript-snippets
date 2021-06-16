// Class Syntax
class Rectangle { 
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
    area() {
      return this.width * this.height;
    }
    perimeter() {
      return 2 * (this.width + this.height)
    }
  }
// Instantiates new object with two properties. 
const square = new Rectangle(10, 10);
// object calls methods through its prototype.
const area = square.area();
const perimeter = square.perimeter();
