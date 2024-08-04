/**
 * Со словами-анаграммами мы познакомились в прошлой задаче.
 *
 * Напишите функцию searchAnagrams(value) возвращающую слова-анаграммы из предложения,
 * сохраняя их порядок и регистр букв
 *
 * Пример:
 *
 * searchAnagrams('Вижу апельсин значит живу. Спаниель') === 'Вижу апельсин живу Спаниель'
 *
 * @param {string} value
 * @returns {string}
 */
function searchAnagrams(value) {
    const words = value.split(/[\s,.!?;:()]+/);
    let arrWords = [];

    function anagram(x, y) {
        const firstWord = x.toUpperCase().split('').sort().join();
        const secondWord = y.toUpperCase().split('').sort().join();

        return firstWord === secondWord;
    }

    words.forEach((word, index) => {
        for (let i = 0; i < words.length; i++) {
            if (anagram(word, words[i])) {
                if (i !== index && !arrWords.includes(word)) arrWords.push(word);
            };
        }
    });

    return arrWords.join(' ');
}

console.log(
    searchAnagrams('Вижу апельсин значит живу. Спаниель'),
    // searchAnagrams('Вижу живу')
);

module.exports = searchAnagrams;
