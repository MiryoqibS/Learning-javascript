# 📦 Тема 11.5 - Promise API

---

## 🔹 Promise.all

### 🔹 Что делает:

Ждёт, пока все промисы выполнятся. Если хотя бы один завершится с ошибкой — всё падает.

**📌 Поведение**:

- ✅ Все промисы успешны → результат: массив значений.
- ❌ Один упал → переходит в reject с этой ошибкой.

**📦 Пример**:

```javascript
Promise.all([Promise.resolve("A"), Promise.resolve("B")]).then(console.log); // ["A", "B"]
```

```javascript
Promise.all([Promise.resolve("A"), Promise.reject("Ошибка")]).catch(
  console.log
); // "Ошибка"
```

> 📌 Используется, когда все операции нужны для общего результата

---

## 🔹 Promise.allSettled

### 🔹 Что делает:

Ждёт выполнения всех промисов, даже если есть ошибки. Никогда не падает.

**📌 Поведение**:
- ✅ Возвращает массив объектов: {status: "fulfilled", value} или {status: "rejected", reason}

**📦 Пример**:

```javascript
Promise.allSettled([Promise.resolve("Успех"), Promise.reject("Ошибка")]).then(
  console.log
);
/*
[
  { status: "fulfilled", value: "Успех" },
  { status: "rejected", reason: "Ошибка" }
]
*/
```

> 📌 Полезен, если нужно получить все результаты, даже если часть операций упала

---

## 🔹 Promise.race

### 🔹 Что делает:

Возвращает результат первого завершённого промиса (неважно: resolve или reject).

**📌 Поведение**:
- ⏱ Самый быстрый промис выигрывает гонку.

**📦 Пример**:

```javascript
Promise.race([
  new Promise((resolve) => setTimeout(() => resolve("Первый"), 1000)),
  new Promise((resolve) => setTimeout(() => resolve("Второй"), 2000)),
]).then(console.log); // "Первый"
```

```javascript
Promise.race([
  new Promise((_, reject) => setTimeout(() => reject("Ошибка"), 500)),
  new Promise((resolve) => setTimeout(() => resolve("Поздно"), 1000)),
]).catch(console.log); // "Ошибка"
```

> 📌 Часто применяется для таймаута: если ответ слишком долгий — отменяем

---

## 🔹 Promise.any

### 🔹 Что делает:

Ждёт первый успешный промис. Ошибки игнорирует. Если все упали, возвращает AggregateError.

**📌 Поведение**:

- ✅ Вернёт первый resolve.

- ❌ Все reject → catch, но с массивом ошибок.

**📦 Пример**:

```javascript
Promise.any([
  Promise.reject("Ошибка 1"),
  Promise.reject("Ошибка 2"),
  Promise.resolve("Успешно!"),
]).then(console.log); // "Успешно!"
```

```javascript
Promise.any([Promise.reject("😢"), Promise.reject("🥲")]).catch((err) =>
  console.log(err.errors)
); // ["😢", "🥲"]
```

> 📌 Удобен, если тебе хватит одного успешного результата

---

## 🔹 Сравнение методов

| Метод              | Успех                | Ошибка                         |
| ------------------ | -------------------- | ------------------------------ |
| Promise.all        | Все успешны          | Любая ошибка → reject          |
| Promise.allSettled | Всегда успешен       | Нет reject, но проверяй status |
| Promise.race       | Первый завершившийся | Ошибка или успех — кто быстрее |
| Promise.any        | Первый успешный      | Все упали → AggregateError     |

## ⚠️ Подводные камни

- Promise.all = упал один → упали все.

- Promise.any кидает AggregateError, а не обычную ошибку.

- Promise.race может вернуть ошибку, если она пришла первой.

- Promise.allSettled всегда .then, но сам решай, что обрабатывать.
