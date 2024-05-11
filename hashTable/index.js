class Node {
  constructor(key, value) {
    this.value = value;
    this.key = key;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
  }

  push(key, value) {
    this.size += 1;
    let isFinded = false;

    const node = new Node(key, value);

    if (!this.head) {
      this.head = node;
      isFinded = true;
    } else {
      let cur = this.head;
      let prev = null;

      while (cur) {
        if (key === cur.key) {
          isFinded = true;
          cur.value = value;
        }

        prev = cur;
        cur = cur.next;
      }

      if (!isFinded) {
        prev.next = node;
      }
    }

    return isFinded;
  }
}

class HashTable {
  constructor(max) {
    this.max = max;
    this.size = 0;
    this.hash = new Array(max);
  }

  updateHashTable() {
    this.max *= 2;

    const temp = this.hash;

    this.hash = new Array(this.max);
    this.size = 0;

    for (let i = 0; i < temp.length; i++) {
      let hashValue = temp[i];

      if (hashValue) {
        let cur = hashValue.head;

        while (cur) {
          this.add(cur.key, cur.value);
          cur = cur.next;
        }
      }
    }
  }

  add(key, value) {
    if (this.size === this.max) {
      this.updateHashTable();
    }

    const hashed = this.hashKey(key);

    if (!this.hash[hashed]) {
      this.hash[hashed] = new LinkedList();
    }

    let isExist = this.hash[hashed].push(key, value);
    if (isExist) this.size += 1;
  }

  remove(key) {
    const hashed = this.hashKey(key);

    if (this.hash[hashed]) {
      let cur = this.hash[hashed].head;
      let prev = null;

      while (cur) {
        if (cur.key === key) {
          if (!prev) {
            if (cur) {
              this.hash[hashed].head = cur.next || null;
            } else {
              this.hash[hashed].head = null;
            }
          } else {
            prev.next = cur.next || null;
          }
          break;
        }

        prev = cur;
        cur = cur.next;
      }

      this.hash[hashed].size -= 1;
      this.size -= 1;
    }
  }

  hashKey(key) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }

    return hash % this.max;
  }
}

const obj = new HashTable(2);
