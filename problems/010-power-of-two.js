/**
 * Напишите функцию getPower(n) возвращающую целочисленное значение степени >= 0,
 * в которую нужно возвести двойку, чтобы получить n
 *
 * Пример:
 *
 * getPower(2) === 1            # 2^1 = 2
 * getPower(3) === undefined
 * getPower(256) === 8          # 2^8 = 256
 *
 * @param {number} n
 * @returns {number|undefined}
 */
function getPower(n) {
    const pow = Math.log2(n);
    if (Number.isInteger(pow)) return pow;
    return;
}

console.log(
    getPower(2),
    getPower(3),
    getPower(256),
    getPower(8)
);

module.exports = getPower;
