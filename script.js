/*
! Object create
const user = Object.create(null);
const calc = Object.create({
  sum: (a, b) => {
    return a + b;
  },
});
*/

/*
const o = { x: 1, y: 5, z: 20 };
const o2 = Object.create(o);
*/

/*
let x = "x" in o2;
let y = o2.hasOwnProperty("x");
let z = o2.propertyIsEnumerable("x");
*/

/*
! Get/Set
const obj = {
  _x: 100,
  _y: 200,
  get x() {
    return this._x;
  },
  set x(value) {
    this._x = value;
  },
  get y() {
    return this._y;
  },
};

obj._x = 228;
*/
