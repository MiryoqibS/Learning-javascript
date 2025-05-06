# 🔄 Тема 4.8 — Преобразование объектов в примитивы

## 📚 О чём эта тема?

В этой теме я разобрался, как объекты в JavaScript могут автоматически **преобразовываться в примитивные значения**. Это важная часть языка, особенно при операциях сложения, сравнений и выводе данных.

---

## ⚙ Как работает преобразование?

Когда JavaScript пытается преобразовать объект в примитив, он использует **внутренний алгоритм `ToPrimitive(hint)`**, где `hint` — это подсказка:

- `"string"` – когда ожидается строка (например, `alert(obj)`).
- `"number"` – при математических операциях (например, `obj * 2`).
- `"default"` – в неясных случаях (например, `obj + "1"`).

---

## 🧠 В каком порядке вызываются методы?

JS ищет методы преобразования в следующем порядке:

1. **Если есть метод `obj[Symbol.toPrimitive](hint)` — вызывается он.**
2. Если `hint = "string"`:
   - Сначала вызывается `obj.toString()`
   - Потом `obj.valueOf()`, если `toString` не дал примитив.
3. Если `hint = "number"` или `"default"`:
   - Сначала вызывается `obj.valueOf()`
   - Потом `obj.toString()`, если `valueOf` не дал примитив.

---

## 🧪 Примеры преобразования

### 1. Без `Symbol.toPrimitive`

```javascript
let user = {
  name: "Yakub",
  money: 1000,

  toString() {
    return `{name: "${this.name}"}`;
  },

  valueOf() {
    return this.money;
  }
};

console.log(String(user)); // "{name: "Yakub"}"
console.log(user + 500);   // 1500
```
### 2. С `Symbol.toPrimitive`
```javascript
let user = {
  name: "Yakub",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    if (hint === "string") {
      return `Имя: ${this.name}`;
    } else {
      return this.money;
    }
  }
};

console.log(String(user)); // "Имя: Yakub"
console.log(user + 500);   // 1500
```

---

## 📌 Что важно запомнить?
-Если нет Symbol.toPrimitive, JS будет использовать valueOf и toString в зависимости от hint.
-Метод Symbol.toPrimitive(hint) позволяет полностью контролировать поведение преобразования.
-Преобразование объектов в примитивы происходит неявно, и важно понимать когда и как оно срабатывает.

> ❗ Эта тема — теоретическая, практические задания пока не предусмотрены.
