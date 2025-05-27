# 📦 Тема 6.11 - Повторяем стрелочные функции

---

## 🔹 Использование в колбэках

```javascript
let arr = [1, 2, 15];

arr.sort((a, b) => a - b);
```

---

## 🔹 Без `this`

У стрелочных функций нет своего `this`.
Если обратиться к `this` внутри стрелочной функции, он будет взят из внешней функции.

```javascript
let group = {
  title: "Наш курс",
  students: ["Вася", "Петя", "Даша"],

  showList() {
    this.students.forEach((student) => alert(this.title + ": " + student));
  },
};

group.showList();
```

> 📌 Если бы использовалась обычная функция в `forEach`, `this.title` было бы `undefined`.

---

## 🔹 Нет arguments

У стрелочных функций нет своего `arguments`.

```javascript
function regular() {
  let arrow = () => console.log(arguments);
  arrow(1, 2, 3);
}

regular(10, 20, 30); // [10, 20, 30]
```

> 📌 `arguments` взят из regular, а не из arrow.

---

## 🔹 Стрелочные функции нельзя вызвать с new

```javascript
let Arrow = () => {};
let obj = new Arrow(); // Ошибка
```

---

## 🧠 Итого

### **Стрелочные функции**:

- Не имеют `this`.
- Не имеют `arguments`.
- Не могут быть вызваны с `new`.

> ❗ Эта тема — теоретическая, практические задания пока не предусмотрены.
