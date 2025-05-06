// https://www.codewars.com/kata/5629db57620258aa9d000014/train/javascript

/*
Имея две строки s1 и s2, мы хотим визуализировать, насколько они различны. Мы будем учитывать
только строчные буквы (от a до z). Сначала посчитаем частотность каждой строчной буквы в s1 и s2.
Таким образом, максимум для 'a' в s1 и s2 равен 4 от s1; Максимальное значение для 'b' равно 3 из s2.
Далее мы не будем рассматривать буквы, когда максимальное их вхождение меньше или равно 1.
Различия между s1 и s2 мы можем повторить в следующей строке: где in обозначает строку s1 и потому
что максимум для равен 4. Таким же образом обозначает строку s2 и потому что максимум для 
равен 3."1:aaaa/2:bbb"11:aaaaaaaaa2:bbbbbbb. Задача состоит в том, чтобы создать строку, в которой
каждая строчная буква s1 или s2 встречается столько раз, сколько его максимум, если этот максимум 
строго больше 1; Эти буквы будут предваряться префиксом номер строки, в которой они появляются, с 
их максимальным значением и . Если максимум находится в s1, а также в s2, то префикс равен .:=:
В результате, подстроки (подстрока, например, 2:nnnnn или 1:hhh; она содержит префикс) будут 
располагаться в порядке убывания их длины и при одинаковой длине сортироваться в возрастающем 
лексикографическом порядке (буквы и цифры - точнее сортируются по кодовой точке); Различные группы 
будут разделены символом '/'. Смотрите примеры и "Примеры тестов".
*/

function getLowerCaseLetters(str) {
    return [...str].filter(char => char >= "a" && char <= "z");
}

function countChars(arr) {
    let counts = {};

    for (const char of arr) {
        counts[char] = (counts[char] || 0) + 1;
    }

    for (const char of arr) {
        if (counts[char] <= 1) delete counts[char];
    }

    return counts;
}

function makeFragment(ch, counts1, counts2) {
    const c1 = counts1[ch] || 0;
    const c2 = counts2[ch] || 0;
    const max = Math.max(c1, c2);
    if (max < 2) return null;
    const prefix =  c1 > c2 ? '1'
                    : c2 > c1 ? '2'
                    : '=';
    return `${prefix}:${ch.repeat(max)}`;
}

function compareFragments(a, b) {
    if (b.length !== a.length) {
        return b.length - a.length;
    }
    return a < b ? -1 : (a > b ? 1 : 0);
}

function mix(s1, s2) {
    let filteredS1 = getLowerCaseLetters(s1);
    let filteredS2 = getLowerCaseLetters(s2);
    const counts1 = countChars(filteredS1);
    const counts2 = countChars(filteredS2);

    let uniqueLetters = new Set([
        ...Object.keys(counts1),
        ...Object.keys(counts2)
    ]);

    const fragments = [];

    for (const char of uniqueLetters) {
        const fragment = makeFragment(char, counts1, counts2);
        if (fragment) fragments.push(fragment);
    }

    fragments.sort(compareFragments);
    return fragments.join("/");
};

console.log(mix("Are they here", "yes, they are here"));
// 2:eeeee/2:yy/=:hh/=:rr
console.log(mix("looping is fun but dangerous", "less dangerous than coding"));
// 1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg