let count = 0;

function counter() {
  count += 1;
  console.log(count);
}

let t = setInterval(counter, 1000);

setTimeout(() => {
  clearInterval(t);
}, 5000);
