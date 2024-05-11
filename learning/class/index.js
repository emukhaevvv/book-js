//? Класс под капотом

/*
function user(name, age) {
  const data = Object.create(user.methods);

  data.name = name;
  data.age = age;

  return data;
}

user.methods = {
  getData() {
    console.log(`Name: ${this.name}, age: ${this.age}`);
  },
};

const u = user("Vova", 34);
u.getData();
*/

//? Класс через new Func()

/*
function User(name, age) {
  this.name = name;
  this.age = age;

  if (!new.target) {
    return new User("Vova", 36);
  }
}

User.prototype = {
  getName() {
    console.log(`Name: ${this.name}, age: ${this.age}`);
  },
};

const u = new User("Vova", 34);
u.getName();

*/

//? Static, Private

/*
class Range {
  #value = 50;

  static getValue() {
    return 20 + 20;
  }

  constructor() {
    this.to = 50;
  }
}
*/
