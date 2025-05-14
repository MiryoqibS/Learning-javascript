# 🕒 Тема 5.11 - Дата и время

---

## 🔹 Создание даты

Можно создать дату несколькими способами:

```javascript
let now = new Date(); // текущая дата и время
let date = new Date(2020, 11, 31, 23, 59); // год, месяц (0-11), день, часы, минуты
let dateFromString = new Date("2020-12-31T23:59:00");
let dateFromMs = new Date(1000 * 60 * 60); // по миллисекундам с 1970 года
```

---

## 🔹 Получение компонентов даты

```javascript
let date = new Date();

date.getFullYear(); // 2025
date.getMonth(); // 0 - январь
date.getDate(); // число месяца
date.getDay(); // 0 - воскресенье
date.getHours(); // часы
date.getMinutes(); // минуты
date.getSeconds(); // секунды
```

---

## 🔹 Установка компонентов даты

```javascript
let date = new Date();

date.setFullYear(2024);
date.setMonth(5); // июнь
date.setDate(15);
date.setHours(10);
date.setMinutes(30);
```

Также есть `setTime(milliseconds)` и `setMilliseconds(ms)`.

---

## 🔹 Автокоррекция

```javascript
let date = new Date(2020, 0, 32); // 32 января => 1 февраля
```

_JavaScript_ сам корректирует даты при выходе за границы.

---

## 🔹 Работа с временем

Разница между датами:

```javascript
let start = new Date();
doSomething();
let end = new Date();
let diff = end - start; // в миллисекундах
```

---

## 🔹 Форматирование и вывод

```javascript
let date = new Date();
date.toString();
date.toDateString();
date.toTimeString();
date.toISOString(); // ISO 8601 формат
```

Также можно использовать `date.getTime()` или `Date.now()` для получения метки времени `(timestamp)`.

---

## 🧠 Что я теперь умею

-Уверенно создаю, изменяю и анализирую даты
-Умею работать с миллисекундами и временем
-Могу решать задачи, связанные с расписанием, таймерами и форматированием времени