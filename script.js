/*
! Пустой оператор
? Убираем из цикла скобки, блок операции

const arr = [];
for (let i = 0; arr.length < 5; arr[i++] = i - 1);
*/

/*
! Async Loop

const p1 = new Promise((res) => {
  setTimeout(() => {
    res("1");
  }, 500);
});

const p2 = new Promise((res) => {
  setTimeout(() => {
    res("2");
  }, 1550);
});

const data = [p1, p2];

async function getData() {
  for await (val of data) {
    console.log(val);
  }
}

getData();
*/

/*
! With
? Создаем область видимости из объекта

const obj = {
  name: "Alex",
  age: 43,
  isAuth: true,
};

with (obj) {
  console.log(name);
}
*/

//! "use strict";

/*
? With - запрещен

with ({});

? Все переменные должны быть объявлены

x = 5;

? This в функциях будет undefined, а не window

function strict() {
  return this;
}

? Изменение arguments не влияет на аргументы функции

function args(a, b) {
  arguments[0] = 50;
  console.log(a);
}

? Нельзя использовать одинаковые имена аргументов в функции

function test(a, a, a) {}

? Нельзя смотреть откуда был вызов функции и стек

function test() {
  console.log(arguments.callee);
}
*/
