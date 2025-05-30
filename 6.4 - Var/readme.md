# 📦 Тема 6.4 — Переменная `var`

---

## 🔹 Что такое `var`?

`var` — это устаревший способ объявления переменных в JavaScript. Он отличается от let и const рядом важных особенностей:

-не имеет блочной области видимости,
-поддерживает всплытие (**hoisting**),
-допускает повторное объявление.

---

## 🔹 Область видимости var

Переменные, объявленные через var, имеют функциональную область видимости, а не блочную.

```javascript
if (true) {
  var test = true;
}

console.log(test); // true
```

> 📌 Переменная test доступна за пределами блока `if`, потому что var не ограничен фигурными скобками.

---

## 🔹 Повторное объявление

С var можно объявить переменную повторно, и это не вызовет ошибку.

```javascript
var message = "Привет";
var message = "Пока";

console.log(message); // "Пока"
```

> 📌 Такое поведение может привести к путанице в коде.

---

## 🔹 Поднятие (**Hoisting**)

Объявление переменной var всплывает вверх, но не её значение.

```javascript
console.log(age); // undefined

var age = 30;
```

> 📌 Переменная существует до строки объявления, но значение `undefined`, пока не выполнится присваивание.

---

## 🔹 Почему не рекомендуется использовать `var`

-Легко получить ошибку из-за области видимости.
-Меньше предсказуемости по сравнению с `let` и `const`.
-Современный `JavaScript` ориентирован на `let` и `const`.

---

## ⚠️ Подводный камень: `var` в цикле

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Вывод: 3, 3, 3
```

Исправление с использованием `let`:

```javascript
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Вывод: 0, 1, 2
```

> 📌 `let` создаёт новое лексическое окружение на каждой итерации.

> ❗ Эта тема — теоретическая, практические задания пока не предусмотрены.
