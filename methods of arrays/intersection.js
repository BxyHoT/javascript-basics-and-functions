/**
 * Функция, которая принимает на вход два массива чисел и возвращает новый массив, содержащий только элементы, которые есть в обоих массивах.
 * @param {number[]} arr1 - первый входной массив чисел
 * @param {number[]} arr2 - второй входной массив чисел
 * @return {number[]} - массив, содержащий только элементы, которые есть в обоих массивах
 */
function intersect(arr1, arr2) {
    // ваш код здесь
    const arr3 = arr1.concat(arr2);
    const arr4 = [];

    arr3.forEach((item) => {
        if (!arr4.includes(item)) arr4.push(item);
    })

    return arr4;
}

console.log(intersect([1, 2, 3, 4], [1, 3, 4, 5, 6]));
