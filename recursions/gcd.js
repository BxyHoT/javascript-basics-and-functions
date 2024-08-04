/**
 * Функция, которая принимает на вход два числа и возвращает их наибольший общий делитель.
 * @param {number} a - первое число
 * @param {number} b - второе число
 * @return {number} - наибольший общий делитель
 */
function gcd(a, b) {
    // ваш код здесь
    const arr1 = [];
    const arr2 = [];
    let maxDivider;

    for (let i = 1; i <= a; i++) {
        if (Number.isInteger(a / i)) arr1.push(i);
    };
    for (let i = 1; i <= b; i++) {
        if (Number.isInteger(b / i)) arr2.push(i);
    };

    if (arr1.length > arr2.length) {
        arr2.forEach((num) => {
            if (arr1.includes(num)) maxDivider = num;
        });
    } else {
        arr1.forEach((num) => {
            if (arr2.includes(num)) maxDivider = num;
        });
    }

    return maxDivider;
}

// Примеры:
console.log(gcd(8, 12)); // 4
console.log(gcd(18, 24)); // 6
console.log(gcd(35, 42)); // 7
console.log(gcd(111, 259)); // 37
