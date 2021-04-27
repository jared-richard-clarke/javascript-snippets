// Sigma: the sum of a sequence of arithmetic expressions. 
// === recursive solution ===
function sigma(operation, start, end) {
    if (start > end) {
        return 0;
    } else {
        return operation(start) + sigma(operation, start + 1, end);
    }
}
