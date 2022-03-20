/**
 * Напишите функцию get1DArray(arr),
 * на вход подается массив бесконечной вложенности массивов arr
 * необходимо вернуть одномерный массив
 * Примеры:
 * [1, 2, 'aa', [1, 2, 3],
    [
        [1, 2],
        [1, 2]
    ],
    [
        [
            [1, 2, [1, 2, [2]]], 3
        ], 4
    ]
]; ---> [1, 2, "aa", 1, 2, 3, 1, 2, 1, 2, 1, 2, 1, 2, 2, 3, 4]
*/

function get1DArray(arr) {
    let stack = [...arr];
    let res = [];
    while (stack.length) {
      let lastEl = stack.pop();
      if (Array.isArray(lastEl)) {
        stack.push(...lastEl);
      } else {
        res.push(lastEl);
      }
    }
    return res.reverse();
}

module.exports = get1DArray;
