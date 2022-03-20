/**
 * Напишите функцию getAnagramms(arr),
 * входные данные - массив строк
 * выходные данные - массив элементов, где каждый элемент является массивом анаграмм (строки)
 * Примеры:
 * ['мир', 'Рим', 'сирота', 'Ариост', 'мри', 'пва', 'лор', 'авп']; -> [["мир", "Рим", "мри"], ["сирота", "Ариост"], ["пва", "авп"]]
 */
function getAnagramms(arr) {
    let res = [];
    let checker = [];
    for(i = 0; i < arr.length; i++){
        let anagrrams =[];
        let length = arr[i].length;
        let tester = arr[i].toLowerCase().split('').sort().join('');
        for(j = 0; j < arr.length; j++){
            if(checker.indexOf(arr[j]) === -1){
                if(arr[j].length === length){
                    if(arr[j].toLowerCase().split('').sort().join('') === tester){
                            anagrrams.push(arr[j]);
                            checker.push(arr[j]);
                        }
                    }
                }
        }
        if (anagrrams.length !== 0) res.push(anagrrams);

    }
    return res;

}

module.exports = getAnagramms;
