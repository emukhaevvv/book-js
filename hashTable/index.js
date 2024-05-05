class HashTable {
  constructor() {
    this.size = 10;
    this.hash = new Array(this.size);
  }

  getHash(key) {
    let result = 0;

    for (let i = 0; i < key.length; i++) {
      result += key.charCodeAt(i);
    }

    return result % this.size;
  }

  add(key, value) {
    key = key.toString();
    const hash = this.getHash(key);

    if (!this.hash[hash]) {
      this.hash[hash] = [[key, value]];
    } else {
      let isFinded = false;

      for (let i = 0; i < this.hash[hash].length; i++) {
        let res = this.hash[hash][i];

        if (res[0] === key) {
          res[1] = value;
          isFinded = true;
        }
      }

      if (!isFinded) {
        this.hash[hash].push([key, value]);
      }
    }
  }
}

const obj = new HashTable();
