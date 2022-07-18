import React from "react";

const add = (a, b) => {
    return a + b;
}

const sub = (a, b) => {
    return a - b;
}

const div = (a, b) => {
    let c = (a / b).toFixed(2);
    return c;
}

const mul = (a, b) => {
    return a * b;
}

export { add, sub, div, mul };