# 🚀 Тема 5.5 — Методы массивов

Привет! В этом разделе я прошёл одну из самых важных и практических тем в JavaScript — методы массивов. Эта глава научила меня не просто перебирать массивы, а профессионально трансформировать, фильтровать, искать, сортировать, уменьшать и изменять данные с помощью мощных встроенных инструментов.

## 🧠 Что я выучил:

### ✅ Как перебирать массивы:

```javascript
arr.forEach((item, index, array) => {
  /* ... */
});
```

### ✅ Как преобразовать каждый элемент массива:

```javascript
const newArr = arr.map((item) => item * 2);
```

### ✅ Как отфильтровать элементы по условию:

```javascript
const filtered = arr.filter((item) => item > 10);
```

### ✅ Как найти элемент по условию:

```javascript
const user = users.find((user) => user.id === 3);
```

### ✅ Как проверить наличие элемента:

```javascript
arr.includes(5); // true или false
```

### ✅ Как сортировать массив:

```javascript
arr.sort((a, b) => a - b); // по возрастанию
```

### ✅ Как объединить все элементы в одно значение:

```javascript
const sum = arr.reduce((acc, item) => acc + item, 0);
```

### ✅ Как проверить, что хотя бы один элемент соответствует условию:

```javascript
arr.some((item) => item > 5); // true/false
```

### ✅ Как убедиться, что все элементы соответствуют условию:

```javascript
arr.every((item) => typeof item === "number"); // true/false\
```

## 🔨 Примеры из реальной практики:

✅ forEach: для отображения карточек товара на сайте:

```javascript
products.forEach((product) => renderCard(product));
```

### ✅ map: для формирования массива цен:

```javascript
const prices = products.map((product) => product.price);
```

### ✅ filter: для вывода только доставленных заказов:

```javascript
const deliveredOrders = orders.filter((order) => order.delivered);
```

### ✅ find: для поиска пользователя по ID:

```javascript
const user = users.find((u) => u.id === 101);
```

### ✅ sort: для сортировки продуктов по скидке:

```javascript
products.sort((a, b) => b.discount - a.discount);
```

### ✅ reduce: для подсчёта общей стоимости корзины:

```javascript
const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
```

### ✅ some: проверка, есть ли хотя бы один VIP пользователь:

```javascript
const hasVIP = users.some((user) => user.vip);
```

### ✅ every: проверка, все ли товары в наличии:

```javascript
const allInStock = products.every((product) => product.stock > 0);
```

### ✅ includes: поиск значения в массиве тегов:

```javascript
if (tags.includes("new")) highlight();
```

## 🏁 Итого:
-Я разобрал и запомнил все ключевые методы массивов.
-Понимаю, в каких реальных ситуациях применяются map, filter, reduce, sort и другие.
-Готов к сложной работе с данными в проектах.
-Применяю методы осознанно и эффективно.
-Могу обрабатывать любые массивы в реальных задачах фронтенда и backend'а.
-Готов двигаться дальше — к объектам, деструктуризации и функциональному стилю!
