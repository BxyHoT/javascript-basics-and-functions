/**
 * Известны результаты каждой из 4х четвертей баскетбольной встречи.
 * Нужно определить победителя матча. Побеждает команда,
 * набравшая больше очков в течение всего матча.
 *
 * Напишите функцию getWinner(points) возвращающую номер победившей команды,
 * либо undefined в случае ничьей.
 *
 * Пример:

 * getWinner(['23-26', '24-30', '30-27', '35-31']) === 2
 * getWinner(['36-32', '32-24', '20-28', '30-26']) === 1
 * getWinner(['36-18', '22-31', '27-21', '19-34']) === undefined
 *
 * @param {string[]} points
 * @returns {(number|undefined)}
 */
function getWinner(points) {
    let score1 = 0;
    let score2 = 0;

    points.forEach(item => {
        let scoreArr = item.split('-');
        scoreArr = scoreArr.map(item => Number(item));
        score1 += scoreArr[0];
        score2 += scoreArr[1];
    })

    if (score1 > score2) return 1;
    if (score1 < score2) return 2;
    return undefined;
}

console.log(getWinner(['23-26', '24-30', '30-27', '35-31']));
console.log(getWinner(['36-32', '32-24', '20-28', '30-26']));
console.log(getWinner(['36-18', '22-31', '27-21', '19-34']));

module.exports = getWinner;
