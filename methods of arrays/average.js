/**
 * Функция, которая принимает на вход массив чисел и возвращает среднее значение всех элементов массива.
 * @param {number[]} arr - входной массив чисел
 * @return {number} - среднее значение всех элементов массива
 */
function average(arr) {
    // ваш код здесь
    const arr2 = arr.slice();
    return arr2.reduce((acc, item) => acc += item / 2, 0);
}
console.log(average([1, 2, 3]))
