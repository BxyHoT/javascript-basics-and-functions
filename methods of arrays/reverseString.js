/**
 * Функция, которая принимает на вход строку и возвращает ее обратный порядок.
 * @param {string} str - входная строка
 * @return {string} - строка, обращенная задом наперед
 */
function reverseString(str) {
    // ваш код здесь
    const str2 = str;
    return str2.split('').reverse().join('');
}

console.log(reverseString('12345'));
