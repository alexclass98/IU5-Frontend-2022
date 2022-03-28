/**
 * Напишите функцию curry(f),
 * входные данные - функция
 * выходные данные - функция, или результат если количество аргументов достаточно
 * Примеры:
 *
 * function add(a, b, c) {
 *  return a + b + c;
 * }
 *
 * console.log(curry(add)(1)(2)(3)); //6
 * console.log(curry(add)(1)(2, 3)); //6
 * console.log(curry(add)(1, 2, 3)); //6
 */
function curry(f) {
    var slice = [].slice;
    var length = f.length;
    return function curriedFn() {
      var args = slice.call(arguments);
      if (args.length < length) {
        return function(){
          return curriedFn.apply(null, args.concat( slice.call(arguments) ));
        };
      }

      return f.apply(null, args);
    };
}

module.exports = curry;
