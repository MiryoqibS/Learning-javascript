# 📦 Тема 12.1 - Генераторы

---

## 🔹 Что такое генераторы?

**Генераторы** - это специальные функции, которые могут **приостанавливать** и **возобновлять** выполнение. Они создаются через `function*` и управляются методом `next()`.

> 📌 Генераторы возвращают объект с методом `next()` и свойствами:

```javascript
{ value: ..., done: true/false }
```

---

## 🔹 Синтаксис генератора

```javascript
function* generatorFunc() {
  yield 1;
  yield 2;
  yield 3;
}
```

> 📌 yield - это "точка паузы", после которой выполнение можно продолжить.

## 🔹 Пример использования

```javascript
function* gen() {
  yield "Hello";
  yield "World";
}

const g = gen();
console.log(g.next().value); // Hello
console.log(g.next().value); // World
```

> 📌 Метод next() запускает выполнение до следующего yield.

---

## 🔹 Генераторы - итерируемые

```javascript
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

for (let value of gen()) {
  console.log(value); // 1, 2, 3
}
```

---

## 🔹 Передача значений в генератор

```javascript
function* gen() {
  let x = yield "2 + 2 = ?";
  console.log(x); // 4
}

const g = gen();
console.log(g.next().value); // "2 + 2 = ?"
console.log(g.next(4).done); // true
```

> 📌 Мы можем передать данные внутрь генератора с помощью next(value).

---

## 🔹 Генераторы как "двусторонняя" связь

```javascript
function* quiz() {
  let answer = yield "Capital of France?";
  if (answer.toLowerCase() === "paris") {
    yield "Correct!";
  } else {
    yield "Wrong!";
  }
}
```

---

## 🔹 Использование return и throw

```javascript
function* gen() {
  yield 1;
  return 2;
}

let g = gen();
console.log(g.next()); // { value: 1, done: false }
console.log(g.next()); // { value: 2, done: true }
console.log(g.next()); // { value: undefined, done: true }
```

> 📌 return завершает генератор и устанавливает done: true.

---

## 🔹 Вложенные генераторы и yield\*

```javascript
function* inner() {
  yield "A";
  yield "B";
}

function* outer() {
  yield* inner();
  yield "C";
}

for (let val of outer()) {
  console.log(val); // A, B, C
}
```

> 📌 yield\* позволяет делегировать генерацию другой функции.

---

## 🔹 Практическое применение

- Перебор коллекций или деревьев

- Управление потоками данных

- Простые реализации потоков (co, redux-saga)

- Реализация кастомных итераторов

---

## ⚠️ Подводные камни

- Генераторы не работают как async/await, но совместимы с ними.

- Их мощь раскрывается в асинхронной логике или пользовательских итераторах.

- Генераторы одиночные - нельзя "вернуть" выполнение в начало.
