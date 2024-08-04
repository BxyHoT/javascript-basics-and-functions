/**
 * Напишите функцию getTimeDelta(x, y) определяющую,
 * сколько секунд прошло между двумя моментами времени x и y.
 *
 * Время передается в формате 'HH:MM:SS'. Минимальное значение – '00:00:00', максимальное – '23:59:59'.
 *
 * По условию x всегда меньше y.
 *
 * Пример:
 *
 * getTimeDelta('00:00:00', '00:00:01') === 1
 * getTimeDelta('01:01:01', '02:02:02') === 3661
 * getTimeDelta('01:19:30', '01:20:20') === 50
 *
 * @param {string} x
 * @param {string} y
 * @returns {number} разница между x и y в секундах
 */
function getTimeDelta(x, y) {
    function stringToSec(min) {
        let timeArr = min.split(':');

        timeArr = timeArr.map(time => {
            if (time[0] === '0') time = time.replace(/0/, '');
            return Number(time);
        });

        return timeArr.reduce((secondSum, time, index) => {
            if (index === 0) secondSum += time * 3600;
            if (index === 1) secondSum += time * 60;
            if (index === 2) secondSum += time;
            return secondSum;
        }, 0)
    };

    return stringToSec(y) - stringToSec(x);
}

console.log(
    getTimeDelta('00:00:00', '00:00:01'),
    getTimeDelta('01:01:01', '02:02:02'),
    getTimeDelta('01:19:30', '01:20:20')
);

module.exports = getTimeDelta;
