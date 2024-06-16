const url = new URL(
  "https://hh.ru/vacancy/101630977?hhtmFrom=vacancy_search_list"
);

const search = new URLSearchParams();

search.set("value", "age");
search.set("from", "math");

console.log(url.href);
console.log(url.protocol);
console.log(url.host);
console.log(url.port);
console.log(url.pathname);

url.search = search;

console.log(url.search);
console.log(url.href);
