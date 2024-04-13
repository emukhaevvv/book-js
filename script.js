class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
    this._empty = true;
  }

  push_front(val) {
    this._size += 1;
    this._empty = false;

    const node = new Node(val);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  pop_front() {
    if (this.head === null) return;

    if (this.head.next === null) {
      this.head = null;
      this.tail = null;

      this._size = 0;
      this._empty = true;
    } else {
      this._size -= 1;

      this.head = this.head.next;
    }
  }

  push_back(value) {
    const node = new Node(value);

    this._size += 1;

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  pop_back() {
    if (this.tail === null) return;

    this._size -= 1;

    if (!this.head.next) {
      this.head = null;
      this.tail = null;

      this._empty = true;
      return;
    }

    let prevNode = null;
    let curNode = this.head;

    while (curNode.next) {
      prevNode = curNode;
      curNode = curNode.next;
    }

    prevNode.next = null;
    this.tail = prevNode;
  }

  size() {
    return this._size;
  }

  empty() {
    return this._empty;
  }

  front() {
    return this.head.val;
  }

  back() {
    return this.tail.val;
  }
}

const list = new LinkedList();

list.push_front(5);
list.push_front(9);

list.push_back(5);
list.push_back(7);

list.pop_back();
list.pop_back();
list.pop_back();
list.pop_back();
