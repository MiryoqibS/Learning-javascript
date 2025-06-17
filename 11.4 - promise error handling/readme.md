# 📦 Тема 11.4 - Обработка ошибок в промисах

---

## 🔹 Кратко о главном

- Ошибки внутри executor (new Promise(...)) можно ловить через .catch.

- throw внутри промиса = reject

- Обработчик .catch ловит как отклонённые промисы, так и брошенные ошибки.

- Ошибки в setTimeout / async-функциях не ловятся .catch, если они вне промиса.

> 📌 .catch(f) — это сокращение для .then(null, f)

---

## 🔹 Примеры

```javascript
// Ошибка внутри промиса — поймана
new Promise((resolve, reject) => {
  throw new Error("Ошибка");
}).catch((err) => alert(err));
```

```javascript
// Ошибка в setTimeout — не поймана
new Promise((resolve, reject) => {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(alert);
```

> 📌 Потому что `setTimeout` работает вне промиса — он макрозадача

---

## 🔹 Чтобы ловить ошибки из `setTimeout`:

```javascript
new Promise((resolve, reject) => {
  setTimeout(() => {
    try {
      throw new Error("Whoops!");
    } catch (err) {
      reject(err);
    }
  }, 1000);
}).catch(alert);
```

> 📌 Вложи ошибку в try..catch, и вызови reject — тогда .catch сработает

---

## 🔹 Финальный пример

```javascript
fetch("url")
  .then((response) => response.json())
  .catch((error) => {
    console.log("Произошла ошибка:", error.message);
  });
```

---

## ⚠️ Подводные камни

- .catch работает только если ошибка произошла внутри промиса

- Ошибки в асинхронных колбэках надо оборачивать вручную (try/catch + reject)

- Ошибки без `.catch()` = UnhandledPromiseRejection (в будущем — фатальная ошибка!)
