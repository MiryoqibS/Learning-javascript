# 🧩 Тема 5.10 - Деструктурирующее присваивание

---

## 🔹 Деструктуризация массивов

```javascript
let arr = ["Ilya", "Kantor"];
let [firstName, lastName] = arr;
```

➡ Значения из массива arr автоматически присваиваются переменным `firstName` и `lastName`.

Также можно пропускать элементы:

```javascript
let [first, , third] = ["a", "b", "c"];
```

Можно использовать значения по умолчанию, если элемента нет:

```javascript
let [name = "Guest", surname = "Anonymous"] = ["Ilya"];
```

Также изучил, как использовать `...rest` для сбора оставшихся элементов:

```javascript
let [first, ...rest] = [1, 2, 3, 4];
// first = 1, rest = [2, 3, 4]
```

---

## 🔹 Деструктуризация объектов

Очень удобно доставать значения по ключам:

```javascript
let user = { name: "John", age: 30 };
let { name, age } = user;
```

Также можно:

Переименовывать переменные:

```javascript
let { name: userName, age: userAge } = user;
```

Устанавливать значения по умолчанию:

```javascript
let { role = "guest" } = user;
Извлекать вложенные объекты:

let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let {
  sizes: { height, width }
} = user;
```

---

## 🔹 Деструктуризация в функциях

Можно сразу доставать нужные поля из объекта в параметрах функции:

```javascript
function showMenu({ title = "Untitled", width = 200, height = 100 } = {}) {
  console.log(`${title} ${width}x${height}`);
}
```

Очень полезно, когда передаются конфигурационные объекты.
