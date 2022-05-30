/**
 * починить функцию memoize(func),
 * на вход принимает функцию
 * на выходе получаем функцию, которая умеет запоминать последний результат вызова
 * примеры:
 * const add = (a) => a * 2;
 * const memozedAdd = memoize(add)
 * memozedAdd(1) -> {cache: false, result: 2}
 * memozedAdd(1) -> {cache: true, result: 2}
 * memozedAdd(2) -> {cache: false, result: 4}
 * memozedAdd(1) -> {cache: false, result: 2}
 * memozedAdd(2) -> {cache: false, result: 4}
 * memozedAdd(2) -> {cache: true, result: 4}
 */

function memoize(func) {
<<<<<<< HEAD
    let cache;
    return (...a) => {
        const res = (cache === func(...a));
        cache = func(...a);
        return {'cache': res ,'result': cache};
    }

=======
    //code here
>>>>>>> cbfa7221cfe8a75e48f61b4ddac4986809b481bf
}

module.exports = memoize;
