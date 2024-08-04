/**
 * Функция, которая принимает на вход массив чисел и возвращает наименьшее и наибольшее число в массиве.
 * @param {number[]} arr - входной массив чисел
 * @return {number[]} - массив, содержащий наименьшее и наибольшее число в массиве
 */
function minMax(arr) {
    // ваш код здесь
    if (arr.length === 1) return arr;

    const arr2 = arr.slice();
    const arr3 = [];
    arr2.sort((a, b) => a - b);
    arr3.push(arr2[0], arr2.at(-1));
    return arr3;
}

console.log(minMax([1, 2, 3, 4, 7, 6]));
