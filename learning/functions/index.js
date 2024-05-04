//? IIFE

/*
(function () {
  console.log("q");
})();
*/

//? Методы
/*
function argsLength(a, b, c) {}
const len = argsLength.length;
const name = argsLength.name;
*/

//? Bind
/*
const o = {
  x: 12,
};

const o2 = {
  x: 15,
  y: 23,
};

const func2 = function (y) {
  return this.x + y;
};

const func = function (x, y) {
  return x + y;
};

Частичное применение
const x = func.bind(null, 1);
const boundName = x.name;

This не поменяется
const y = func2.bind(o);
o2.getRes = y;

Можно делать частичное применение
const arrowFunc = (a, b) => a + b;
const xArrow = arrowFunc.bind(null, 4);
*/

//? new Function
/*
const x = 10;

function func() {
  const x = 20;
  const test = new Function("y", "return x + y;"); 
}
*/

//? Функциональное программирование

/*
const compose = (f, g) => {
  return function (...args) {
    return f(g.apply(this, args));
  };
};
*/

//? Мемоизация

/*
const memo = (f) => {
  const cache = new Map();

  return function (...args) {
    const key = `${args.length}${args.join("")}`;

    if (!cache.has(key)) {
      const result = f(...args);
      cache.set(key, result);
    }

    return cache.get(key);
  };
};
*/
