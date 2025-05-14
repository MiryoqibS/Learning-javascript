# 📦 Тема 5.12 — Формат JSON, метод toJSON

---

## 🔹 Что такое JSON?

`JSON` `(JavaScript Object Notation)` — это текстовый формат для хранения и передачи данных. Он используется для обмена информацией между клиентом и сервером.

Пример объекта в формате JSON:

```javascript
{
  "name": "John",
  "age": 30,
  "isAdmin": false,
  "courses": ["html", "css", "js"],
  "wife": null
}
```

---

## 🔹 Метод JSON.stringify

Метод `JSON.stringify` преобразует `JavaScript`-объект в строку в формате `JSON`.

Пример:

```javascript
let user = {
  name: "John",
  age: 30,
  isAdmin: false,
  courses: ["html", "css", "js"],
  wife: null,
};

let json = JSON.stringify(user);

console.log(json);

// Вывод:
// {"name":"John","age":30,"isAdmin":false,"courses":["html","css","js"],"wife":null}
```

---

## 🔹 Особенности сериализации

Строки и имена свойств: Всегда заключаются в двойные кавычки.
Пропущенные значения: undefined, функции и символы пропускаются.
Циклические ссылки: Приводят к ошибке.

Пример:

```javascript
let user = {
  sayHi() {
    alert("Hello");
  },
  [Symbol("id")]: 123,
};

console.log(JSON.stringify(user)); // {} — свойства пропущены
```

---

## 🔹 Параметры JSON.stringify

Метод `JSON.stringify` принимает три параметра: -`value`: Значение для преобразования. -`replacer`: Функция или массив для управления сериализацией. -`space`: Количество пробелов для форматирования.

---

## 📌 Параметр replacer

Функция replacer позволяет контролировать, какие свойства включать или исключать.

Пример:

```javascript
let user = {
  name: "John",
  age: 30,
  password: "secret",
};

let json = JSON.stringify(user, (key, value) => {
  return key === "password" ? undefined : value;
});

console.log(json);
// Вывод:
// {"name":"John","age":30}
```

Массив `replacer` определяет список свойств для включения:

```javascript
let user = {
  name: "John",
  age: 30,
  isAdmin: false,
};

let json = JSON.stringify(user, ["name", "age"]);

console.log(json);
// Вывод:
// {"name":"John","age":30}
```

---

## 📌 Параметр space

Позволяет форматировать вывод для улучшения читаемости:

```javascript
let user = {
  name: "John",
  age: 30,
};

let json = JSON.stringify(user, null, 2);

console.log(json);
// Вывод:
// {
//   "name": "John",
//   "age": 30
// }
```

---

## 🔹 Метод toJSON

Объекты могут определять метод toJSON, который возвращает значение для сериализации.

Пример:

```javascript
let room = {
  number: 23,
  toJSON() {
    return this.number;
  },
};

console.log(JSON.stringify(room)); // 23
```