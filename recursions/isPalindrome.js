/**
 * Функция, которая принимает на вход строку и возвращает true, если она является палиндромом, и false в противном случае.
 * @param {string} str - входная строка
 * @return {boolean} - true, если строка является палиндромом, и false в противном случае
 */
function isPalindrome(str) {
    // ваш код здесь
    const palindrome = str.replaceAll(/[,: ]/g, '').toLocaleLowerCase().split('').reverse().join('');
    const palindrome2 = str.replaceAll(/[,: ]/g, '').toLocaleLowerCase().split('').join('');

    return palindrome2 === palindrome;
}

// Примеры:
console.log(isPalindrome("radar")); // true
console.log(isPalindrome("level")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
