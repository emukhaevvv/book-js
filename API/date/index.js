// Пример даты
const primer1 = new Date(2022, 1, 8, 12, 31);
// Дата в UTC
const primer2 = new Date(Date.UTC(2022, 1, 8, 12, 31));
// UTC/ISO строка
primer1.toISOString();
primer2.toUTCString();
