'use strict'

let input;
const numbers = [];
let total = 0;
let message;

while (true) {
    input = prompt('enter numbers');

    if (input === null) break;

    if(input = Number(input)) {
        numbers.push(input);
    }

    if (input = !Number(input)) {
        message = 'Было введено не число, попробуйте еще раз';
        alert(message);
    }
}

console.log(numbers);

for (let key of numbers) {
    input = Number(input);
    total = input += key;
}

console.log(`Общая сумма чисел равна ${total}`);