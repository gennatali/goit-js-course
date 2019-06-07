'use strict'

let message;
const country = prompt('Введите страну доставки').toLowerCase();

switch (country) {
    case 'китай':
        message = 'Доставка в Китай будет стоить 100 кредитов';
        break;
    case 'южная америка':
        message = 'Доставка в Южную Америку будет стоить 250 кредитов';
        break;
    case 'автралия':
        message = 'Доставка в Австралию будет стоить 170 кредитов';
        break;
    case 'индия':
        message = 'Доставка в Индию будет стоить 80 кредитов';
        break;
    case 'ямайка':
        message = 'Доставка на Ямайку будет стоить 120 кредитов';
        break;
    default:
        message = 'В вашей стране доставка не доступна';
}

alert(message);