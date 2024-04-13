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

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  pop_front() {
    if (!this.head) return;

    if (!this.head.next) {
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

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  pop_back() {
    if (!this.tail) return;

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

  insert(index, value) {
    if (!this.head || index - 1 > this._size) return;

    if (index === 0) {
      this.push_front(value);
      return;
    } else if (index === this._size) {
      this.pop_back(value);
      return;
    }

    let i = 0;
    let prevNode = null;
    let curNode = this.head;

    while (curNode) {
      if (i === index) {
        const node = new Node(value);
        node.next = curNode;
        prevNode.next = node;

        return;
      }

      i += 1;
      prevNode = curNode;
      curNode = curNode.next;
    }
  }

  earse(index) {
    if (index < 0 || index - 1 > this._size) return;

    if (index === 0) {
      this.pop_front();
      return;
    } else if (index - 1 === this._size) {
      this.pop_back();
      return;
    }

    let prevNode = null;
    let curNode = this.head;

    let i = 0;

    while (curNode) {
      if (index === i) {
        prevNode.next = curNode.next;
        return;
      }

      i++;
      prevNode = curNode;
      curNode = curNode.next;
    }
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

list.insert(2, 98);
list.earse(4);
list.earse(4);
