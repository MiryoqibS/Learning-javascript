// https://www.codewars.com/kata/51b66044bce5799a7f000003/train/javascript

/*
Напишите две функции, которые преобразуют римскую цифру в целочисленное значение и 
обратно. Для каждой функции будет проверено несколько значений римских цифр.
Современные римские цифры записываются путем выражения каждой цифры отдельно, 
начиная с самой левой цифры и пропуская любую цифру со значением нуля. Римскими цифрами:
*/

class RomanNumerals {
    static toRoman(number) {
        const lookup = {
            "M": 1000,
            "CM": 900,
            "D": 500,
            "CD": 400,
            "C": 100,
            "XC": 90,
            "L": 50,
            "XL": 40,
            "X": 10,
            "IX": 9,
            "V": 5,
            "IV": 4,
            "I": 1,
        };

        return Object.entries(lookup).reduce((result, [letter, value]) => {
            result += letter.repeat(Math.floor(number / value));
            number %= value;
            return result;
        }, '');
    };

    static fromRoman(string) {
        const lookup = {
            "M": 1000,
            "CM": 900,
            "D": 500,
            "CD": 400,
            "C": 100,
            "XC": 90,
            "L": 50,
            "XL": 40,
            "X": 10,
            "IX": 9,
            "V": 5,
            "IV": 4,
            "I": 1,
        };

        let numberResult = 0;

        while (string.length > 0) {   

            Object.entries(lookup).forEach(([letter, value])=>{
                if (string.startsWith(letter)) {
                    numberResult += value;
                    string = string.slice(letter.length)
                }
            });
        }

        return numberResult;
    };
}

console.log(RomanNumerals.toRoman(55));
console.log(RomanNumerals.fromRoman("IV"));
