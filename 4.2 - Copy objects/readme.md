# 🧱 Тема 4.2 — Клонирование и объединение объектов

## 🧠 Зачем нужно клонировать объекты?

Если присвоить один объект другому, например:

```javascript
let user = { name: "John" };
let clone = user;
```

то clone и user будут ссылаться на один и тот же объект. Любые изменения в clone отразятся в user.
Чтобы избежать этого, нужен настоящий клон — копия объекта с теми же свойствами, но без связи с оригиналом.

```javascript
let clone = {};

for (let key in user) {
  clone[key] = user[key];
}
```

Теперь clone и user — два разных объекта с одинаковыми данными.

---

## 📦 Object.assign

Метод **Object.assign(dest, ...sources)** копирует свойства из одного или нескольких объектов в другой.

Пример:

```javascript
let user = { name: "John" };
let permissions = { canView: true };

let clone = Object.assign({}, user, permissions);
```

clone теперь содержит оба свойства.
Исходные объекты user и permissions не изменяются.

---

## 🔁 Вложенное клонирование (глубокая копия)

Поверхностное копирование не копирует вложенные объекты, а просто копирует ссылку на них:

```javascript
let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50,
  },
};

let clone = Object.assign({}, user);

user.sizes.width = 60;
console.log(clone.sizes.width); // 60 — ссылка одна!
```

Чтобы сделать глубокую копию, нужно клонировать вложенные объекты вручную или использовать готовые библиотеки, например structuredClone (если браузер поддерживает):

```javascript
let deepClone = structuredClone(user);
```

---

## 📝 Итог

-Простое присваивание копирует только ссылку, а не сам объект.
-Чтобы клонировать объект — нужно перебрать свойства вручную или использовать Object.assign.
-Object.assign создаёт поверхностную копию.
-Для вложенных объектов нужна глубокая копия.
-Новый стандартный метод structuredClone(obj) — удобный способ полной копии (если поддерживается).

> ❗ Эта тема — теоретическая, практические задания пока не предусмотрены.