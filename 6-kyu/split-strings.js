// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript

/*
Завершите решение так, чтобы строка была разбита на пары по два символа.
Если строка содержит нечетное количество символов, то она должна
заменить недостающий второй символ последней пары на символ ('_') подчеркивания .
*/

function solution(str) {
    let pairs = [];

    for (let i = 0; i < str.length; i++) {
        let secondChar = str[i + 1] ? str[i + 1] : "_";
        pairs.push(`${str[i]}${secondChar}`)
        i++;
    };

    return pairs;
};

console.log(solution("abc"));

