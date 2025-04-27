// https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript

/*
Даны два массива и написана функция (или), которая проверяет, есть ли в двух массивах
"одинаковые" элементы, с одинаковой кратностью (кратность элемента - это количество 
его появлений). «Одинаковый» здесь означает, что элементы в являются элементами в 
квадрате, независимо от порядка.abcomp(a, b)compSame(a, b)ba
*/

function comp(array1, array2) {
    if (!array1 || !array2) return false;

    let a1 = array1.map(num => num ** 2).sort();
    let a2 = array2.slice().sort();

    console.log(a1);
    console.log(a2);


    return a1.length === a2.length && a1.every((number, index) => number === a2[index]);
};

console.log(comp([2, 3, 2], [4, 9, 4]));
