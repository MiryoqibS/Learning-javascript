# 📦 Тема 13.3 - Динамический импорт (import())

---

## 🔹 Что такое динамический импорт?

Обычно модули импортируются через import в начале файла:

```javascript
import { sum } from "./math.js";
```

Но иногда нам нужно подгрузить модуль не сразу, а только при необходимости, например:

- Когда пользователь нажал кнопку

- Когда мы хотим уменьшить "вес" начальной загрузки страницы

- Когда модуль нужен только в определённых ситуациях

- Вот тут и используется динамический импорт через функцию:

```javascript
const module = await import("./math.js");
```

> 📌 Динамический импорт — это специальная конструкция, возвращающая промис, который резолвится в объект с экспортами модуля.

---

## 🔹 Как использовать динамический импорт?

Представим, у нас есть модуль:

```javascript
// 📄 say.js
export function sayHi(user) {
  console.log(`Hello, ${user}!`);
}
```

И мы хотим загрузить его по клику на кнопку:

```javascript
// 📄 main.js
button.addEventListener("click", async () => {
  const module = await import("./say.js");
  module.sayHi("Miryoqib");
});
```

> 📌 Так модуль say.js не загружается сразу, а только при клике.

---

## 🔹 Синтаксис и особенности

### ✅ Возвращает промис

```javascript
const module = await import("./utils.js");
```

или

```javascript
import("./utils.js").then((module) => {
  module.doSomething();
});
```

### ✅ Поддерживает default и named экспорты

```javascript
const module = await import("./config.js");
console.log(module.default); // если был export default
console.log(module.someFn); // если был обычный export
```

### ✅ Можно использовать внутри условий, функций и т.д.

```javascript
if (userWants) {
  const { doSomething } = await import("./utils.js");
  doSomething();
}
```

> 📌 Это главное отличие от обычного import, который нельзя использовать в if, for и т.д.

---

## 🔹 Примеры использования

📦 Загрузка переводов по языку

```javascript
async function loadLanguage(lang) {
  const module = await import(`./lang/${lang}.js`);
  return module.default;
}

const translations = await loadLanguage("en");
```

> 📌 Такой подход особенно полезен, если у вас много языков и вы не хотите грузить все сразу.

📦 Ленивая загрузка больших библиотек

```javascript
const loadChartLib = async () => {
  const { drawChart } = await import("./charts.js");
  drawChart();
};

button.addEventListener("click", loadChartLib);
```

## ⚠️ Ошибки и подводные камни

- ❗ import() работает только в модульных скриптах `<script type="module">`

- ❗ Путь должен быть строкой (динамически формировать через переменные можно, но не выражениями)

- ❗ Использование import() требует поддержки ES-модулей, не работает в старых браузерах без полифиллов

- ❗ Если модуль не найден, промис будет отклонён → нужно использовать try/catch

```javascript
try {
  const module = await import("./maybe-exists.js");
} catch (err) {
  console.error("Модуль не найден:", err);
}
```

> ❗ Эта тема — теоретическая, практические задания пока не предусмотрены.
