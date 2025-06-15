# 📦 Тема 11.3 - Цепочка промисов

---

## 🔹 Что такое цепочка промисов?

Цепочка промисов — это способ выстраивания последовательности асинхронных операций, где результат одного .then передаётся в следующий.

> 📌 Каждый .then возвращает новый промис, поэтому их можно "цеплять" друг за другом.

---

## 🔹 Пример простой цепочки

```javascript
new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
})
  .then(function (result) {
    console.log(result); // 1
    return result * 2;
  })
  .then(function (result) {
    console.log(result); // 2
    return result * 2;
  })
  .then(function (result) {
    console.log(result); // 4
  });
```

> 📌 Результат возвращённый в then становится аргументом следующего then.

---

## 🔹 Возврат промиса внутри .then

```javascript
new Promise((resolve) => {
  setTimeout(() => resolve(10), 1000);
})
  .then((result) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
  })
  .then((result) => {
    console.log(result); // 20 (через 2 секунды)
  });
```

> 📌 Если в .then вернуть ещё один промис, цепочка дождётся его завершения.

---

## 🔹 Обработка ошибок в цепочке

```javascript
new Promise((resolve, reject) => {
  throw new Error("Ошибка!");
})
  .catch((err) => {
    console.log("Поймали:", err.message);
    return "Восстановлено";
  })
  .then((result) => {
    console.log("Продолжаем с:", result);
  });
```

> 📌 Ошибки можно поймать с помощью .catch, и после этого цепочка продолжит работу.

---

## 🔹 Возврат значения или ошибка

- **return** **value** → переходит в следующий .then
- **throw** **error** → переходит в ближайший .catch

---

## 🔹 Итого

- Цепочки позволяют передавать данные между промисами.

- Можно возвращать промис из .then и встраивать асинхронность.

- Ошибки идут вниз по цепочке, пока не поймаются в .catch.

---

## ⚠️ Подводные камни

- Возврат обычного значения — это не промис, но оборачивается автоматически.

- Всегда используй .catch в конце цепочки, чтобы не терять ошибки.

- Возврат Promise.reject(...) внутри .then → сразу перебрасывает в .catch.
