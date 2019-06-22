'use script'

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attemptsLeft = 3;
let input;
let message;

while (true) {
    input = prompt('Введите пароль');

    if (input === null) break;

    if (passwords.includes(input)) {
        message = 'Добро пожаловать!';
        alert(message);
        break;
    }

    if (!passwords.includes(input)) {
        attemptsLeft -= 1;
        message = `Неверный пароль, у вас осталось ${attemptsLeft} попыток`;
        alert(message);

        if (attemptsLeft === 0) {
            message = 'У вас закончились попытки, аккаунт заблокирован!';
            alert(message);
            break;
        }
    }

}