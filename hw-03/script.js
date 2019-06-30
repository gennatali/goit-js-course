'use sctrict'

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
let login;

let input = prompt('Введите логин:');

const isLoginValid = function (login) {
    if (Number(input.length) >= 4 && Number(input.length) <= 16) {
        return true;
    }
    return false;
};

const isLoginUnique = function (allLogins, login) {
    if (logins.includes(input)) {
        return false;
    }
    return true;
};


const addLogin = function (allLogins, login) {

    if (isLoginValid() === false) {
        const message = 'Ошибка! Логин должен быть от 4 до 16 символов';
        console.log(message);
        return;
    } else {
        if (isLoginUnique() === false) {
            const message = 'Такой логин уже используется!';
            console.log(message);
        } else {
            logins.push(input);
            const message = 'Логин успешно добавлен!';
            console.log(message);
            return;
        }
    }

};

addLogin (logins, input);
console.log(logins);