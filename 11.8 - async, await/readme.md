# 📦 Тема 11.8 - async / await

---

## 🔹 Что такое async / await

async / await — это современный синтаксис (синтаксический сахар) для работы с промисами, который позволяет писать асинхронный код так, как будто он синхронный.

> 📌 async/await делает код понятнее и проще, особенно при множестве вложенных .then().

---

## 🔹 Ключевое поведение

- async перед функцией заставляет её всегда возвращать Promise

- await можно использовать только внутри async-функции

- await приостанавливает выполнение, пока промис не завершится

---

## 🔹 Пример: простой await

```javascript
async function f() {
  const result = await new Promise((resolve) => {
    setTimeout(() => resolve("Готово!"), 1000);
  });

  console.log(result); // Готово!
}

f();
```

> 📌 Внутри async-функции мы можем "ждать" результат промиса прямо через await.

---

## 🔹 Ошибки и try...catch

```javascript
async function f() {
  try {
    let response = await fetch("https://no-such-url.com");
    let data = await response.json();
  } catch (err) {
    console.log("Ошибка:", err.message);
  }
}

f();
```

> 📌 Ошибки внутри await обрабатываются через обычный try...catch, как в синхронном коде.

---

## 🔹 async возвращает Promise

```javascript
async function f() {
  return 42;
}

f().then(result => console.log(result)); // 42
```

> 📌 Даже если ты возвращаешь обычное значение — оно будет обёрнуто в Promise.

---

## 🔹 Вызов async из обычной функции
```javascript
async function getValue() {
  return "Значение";
}

function run() {
  getValue().then(res => console.log(res));
}

run(); // Значение
```

> 📌 В обычной функции ты не можешь использовать await, поэтому используешь .then().

---

## 🔹 Последовательный await

```javascript
async function process() {
  let user = await fetch("/user.json");
  let data = await user.json();

  let githubUser = await fetch(`https://api.github.com/users/${data.name}`);
  let githubData = await githubUser.json();

  console.log(githubData.name);
}
```

> 📌 Все await выполняются последовательно. Можно использовать Promise.all для параллельного запуска.

---

## ⚠️ Подводные камни

- 🔸 Нельзя использовать await вне async-функции

- 🔸 await останавливает выполнение до завершения промиса

- 🔸 async всегда возвращает Promise, даже если вернули обычное значение

- 🔸 Все ошибки внутри await нужно оборачивать в try...catch или обрабатывать через .catch()
