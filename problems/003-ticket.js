/**
 * Счастливым билетом называют такой билет с шестизначным номером,
 * где сумма первых трех цифр равна сумме последних трех.
 *
 * Напишите функцию checkTicket(number) которая проверяет счастливость билета.
 *
 * Пример:
 *
 * checkTicket('005212') === true
 * checkTicket('133700') === true
 * checkTicket('123032') === false
 *
 * @param {string} number
 * @returns {boolean}
 */
function checkTicket(number) {
    if (number.length === 6) {
        let firstHalf = 0;
        let secondHalf = 0;
        let numArray = number.split('');

        numArray = numArray.map(item => Number(item));
        numArray.forEach((item, index) => {
            if (index < 3) firstHalf += item;
            else secondHalf += item;
        })

        if (firstHalf === secondHalf) return true;
    }
    return false;
}

console.log(checkTicket('123123'));
console.log(checkTicket('123133'));

module.exports = checkTicket;
