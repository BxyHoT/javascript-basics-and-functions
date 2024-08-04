/**
 * С числами Фибоначчи мы уже познакомились в прошлой задаче.
 *
 * Напишите функцию isFibonacci(value) которая определяет, является ли value числом Фибоначчи.
 *
 * Пример:
 *
 * isFibonacci(1) === 1
 * isFibonacci(2) === 3
 * isFibonacci(55) === 10
 * isFibonacci(52) === undefined
 *
 * @param {number} value
 * @returns {undefined|number}
 */
function isFibonacci(value) {
    if (value < 0) return;
    if (value === 0) return 0;
    if (value === 1) return 1;

    let fibonacciArr = [0, 1];

    for (let i = 2; fibonacciArr.at(-1) < value; i++) {
        let nextFib = fibonacciArr[i - 1] + fibonacciArr[i - 2];
        fibonacciArr.push(nextFib);
    }

    if (fibonacciArr.at(-1) === value) return fibonacciArr.length - 1;
    return;
}

console.log(isFibonacci(52));

module.exports = isFibonacci;
