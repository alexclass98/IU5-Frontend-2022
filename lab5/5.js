/**
 * Доп задание, делать не обязательно, но мы запомним тех кто не сделал ;D
 * Напишите функцию makeRoute([{from: string, to: string}]),
 * на вход подается массив, состоящий из объектов с полями to from
 * необходимо вернуть отсортированный массив объектов по правильному пути
 * Примеры:
 * [
    { from: 'L', to: 'M' },
    { from: 'M', to: 'N' },
    { from: 'A', to: 'L' },
    { from: 'B', to: 'A' },
    { from: 'N', to: 'Z' },
]
-->
[
    {"from": "B", "to": "A"},
    {"from": "A", "to": "L"},
    {"from": "L", "to": "M"},
    {"from": "M", "to": "N"},
    {"from": "N", "to": "Z"}
]
 */

function makeRoute(arr) {
    const res = [];

    arr.forEach(element => {
        let b = 1;
        for (const i of arr) {
          if (i.to === element.from){
            b--; }
        }
        if (b) {res.push(element);
        }
    });

    arr.forEach(element => {
        let cache;
        for (const i of arr) {
          if (i.from === res[res.length - 1].to) {
            cache = i;
            break;
          }
        }
        if (cache !== undefined){
            res.push(cache); }
    });

    return res;


}

module.exports = makeRoute;
