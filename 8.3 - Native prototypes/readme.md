# 📦 Тема 8.3 - Встроенные прототипы

---

## 🔹 Object.prototype

Все объекты в JavaScript наследуют от `Object.prototype` — это самый базовый прототип.  
Он содержит методы, которые доступны всем объектам, например, `toString()`, `hasOwnProperty()`.

> 📌 Если свойство не найдено в объекте, поиск продолжается в `Object.prototype`.

---

## 🔹 Другие встроенные прототипы

Встроенные объекты, такие как `Array`, `Function`, `String`, имеют свои собственные прототипы:

- `Array.prototype` — методы для работы с массивами (`push`, `pop`, `map` и др.)
- `Function.prototype` — методы для функций
- `String.prototype` — методы для строк

> 📌 Методы и свойства встроенных объектов хранятся именно в их прототипах.

---

## 🔹 Примитивы

Примитивные типы (числа, строки, булевы значения) не объекты, но при обращении к методам происходит временное обёртывание в соответствующий объект:

- Строки — временный объект `String`
- Числа — временный объект `Number`
- Булевы — временный объект `Boolean`

> 📌 Это позволяет вызывать методы, как у объектов, на примитивах.

---

## 🔹 Изменение встроенных прототипов

Встроенные прототипы можно изменять, добавляя методы или свойства, например:

```javascript
String.prototype.show = function () {
  alert(this);
};
```

Но это не рекомендуется в реальных проектах, потому что может привести к конфликтам и багам.

---

## 🔹 Заимствование у прототипов

Можно использовать методы одного прототипа для другого объекта с помощью `call` или `apply`.

Например, можно заимствовать методы массива для объекта с похожей структурой.

---

## 🔹 Итого

- Прототипы — основа наследования в JavaScript
- `Object.prototype` — корень всех прототипов
- Встроенные объекты имеют свои прототипы с методами
- Примитивы временно оборачиваются для работы с методами
- Изменять встроенные прототипы опасно, но можно
- Заимствование методов позволяет гибко использовать существующий функционал
