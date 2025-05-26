# 📦 Тема 6.10 - bind / Привязка контекста к функции

---

## 🔹 **Что делает `bind`?**

Метод `bind()` позволяет **жёстко привязать контекст `this`** к функции.

> 📌 Это создаёт **новую функцию**, у которой `this` всегда будет равен указанному значению, независимо от того, как она вызывается.

---

## 🔹 **Синтаксис**

```javascript
let boundFunc = func.bind(context);
```

`func` — оригинальная функция

`context` — объект, который будет подставлен вместо this

`boundFunc` — новая функция, у которой this всегда будет context

---

## 🔹 Простой пример

```javascript
function greet() {
  console.log(this.name);
}

let user = { name: "Мирёкуб" };

let boundGreet = greet.bind(user);
boundGreet(); // Мирёкуб
```

> 📌 Даже если вызвать boundGreet где угодно — this будет всегда указывать на user.

---

## 🔹 Передача аргументов

`bind` также позволяет частично применить аргументы — это называется частичное применение.

```javascript
function multiply(a, b) {
  return a * b;
}

let double = multiply.bind(null, 2);
console.log(double(5)); // 10
```

> 📌 `null` — значит, `this` здесь не важен. Мы «предзаполнили» первый аргумент 2.

---

## 🔹 `bind` и методы объектов

Если метод теряет контекст — можно вернуть его с помощью bind:

```javascript
let user = {
  firstName: "Nodir",
  sayHi() {
    console.log(`Привет, ${this.firstName}!`);
  },
};

setTimeout(user.sayHi, 1000); // undefined
setTimeout(user.sayHi.bind(user), 1000); // Привет, Nodir!
```

> ⚠️ При передаче метода как колбэк он теряет контекст — bind решает эту проблему.

---

## 🔹 bind не изменяет оригинальную функцию!

```javascript
function sayHello() {
  console.log(this.name);
}

let user = { name: "Мирёкуб" };
let bound = sayHello.bind(user);

sayHello(); // undefined
bound(); // Мирёкуб
```

> 📌 Оригинальная `sayHello` осталась без контекста — `bind` возвращает новую функцию.

---

## 🔹 `bind` против стрелочных функций

Стрелочные функции игнорируют bind, потому что не имеют собственного this.

```javascript
let arrow = () => console.log(this);
let boundArrow = arrow.bind({ name: "Nodir" });

boundArrow(); // всё равно внешний this
```

---

## ⚠️ Важные моменты

- `bind` создаёт новую функцию — не забывай это!
- Можно частично применить аргументы
- Используй для сохранения `this` при передаче методов
- Стрелочные функции не работают с `bind`
