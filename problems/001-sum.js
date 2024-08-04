/**
 * Напишите функцию sum(n) возвращающую положительное целое число – сумму чисел,
 * расположенных между 1 и N включительно.
 *
 * Пример:
 *
 * sum(0) === 1
 * sum(5) === 15
 *
 * Больше примеров в тестах
 *
 * @param {number} n целое число
 * @returns {number}
 */
function sum(n) {
    if (n === 1) return 0;
    let num = n;
    let sum = 0;

    if (num < 0) {
        while (num !== 1) {
            num++;
            sum++;
        }
    } else {
        while (num !== 1) {
            num--;
            sum++;
        }
    }

    return sum;
}

console.log(sum(1));

module.exports = sum;
