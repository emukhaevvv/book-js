// Глубокое копирование
const data = [
  [1, 2],
  [3, [4]],
];

const dataObject = { name: "vova", age: 20 };

function copy(d) {
  const js = JSON.stringify(d);
  return JSON.parse(js);
}

const d1 = copy(dataObject);
JSON.stringify(data, null, 6);

// Замена и фильтрация данных
const data1 = {
  city: "dmitrov",
  address: "Molod",
  state: "llol",
  country: "Russia",
};

const t = JSON.stringify(data1, ["state", "country", "city", "address"]);
