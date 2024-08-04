/**
 * Напишите функцию sortTimestamps(list) сортирующую список временных моментов.
 *
 * Пример:
 *
 * sortTimestamps(['23:02:59', '02:07:00']) === ['02:07:00', '23:02:59']
 *
 * @param {string[]} list массив временных моментов представленных в виде строк в формате 'HH:MM:SS'
 * @returns {string[]} отсортированный по возрастанию массив временных моментов
 */
function sortTimestamps(list) {
    let arr = list.slice();

    return arr.sort();
}

console.log(
    sortTimestamps(['23:02:59', '02:07:00']),
    sortTimestamps(['00:00:42', '00:00:07']),
    sortTimestamps(['19:00:00', '00:04:20', '00:59:59'])
);

module.exports = sortTimestamps;
