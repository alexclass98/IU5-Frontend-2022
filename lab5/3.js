/**
 * Напишите функцию customBind(f, context),
 * входные данные - функция и контекст
 * выходные данные - функция с прибинженым контекстом
 * Примеры:
<<<<<<< HEAD
 * customBind(function() {this.a + this.b}, {a: 1, b2: 2})() -> 3
 */

function customBind(f, context) {
    return (...args) => f.apply(context, args);

=======
 * customBind(function() {this.a + this.b}, {a: 1, b2})() -> 3
 */

function customBind(f, context) {
    //code here
>>>>>>> cbfa7221cfe8a75e48f61b4ddac4986809b481bf
}

module.exports = customBind;
