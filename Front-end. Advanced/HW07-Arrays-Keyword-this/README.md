# Домашнє завдання №7 по темі: *"Масиви. Замикання. Ключове слово this"*

## Завдання: 
Створіть 3 об'єкти, що описують країни:

```js
  const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
  const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
  const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };
```
- Створіть функцію `getMyTaxes.call(country, salary) -> number;` – яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн. *Функція повинна викликатись через call та працювати з даними через this*
- Створіть функцію `getMiddleTaxes.call(country) -> number;` – яка рахує скільки у середньому податків платять IT-спеціалісти у кожній країні. (tax * middleSalary). *Функція повинна викликатись через call та працювати з даними через this*
- Створіть функцію `getTotalTaxes.call(country) -> number;` – яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні. (tax * middleSalary * vacancies). *Функція повинна викликатись через call та працювати з даними через this*
- Створіть функцію `getMySalary(country)` – яка буде писати в консоль об'єкт виду: **{ salary: number, taxes: number, profit: number }** кожні 10 секунд. Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. taxes – розраховується в залежності від вибраної країни та значення salary.
profit = salary - taxes;

[Результат](https://danadovzh.github.io/Cursor_Education/Front-end.%20Advanced/HW07-Arrays-Keyword-this/index.html)