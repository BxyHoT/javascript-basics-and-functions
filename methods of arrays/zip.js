/**
 Задача "Zip". Напишите функцию zip(arr1, arr2), которая принимает два массива и возвращает новый массив, состоящий из
 пар элементов из arr1 и arr2, где элементы с одинаковыми индексами объединены в пары. Если длины массивов не
 совпадают, функция должна вернуть массив, длина которого равна длине более короткого из двух массивов. Например,
 zip([1, 2, 3], ['a', 'b', 'c']) должна вернуть [[1, 'a'], [2, 'b'], [3, 'c']].
 * */
function zip(arr1, arr2) {
    // Your code
    const arr3 = [];
    if (arr1.length >= arr2.length) {
        arr1.forEach(item => arr3.push([item]));
        const arr4 = arr2.slice(0, arr1.length);
        arr4.forEach((item, index) => arr3[index].push(item));
    } else {
        arr2.forEach(item => arr3.push([item]));
        const arr4 = arr1.slice(0, arr1.length);
        arr4.forEach((item, index) => arr3[index].push(item));
    }

    return arr3;
}

console.log(zip([1, 2, 3], ['a', 'b', 'c']));
