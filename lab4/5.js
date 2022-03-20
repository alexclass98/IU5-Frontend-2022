/**
 * Доп задание, делать не обязательно, но мы запомним тех кто не сделал ;D
 * Для прохождения тестов на эту задачу их необходимо раскоментить в файле tests/lab4.test.js
 * Напишите функцию checkBrackets(str),
 * на вход подается строка состоящая из скобок разной вложенности, варианты скобок: []<>()
 * необходимо определеить, правильно ли они вложены
 * Примеры:
 * [[]]()<> --> true
 * ([)]()<> --> false
 * [(<>)] --> true
 */

function checkBrackets(str) {
    let open = ['[', '(', '<'];
    let close = [']', ')', '>'];
    let tester = str.split("");
    let openMassive = [];
    let stack;
        for(let i in tester){
            if (open.indexOf(tester[i]) !== -1 ){
                openMassive.push(stack);
                stack = open.indexOf(tester[i]);
            } else {
                if (stack === close.indexOf(tester[i])){
                    stack = openMassive.pop();
                } else {
                    return false;
                }
            }

        }
    if (openMassive.length !== 0) return false;
    else  return true;

}

module.exports = checkBrackets;
