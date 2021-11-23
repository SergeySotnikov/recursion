"use strict";
const input = [4, 2, 0, 2, 1, 5];
let sum = 0;
const len = input.length;

function sumElement(input, len) {
    if (len == 0) {
        return sum;
    } else {
        sum += input[len - 1];
        sumElement(input, len - 1);
    }
}


sumElement(input, len);
console.log(sum);