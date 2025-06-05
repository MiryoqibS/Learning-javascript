# 📦 Тема 9.5 - Расширение встроенных классов

---

## 🔹 Что такое встроенные классы?

Встроенные классы — это классы, такие как `Array`, `Error`, `Map`, `Set`, `Promise` и т.д., которые предоставляются самим JavaScript.

> 📌 Они реализованы как настоящие классы, и их можно **расширять через `class MyClass extends SomeNativeClass`**.

---

## 🔹 Особенности расширения встроенных классов

- Встроенные классы поддерживают **наследование**, как обычные классы.
- Внутри встроенных объектов используются специальные внутренние слоты (например, `[[ArrayLength]]`).
- Эти слоты обрабатываются только правильным встроенным классом — например, методы массива работают **только с объектами, у которых есть `[[ArrayLength]]`**.

> 📌 Поэтому **правильное наследование** критично — только `class MyArray extends Array {}` создаёт объекты, полностью совместимые с `Array`.

---

## 🔹 Пример расширения Array

```javascript
class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }
}

const arr = new PowerArray(1, 2, 3);
console.log(arr.isEmpty()); // false

const empty = new PowerArray();
console.log(empty.isEmpty()); // true
```

> 📌 PowerArray наследует от Array, значит методы массива (map, filter, и т.д.) будут возвращать тоже экземпляры PowerArray!

---

## 🔹 Поведение методов как map и filter

```javascript
let filtered = arr.filter((x) => x > 1);
console.log(filtered instanceof PowerArray); // true
```

> 📌 Методы массива сохраняют тип потомка! Это делается с помощью встроенного механизма Symbol.species.

---

## 🔹 Настройка конструктора через Symbol.species

```javascript
class PowerArray extends Array {
  static get [Symbol.species]() {
    return Array; // ← теперь методы вернут обычный Array
  }
}

let arr = new PowerArray(1, 2, 3);
let filtered = arr.filter((x) => x > 1);

console.log(filtered instanceof PowerArray); // false
console.log(filtered instanceof Array); // true
```

> 📌 Symbol.species позволяет контролировать, какой конструктор будет использоваться методами типа map, filter, slice и т.д.

---

## ⚠️ Подводные камни

- Всегда используй super(...) в конструкторе, если расширяешь встроенный класс.

- Только настоящее наследование от встроенного класса создаёт полноценные объекты нужного типа.

- Symbol.species позволяет отключить/изменить поведение методов, возвращающих экземпляры класса.

> ❗ Эта тема — теоретическая, практические задания пока не предусмотрены.
