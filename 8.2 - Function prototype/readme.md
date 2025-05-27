# 📦 Тема 8.2 – Function.prototype

---

## 🔹 Краткое объяснение

Каждая функция в JavaScript имеет свойство prototype, которое используется только в одном случае — при вызове функции через new. Это свойство задаёт [[Prototype]] для создаваемого объекта.

> 📌 function.prototype — это не прототип самой функции, а прототип объектов, создаваемых через эту функцию-конструктор.

---

## 🔹 Свойство prototype

Когда мы используем new, создаётся новый объект, и его **proto** (или [[Prototype]]) будет ссылаться на F.prototype, где F — это функция-конструктор.

```javascript
function User(name) {
  this.name = name;
}
let user = new User("Miryoqib");

console.log(user.__proto__ === User.prototype); // true
```

> 📌 Объект user наследует от User.prototype

---

## 🔹 По умолчанию в prototype

Когда создаётся функция, ей автоматически присваивается prototype:

```javascript
function User() {}

console.log(typeof User.prototype); // object
console.log(User.prototype.constructor === User); // true
```

> 📌 Внутри User.prototype по умолчанию есть свойство constructor, которое ссылается обратно на User

---

## 🔹 Добавление методов через prototype

Можно добавлять методы в prototype, и все объекты, созданные через new, получат к ним доступ:

```javascript
User.prototype.sayHi = function () {
  console.log("Hi, " + this.name);
};

let user1 = new User("Alice");
user1.sayHi(); // Hi, Alice
```

> 📌 Метод sayHi находится в User.prototype, но доступен всем экземплярам

---

## 🔹 Отличие prototype и proto

F.prototype — используется только при создании объектов через new

obj.**proto** — это скрытое свойство, указывающее на прототип объекта

```javascript
function Rabbit() {}
let rabbit = new Rabbit();

console.log(rabbit.__proto__ === Rabbit.prototype); // true
```

---

## 🔹 Важно понимать

```javascript
let obj = {};
console.log(obj.prototype); // undefined
```

> 📌 Только функции имеют свойство prototype, обычные объекты — нет

---

## ⚠️ Подводные камни

- Свойство prototype имеет значение только для функций, и только когда они используются как конструкторы

- Не путай **proto** (у объекта) и prototype (у функции)

- Замена F.prototype = {...} полностью стирает constructor, нужно восстанавливать его вручную:

```javascript
function Dog() {}
Dog.prototype = {
  bark() {
    console.log("woof");
  },
  constructor: Dog, // вручную вернуть constructor
};
```
