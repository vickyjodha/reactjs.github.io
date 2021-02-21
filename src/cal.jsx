function dic(x, y) {
    return x - y;
}

function sum(x, y) {
    return x + y;
}

function div(x, y) {
    let div = x / y;
    div = div.toFixed(2);
    return div;
}

function multi(x, y) {
    return x * y;
}

export { dic, div, sum, multi }