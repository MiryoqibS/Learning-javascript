"use strict";

/*
== Задание 1 с сайта ==
Последнее значение цикла
Какое последнее значение выведет этот код? Почему?

let i = 3;
while (i) {
  alert( i-- );
}
*/

let i = 3;
while (i) {
  console.log(i--); // 1 потому-что когда i становиться нулём то условие становиться ложью
}

/*
== Задание 2 с сайта ==
Какие значения выведет цикл for?
Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
Оба цикла выведут alert с одинаковыми значениями или нет?

Постфиксная форма:
for (let i = 0; i < 5; i++) alert( i );

Префиксная форма:

for (let i = 0; i < 5; ++i) alert( i );
*/

// Результат одинаковый потому-что алгоритм роботы цикла
// for работает одинаково для пост и пре фиксной формы
for (let i = 0; i < 5; i++) console.log(i); // 4
for (let i = 0; i < 5; ++i) console.log(i); // 4

/*
== Задание 3 сайта ==
Выведите чётные числа
При помощи цикла for выведите чётные числа от 2 до 10.
*/

for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

/*
== Задание 4 с сайта ==
Замените for на while
Перепишите код, заменив цикл for на while, без изменения поведения цикла.

for (let i = 0; i < 3; i++) {
  alert(`number ${i}!`);
}
*/

// использовал j вместо i переменой потому-что i уже используется
let j = 0;
while (j < 3) {
  console.log(`number ${j}`);
  j++;
}

/*
== Задание 5 с сайта ==
Повторять цикл, пока ввод неверен
важность: 5
Напишите цикл, который предлагает prompt ввести число, большее 100. 
Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
Цикл должен спрашивать число пока либо посетитель не введёт число, большее
100, либо не нажмёт кнопку Отмена (ESC). Предполагается, что посетитель вводит
только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.
*/

let number;

do {
  number = prompt("Введите число");
} while (+number < 100 && number);

/*
== Задание 6 с сайта ==
Вывести простые числа
Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.
Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.
Напишите код, который выводит все простые числа из интервала от 2 до n.
Для n = 10 результат должен быть 2,3,5,7.
P.S. Код также должен легко модифицироваться для любых других интервалов.
*/

let n = 10;

for (let i = 3; i <= n; i++) {
    let isPrime = true;

    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`Простое число: ${i}`);
    }
}


