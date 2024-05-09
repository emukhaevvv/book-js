class Hash {
  constructor(size) {
    this.size = size;
    this.hash = new Array(size);
  }

  hashKey(key) {
    let result = 0;

    for (let i = 0; i < result.length; i++) {
      result += key.charCodeAt(i);
    }

    return result % this.size;
  }

  add(key, value) {
    const hashed = this.hashKey(key);

    let first = null;
    let isFinded = false;

    if (!this.hash[hashed]) {
      this.hash[hashed] = [[key, value]];
      isFinded = true;
    } else {
      for (let i = 0; i < this.hash[hashed].length; i++) {
        if (this.hash[hashed][i][0] === key) {
          this.hash[hashed][i][1] = value;
          isFinded = true;
          break;
        }

        if (this.hash[hashed][i][0] === null && !first) {
          first = this.hash[hashed][i];
        }
      }
    }

    if (!isFinded) {
      if (first) {
        first[0] = key;
        first[1] = value;
      } else {
        this.hash[hashed].push([key, value]);
      }
    }
  }

  remove(key) {
    const hashed = this.hashKey(key);

    if (!this.hash[hashed]) return;

    for (let i = 0; i < this.hash[hashed].length; i++) {
      if (this.hash[hashed][i][0] === key) {
        this.hash[hashed][i][0] = null;
        this.hash[hashed][i][1] = null;
      }
    }
  }

  get(key) {
    const hashed = this.hashKey(key);

    if (!this.hash[hashed]) return;

    for (let i = 0; i < this.hash[hashed].length; i++) {
      if (this.hash[hashed][i][0] === key) {
        return this.hash[hashed][i][1];
      }
    }

    return;
  }

  exists(key) {
    const hashed = this.hashKey(key);

    if (!this.hash[hashed]) return false;

    for (let i = 0; i < this.hash[hashed].length; i++) {
      if (this.hash[hashed][i][0] === key) {
        return true;
      }
    }

    return false;
  }
}

const hash = new Hash(2);
