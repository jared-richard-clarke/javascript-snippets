// Sigma: the sum of a sequence of arithmetic expressions. 
// === iterative solution ===
function sigma(operation, start, end) {
    if (start > end) {
        return 0;
    }
    const range = [];
    while (start <= end) {
        range.push(start);
        start += 1;
    }
    return range.reduce((sum, value) => sum + operation(value));
} 
