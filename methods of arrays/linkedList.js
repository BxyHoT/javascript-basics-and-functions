/**
 Задача "Create List".
 Напишите функцию createList(array), которая принимает массив элементов и возвращает связный список,
 где каждый элемент массива является значением узла списка, а связи между узлами создаются последовательно.

 Пример:
 const array = [1, 2, 3, 4, 5];

 Вернёт:
 {
   value: 1,
   next: {
     value: 2,
     next: {
       value: 3,
       next: {
         value: 4,
         next: {
           value: 5,
           next: null
         }
       }
     }
   }
 }

 Если массив пустой, то функция должна вернуть null.
 Если массив содержит только один элемент, то функция должна вернуть связный список из одного узла.
 */
function createList(arr) {
    // Your code
    if (arr.length === 0) return null;

    const obj = { value: arr[0], next: null };
    let currentObj = obj;

    for (let i = 1; i < arr.length; i++) {
        currentObj.next = { value: arr[i], next: null };
        currentObj = currentObj.next;
    };

    return obj;
}

console.log(createList([1, 2, 3]));
