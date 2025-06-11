# 📦 Тема 10.2 - Пользовательские ошибки, расширение Error

---

## 🔹 Что такое пользовательские ошибки

- Мы можем создавать свои классы ошибок, наследуя их от встроенного Error.

- Это удобно для различения типов ошибок и точной обработки.

> 📌 Такие ошибки помогают сделать код чище и легче для отладки.

---

## 🔹 Наследование от Error

```javascript
class MyError extends Error {
  constructor(message) {
    super(message);
    this.name = "MyError";
  }
}
```

> 📌 Обязательно вызываем super(message) — иначе message не установится.

---

## 🔹 Пример использования

```javascript
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function readUser(json) {
  let user = JSON.parse(json);

  if (!user.age) {
    throw new ValidationError("Нет поля: age");
  }

  return user;
}

try {
  readUser('{ "name": "Miryoqib" }');
} catch (err) {
  if (err instanceof ValidationError) {
    console.log("Ошибка валидации: " + err.message);
  } else {
    throw err;
  }
}
```

> 📌 instanceof помогает проверить, является ли ошибка определённым типом.

---

## 🔹 Добавляем поле cause (причина ошибки)

```javascript
class ReadError extends Error {
  constructor(message, cause) {
    super(message);
    this.cause = cause;
    this.name = "ReadError";
  }
}
```

> 📌 Это позволяет вложить одну ошибку в другую.

---

## 🔹 Ошибки-наследники: полезный паттерн

Создаём базовый класс ошибки, например AppError, а от него наследуем другие.

Это удобно для структуризации ошибок.

```javascript
class AppError extends Error {}
class DatabaseError extends AppError {}
class ValidationError extends AppError {}
```

> 📌 Потом можно отловить любую AppError и её потомков единообразно.

---

## ⚠️ Подводные камни

- Не забывай про super(message) в конструкторе.
- У Error не устанавливается корректный name автоматически — его нужно явно задавать.
- При вложенных ошибках (cause) нужно выводить и сообщение причины.
