'use strict'

let input;
const numbers = [];
let total = 0;
let message;

while (true) {
    input = prompt('enter numbers');
    numbers.push(Number(input));

    if (input === null) break;

    input = Number(input);
    if (input !== Number(input)) {
        message = 'Было введено не число, попробуйте еще раз';
        alert(message);
        numbers.splice(input);
    }
}

console.log(numbers);

for (let key of numbers) {
    total = input += key;
}

console.log(`Общая сумма чисел равна ${total}`);