/**
 * Напишите функцию isPalindrome(str),
 * входные данные - строкa
 * выходные данные - boolean - является ли переданная строка палиндромом
 * Примеры:
 * "мир" -> false
 * "тот" -> true
 */
function isPalindrome(str) {
    flag = false;
    if(str == str.split("").reverse().join("")){ flag = true;}
    return flag;
}

module.exports = isPalindrome;
