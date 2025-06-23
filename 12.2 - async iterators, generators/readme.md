# 📦 Тема 12.2 - Асинхронные итераторы и генераторы

---

## 🔹 Что такое асинхронный итератор?

Асинхронный итератор — это объект, у которого есть метод  
`Symbol.asyncIterator()` и он возвращает объект с методом  
`next()`, возвращающим **промис**, который резолвится в `{ value, done }`.

> 📌 Асинхронные итераторы полезны, когда мы получаем данные **постепенно**, например из API, WebSocket или потока.

---

## 🔹 Цикл `for await...of`

Этот цикл работает с асинхронными итераторами:

```javascript
for await (let item of asyncIterable) {
  console.log(item);
}
```

> 📌 Это как обычный for...of, но умеет ждать промисы.

---

## 🔹 Асинхронные генераторы async function\*

Они создают объект, у которого уже есть `Symbol.asyncIterator`.

Пример:

```javascript
async function* asyncGen() {
  yield "A";
  yield "B";
  yield "C";
}

for await (let val of asyncGen()) {
  console.log(val);
}
```

> 📌 yield можно использовать с await, а next() возвращает промис.

---

## 🔹 Пример с задержкой (delay)

```javascript
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function* delayedRange(start, end) {
  for (let i = start; i <= end; i++) {
    await delay(1000);
    yield i;
  }
}

for await (let num of delayedRange(1, 3)) {
  console.log(num); // с паузой 1 секунда между числами
}
```

> 📌 Это часто используется для имитации стриминга, загрузки с сервера и т.п.

---

## 🔹 Пример с API

```javascript
async function* fetchData(urls) {
  for (let url of urls) {
    const res = await fetch(url);
    const data = await res.json();
    yield data;
  }
}

const urls = ["url1", "url2", "url3"];

for await (let data of fetchData(urls)) {
  console.log(data);
}
```

> 📌 Очень удобно загружать пакеты данных по очереди.

---

## ⚠️ Подводные камни

- Нельзя использовать for await...of вне async функции.
- async function\* всегда возвращает асинхронный итератор.
- Асинхронные генераторы нельзя использовать в обычных for...of.
