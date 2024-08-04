/**
 Задача "Chunk". Напишите функцию chunk(arr, size), которая принимает массив и число size, и возвращает новый массив,
 состоящий из подмассивов длиной не более size. Например, chunk([1, 2, 3, 4, 5], 2) должна вернуть [[1, 2], [3, 4], [5]].
 * */
function chunk(arr, size) {
    // Your code
    const arr2 = [[]];

    arr.forEach((item) => {
        const lastItem = arr2.at(-1);
        if (lastItem.length < size) lastItem.push(item)
        else arr2.push([item]);
    });

    return arr2;
}

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 2));
