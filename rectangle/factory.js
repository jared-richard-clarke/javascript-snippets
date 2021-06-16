// Factory Function
const rectangle = function(width, length) {
    return {
      area() {
        return width * length;
      },
      perimeter() {
        return 2 * (width + length);
      }
    };
  };
// returns new object with two methods.
const square = rectangle(10, 10);
// methods call properties through closure.
const area = square.area();
const perimeter = square.perimeter();
