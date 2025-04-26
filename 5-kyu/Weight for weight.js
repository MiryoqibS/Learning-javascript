// https://www.codewars.com/kata/55c6126177c9441a570000cc/train/javascript

/*
Я тот, кто составляет список, поэтому я сказал ему: «Не волнуйся больше, 
я изменю порядок списка». Было решено приписать «вес» цифрам. Вес числа с этого момента будет равен сумме его цифр.
Например будет иметь "вес" , будет иметь "вес" поэтому в списке будет стоять перед .9918100110099
Если дана строка с весами членов FFC в нормальном порядке, можете ли вы дать эту строку, упорядоченную по "весам" этих чисел?
*/

function orderWeight(strng) {
    let weights = strng.split(" ");

    return weights.sort((a, b) => {
        let sum1 = a.split("").reduce((accumulator, currentNumber) => {
            return Number(accumulator) + Number(currentNumber);
        }, 0);

        let sum2 = b.split("").reduce((accumulator, currentNumber) => {
            return Number(accumulator) + Number(currentNumber);
        }, 0);

        if (sum1 !== sum2) {
            return sum1 - sum2
        } else if(sum1 === sum2){
            return a.localeCompare(b);
        }

    }).join(" ");
};

console.log(orderWeight("103 123 4444 99 2000"));
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"));
