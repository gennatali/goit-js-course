'use strict';

const ADMIN_PASSWORD = 'm4ng0h4ckz';
let message;

const password = prompt('Пожалуйста, введите пароль');

if (password === null){
    message = 'Отменено пользователем!';
} else if (password === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
} else {
    message = 'Доступ запрещен, неверный пароль!';
}

alert(message);
