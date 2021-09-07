const conditionals = (function () {
  const truth_table = new Map([
    [0, true],
    ["", true],
    [/s+/g, true],
    [NaN, false],
    [undefined, false],
    [null, false]
  ]);
  // and(...expressions) -> boolean
  function and(...expressions) {
    return expressions.every((value) => {
      return truth_table.has(value) ? truth_table.get(value) : value;
    });
  }
  // or(...expressions) -> boolean
  function or(...expressions) {
    return expressions.some((value) => {
      return truth_table.has(value) ? truth_table.get(value) : value;
    });
  }
  // interface: const { and, or } = conditionals;
  return Object.freeze({
    and,
    or
  });
}());
