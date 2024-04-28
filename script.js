// const x = Array.of(2);
// const x = Array.from("1234", (v) => v + "2");

/*
! Length
const a = [1, 2, 3, 4, 5];
a.length = 2;
*/

/*
const array = [1, 2, undefined, undefined, 34];

const obj = {
  name: "peter",
};

array.forEach(function (item, index, arr) {
  console.log(this);
}, obj);
*/

/*
const arr = [4, 2, 7, [9], [1], 0];

const flatted = arr.flat();
const flattMapped = arr.flatMap((x) => x + ": number");

const spliced = [1, 2, 3, 4, 5];
spliced.splice(2, 1); // 1,2,4,5;

const sliced = spliced.slice(0, 1);
spliced.fill(9, 1, 3 );
*/

/*
const arr = ["ПН", "ВТ", "СР", "ЧТ", "ПТ"];
arr.copyWithin(3, 0, 2);
*/

/*
const arr = [5, 4, 8, 2, 0, 1];
arr.sort((a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
});
*/
