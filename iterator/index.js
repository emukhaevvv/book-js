class Mapper {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  [Symbol.iterator]() {
    let started = this.from;
    let end = this.to;

    return {
      next() {
        started += 1;

        return {
          value: started,
          done: started === end,
        };
      },
    };
  }
}

const m = new Mapper(5, 19);

function map(r, f) {
  let t = r[Symbol.iterator];

  return {
    [Symbol.iterator]() {
      let x = t.call(r);

      return {
        next() {
          let y = x.next();
          return { value: f(y.value), done: y.done };
        },
      };
    },
  };
}

console.log(...map(m, (x) => x ** 2));
