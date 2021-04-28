function factorial_iter(number) {
    let counter = number;
    let accumulator = 1;
    while (counter >= 1) {
        accumulator *= counter;
        counter -= 1;
    }
    return accumulator;
}
