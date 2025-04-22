# Тема 2.12 — Оператор нулевого слияния ??

## 📌 Что это?

Оператор `??` возвращает **первый аргумент**, если он **не `null` и не `undefined`**, иначе — **второй**.

```javascript
let result = a ?? b;
```

## 🔎 Примеры

```javascript
null ?? "default"; // "default"
undefined ?? "default"; // "default"
false ?? "default"; // false ✅
0 ?? 100; // 0 ✅
"" ?? "текст"; // "" ✅
```

## 🧱 Приоритет

```javascript
let result = (a || b) ?? c; // правильно
```
