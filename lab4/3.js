/**
 * Напишите функцию rle(str),
 * входные данные - строка
 * выходные данные - строка со свернутыми диапазонами
 * Примеры:
 * rle('AAAB') === 'A3B'
 * rle('BCCADDEEEBB') === 'BC2AD2E3B2'
 */

function rle(str) {
    let res = [];
    let tester = str.split("");
    k=1;
    for(i = 0; i < str.length; i++){
        if(tester[i] == tester[i+1]){
            k++;
        } else {
            res.push(tester[i]);
            if(k > 1){
                res.push(k);
            }
            k=1;
        }
    }
    return res.join("");
}

module.exports = rle;
