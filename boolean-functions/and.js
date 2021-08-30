// and(...expressions) -> boolean
const and = (function () {
  const truth_table = new Map([
    [0, true],
    ["", true],
    [/s+/g, true],
    [NaN, false],
    [undefined, false],
    [null, false]
  ]);
  return function (...expressions) {
    return expressions.every((value) => {
      return truth_table.has(value) ? truth_table.get(value) : value;
    });
  }
}());
