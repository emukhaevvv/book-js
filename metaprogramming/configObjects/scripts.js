/*
const o = { x: 1 };
Object.defineProperties(o, {
  x: {
    writable: false,
    configurable: false,
  },
  y: {
    writable: true,
  },
});
Object.defineProperty(o, "x", { value: 23 });
*/

/*
const o2 = { x: 5 };
const o3 = { x: 5 };
const o4 = { x: 5 };

Object.preventExtensions(o2);
o2.y = 5;
let isExt = Object.isExtensible(o2);

Object.seal(o3);
Object.freeze(o4);

Object.isSealed(o3);
Object.isFrozen(o4);
*/
