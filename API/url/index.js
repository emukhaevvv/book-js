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

// Унаследованные функции для работы с URL

const urlDecode =
  "http://username:password@www.example.com:80/path/to/file.php?foo=316&bar=this+has+spaces#anchor";

console.log(encodeURI(urlDecode));
console.log(encodeURIComponent(urlDecode));
console.log(decodeURI("%25"));
console.log(decodeURIComponent("%25"));
