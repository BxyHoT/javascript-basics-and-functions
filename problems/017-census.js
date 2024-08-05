/**
 * В доме решили провести перепись всех жильцов и составили список,
 * в котором указали возраст и пол каждого жильца.
 *
 * Напишите функцию census(list) возвращающую номер в списке самого старшего жителя мужского пола.
 *
 * Пример:
 *
 * census([{ age: 12, gender: 'Male' }, { age: 40, gender: 'Male' }]) === 2
 * census([{ age: 40, gender: 'Female' }]) === undefined
 *
 * @param {{age: number, gender: string}[]} list
 * @returns {undefined|number}
 */
function census(list) {
    const list2 = list.slice();
    let person;
    let num;

    list2.map((human) => {
        if (human.gender !== 'Male') return human.age = -1;
    });
    list2.sort((firstHuman, secondHuman) => secondHuman.age - firstHuman.age);

    if (list2[0].gender === 'Male') person = list2[0];
    else return;

    num = list.indexOf(person);

    return num + 1;
}

console.log(
    census([{ age: 12, gender: 'Male' }, { age: 40, gender: 'Male' }]),
    census([{ age: 40, gender: 'Female' }])
);

module.exports = census;
