# 📦 Тема 13.2 - import / export

---

## 🔹 Что такое export?

export позволяет сделать переменные, функции, классы видимыми за пределами файла (модуля), чтобы их можно было использовать в других модулях с помощью import.

> 📌 Каждый .js файл с export считается модулем.

Пример именного экспорта (named export):

```javascript
// 📄 math.js
export const sum = (a, b) => a + b;
export const mult = (a, b) => a \* b;
```

Альтернативный способ:

```javascript
// 📄 math.js
const sum = (a, b) => a + b;
const mult = (a, b) => a \* b;

export { sum, mult };
```

> 📌 Можно экспортировать столько сущностей, сколько нужно.

---

## 🔹 Экспорт по умолчанию (export default)

Это единственный экспорт, который может быть в файле как "главный по умолчанию".

```javascript
// 📄 config.js
export default {
  apiUrl: "https://pokeapi.co/api/v2/",
  theme: "dark",
};
```

Можно экспортировать функции, классы, объекты:

```javascript
// 📄 logger.js
export default function log(message) {
  console.log(`[LOG]: ${message}`);
}
```

> 📌 Можно комбинировать default и обычные экспорты в одном файле, но default должен быть один.

---

## 🔹 Что такое import?

import — это возможность получить всё, что экспортировано из другого модуля. Он позволяет использовать код из других файлов.

```javascript
// 📄 main.js
import { sum, mult } from "./math.js";

console.log(sum(2, 3)); // 5
```

> 📌 Путь к файлу модуля в браузере должен обязательно заканчиваться на .js.

---

## 🔹 Импорт по умолчанию

Если в модуле был export default, то импорт выглядит так:

```javascript
// 📄 main.js
import config from "./config.js";

console.log(config.apiUrl); // https://pokeapi.co/api/v2/
```

> 📌 Имя можно задать любое — не обязано совпадать с именем внутри модуля.

---

## 🔹 Смешанный импорт

Можно одновременно импортировать default и именные экспорты:

```javascript
// 📄 utils.js
export default "Hello!";
export const show = () => console.log("Hi!");
```

```javascript
// 📄 app.js
import defaultValue, { show } from "./utils.js";
```

> 📌 defaultValue — то, что было export default, show — обычный экспорт.

---

## 🔹 Переименование при экспорте и импорте

Чтобы избежать конфликтов или сделать имена более понятными, можно использовать as:

```javascript
// 📄 colors.js
const red = "#FF0000";
const green = "#00FF00";

export { red as danger, green as success };
```

```javascript
// 📄 theme.js
import { danger, success } from "./colors.js";
```

> 📌 Можно переименовывать и при импорте:

```javascript
import { danger as redColor } from "./colors.js";
```

---

## 🔹 Импорт всего содержимого модуля

Если нужно получить всё содержимое модуля в одном объекте, можно использовать \* as:

```javascript
// 📄 main.js
import \* as math from "./math.js";

console.log(math.sum(2, 2)); // 4
console.log(math.mult(2, 5)); // 10
```

> 📌 Весь экспорт собирается в объект math, и ты обращаешься через math.имя.

## ⚠️ Ошибки и подводные камни

-❗ Все импорты происходят до выполнения кода, на стадии загрузки.

- ❗ Нельзя использовать import/export внутри условий (if, for, while, и т.д.).

- ❗ Импортируются только экспортированные переменные.

- ❗ В модулях this — это undefined, а не window.

- ❗ Модули работают только через сервер (http://...), а не file://.

> ❗ Эта тема — теоретическая, практические задания пока не предусмотрены.
