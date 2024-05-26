function init() {
  let x = 0;
  let y = 0;

  let doubledX = 0;
  let doubledY = 0;

  const orButton = document.querySelector("#orButton");
  const andButton = document.querySelector("#andButton");
  const deleteButton = document.querySelector("#deleteButton");

  const inputX = document.querySelector("#inputX");
  const inputY = document.querySelector("#inputY");

  const resultX = document.querySelector("#resultX");
  const resultY = document.querySelector("#resultY");

  const result = document.querySelector("#result");

  inputX.addEventListener("input", (e) => {
    let value = +e.target.value;

    x = value;
    doubledX = value.toString(2);

    resultX.textContent = doubledX;
  });

  inputY.addEventListener("input", (e) => {
    let value = +e.target.value;

    y = value;
    doubledY = value.toString(2);

    resultY.textContent = doubledY;
  });

  orButton.addEventListener("click", () => {
    result.textContent = `${(x | y).toString(2)}, ${x | y}`;
  });

  andButton.addEventListener("click", () => {
    result.textContent = (x & y).toString(2);
  });

  deleteButton.addEventListener("click", () => {
    result.textContent = (x ^ y).toString(2);
  });
}

window.addEventListener("load", init);
