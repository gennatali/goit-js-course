'use strict';

let credits = 23580;
let pricePerDroid = 3000;
let message;
let totalPrice;
let notEnoughResult;
let enoughResult;

const droids = prompt('Введите количетво дроидов, которые желаете купить');
totalPrice = pricePerDroid * Number(droids);

notEnoughResult = totalPrice > credits;
enoughResult = credits - totalPrice;

if (droids === null){
    message = 'Отменено пользователем!';
} else if (notEnoughResult) {
    message = 'Недостаточно средств на счету!';
} else if (enoughResult){
    message = `Вы купили ${droids} дроидов, на счету осталось ${enoughResult} кредитов.`;
}

alert(message);
