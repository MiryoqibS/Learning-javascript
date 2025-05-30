# 🧠 Тема 2.10 — Условное ветвление: if, '?'

В этой теме мы изучили основы принятия решений в коде с помощью условного оператора `if`, `else` и тернарного оператора `?`.

---

## 🔹 Условный оператор `if` -если

```javascript
if (condition == true) {
  // код выполняется, если условие истинно (true)
}
```

---

## 🔹 Условный оператор `else` -иначе

```javascript
if (condition == true) {
  // если условие истина
} else {
  // если условие ложное
}
```

---

## 🔹 Условный оператор `else if` -иначе если

```javascript
if (condition == true) {
  // если условие подходить то сработает эта инструкция
} else if (condition == false) {
  // если условие подходить то сработает уже эта инструкция
} else {
  // если предыдущие условия не сработали но сработает последнее иначе
}
```

---

## 🔸 Тернарный оператор ?

```javascript
let result = condition == true ? "значение1" : "значение2";
```

---

## ⚠️ Важно

-if (...) ожидает булевое значение.
-В условии выполняется приведение типа к логическому (Boolean(...)).
-Рекомендуется использовать фигурные скобки {} даже при одной строке — для читаемости.
