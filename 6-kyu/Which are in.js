//https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/javascript

/*
Даны два массива строк и возвращаются отсортированный массив в лексикографическом 
порядке, строки которого являются подстроками строк .a1a2ra1a2
Пример 1:
a1 = ["arp", "live", "strong"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
Возвращает ["arp", "live", "strong"]
Пример 2:
a1 = ["tarp", "mice", "bull"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
Возвращает []
*/

function inArray(array1, array2) {
    let res = []

    for (let i = 0; i < array2.length; i++) {
        for (let j = 0; j < array1.length; j++) {
            if (array2[i].includes(array1[j])) {
                res.push(array1[j]);
            };
        };
    };

    return [...new Set(res)].sort();
}

console.log(inArray(a1 = ["xyz", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]));
