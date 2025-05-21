/*
== Задание 1 с сайта ==
Вывод каждую секунду
Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

Сделайте два варианта решения.

Используя setInterval.
Используя рекурсивный setTimeout.
*/

// Используя setInterval.
const printNumbers = (from, to) => {
    let intervalId = setInterval(() => {
        console.log(from);

        if (from >= to) {
            clearInterval(intervalId);
        };

        from++;
    }, 1000);
};


// Используя рекурсивный setTimeout

const printNumbers2 = (from, to) => {
    let current = from;

    setTimeout(function tick() {
        console.log(current);

        if (current < to) {
            setTimeout(tick, 1000)
        }

        current++;
    }, 1000);
};

/*
== Задание 2 с сайта ==
Что покажет setTimeout?
В приведённом ниже коде запланирован вызов setTimeout, а затем выполняется сложное вычисление, для завершения которого требуется более 100 мс.

Когда будет выполнена запланированная функция?

После цикла.
Перед циклом.
В начале цикла.
Что покажет alert?

let i = 0;

setTimeout(() => alert(i), 100); // ?

// предположим, что время выполнения этой функции >100 мс
for(let j = 0; j < 100000000; j++) {
    i++;
}
*/


let i = 0;

setTimeout(() => console.log(i), 100); // 100000000 после цикла

// предположим, что время выполнения этой функции >100 мс
for (let j = 0; j < 100000000; j++) {
    i++;
};

/*
== Задание 1 от ChatGPT ==
Таймер обратного отсчёта
📝 Напиши функцию countDown(seconds), которая каждую секунду выводит число секунд до нуля, а в конце пишет: Time's up!
*/

const countDown = (seconds) => {
    let timerId = setInterval(() => {
        console.log(seconds);

        if (seconds <= 0) {
            clearInterval(timerId);
        };

        seconds--;
    }, 1000)
};

/*
== Задание 2 от ChatGPT ==
Рекурсивный интервал

📝 Сделай то же самое, что в первом задании, но через рекурсивный setTimeout.
*/

const countDown2 = (seconds) => {
    setTimeout(function start() {
        console.log(seconds);

        if (seconds >= 1) {
            setTimeout(start, 1000);
        };

    }, 1000);
};

/*
== Задание 3 от ChatGPT ==
10 секунд тишины

📝 Напиши функцию, которая через 10 секунд после запуска пишет в консоль:
10 секунд прошло. Всё ещё тут?
*/

const silence = () => {
    setTimeout(() => {
        console.log("10 секунд прошло. Всё ещё тут?");
    }, 10000)
};

/*
== Задание 4 от ChatGPT ==
умный счётчик

📝 Сделай функцию smartCounter(from, to, delay, step) — она будет:

начинать с from

увеличиваться на step

каждые delay миллисекунд

пока не дойдёт до to или больше

Пример вызова:

smartCounter(10, 25, 500, 5);
Ожидаемый вывод:

10  
15  
20  
25
📌 Используй setInterval или setTimeout — на твой выбор
📌 Убедись, что вывод остановится вовремя
*/

// С помощью setInterval
const smartCounter = (from, to, delay, step) => {
    let counterId = setInterval(() => {
        console.log(from);

        if (from < to) {
            from += step;
        } else {
            clearInterval(counterId);
        }
    }, delay)
};


// С помощью setTimeout
const smartCounter2 = (from, to, delay, step) => {
    setTimeout(function start() {
        console.log(from);
        
        if (from < to) {
            from += step;
            setTimeout(start, delay);
        };

    }, delay)
};
