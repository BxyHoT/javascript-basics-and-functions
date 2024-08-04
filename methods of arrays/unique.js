/**
 * Функция, которая принимает на вход массив строк и возвращает массив строк, содержащих только уникальные значения.
 * @param {string[]} arr - входной массив строк
 * @return {string[]} - массив строк, содержащий только уникальные значения
 */
function uniqueStrings(arr) {
    // ваш код здесь
    const unique = [];
    arr.forEach((item) => {
        if (!unique.includes(item)) unique.push(item);
    });
    return unique;
}
console.log(uniqueStrings(['', '', '1', '2', '3', '1']));
