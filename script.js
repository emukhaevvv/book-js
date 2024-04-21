class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.size = 0;
    this.empty = true;
    this.head = null;
    this.tail = null;
  }

  pushFront(value) {
    const node = new Node(value, null);

    if (this.empty) {
      this.head = node;
      this.tail = node;

      this.empty = false;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.size += 1;
  }

  popFront() {
    if (this.empty) return;

    if (!this.head.next) {
      this.head = null;
      this.tail = null;

      this.empty = true;
    } else {
      this.head = this.head.next;
    }

    this.size -= 1;
  }

  pushBack(value) {
    const node = new Node(value, null);

    if (this.empty) {
      this.head = node;
      this.tail = node;

      this.empty = false;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.size += 1;
  }

  popBack() {
    if (this.empty) return;

    if (this.size === 1) {
      this.head = null;
      this.tail = null;

      this.empty = true;
    } else {
      let node = this.head;
      let prevNode = null;

      while (node.next) {
        prevNode = node;
        node = node.next;
      }

      prevNode.next = null;
      this.tail = prevNode;
    }

    this.size -= 1;
  }

  valueAt(index) {
    if (this.empty || index > this.size - 1) return -1;

    let node = this.head;
    let i = 0;

    while (i !== index) {
      node = node.next;
      i++;
    }

    return node.value;
  }

  insert(index, value) {
    if (index === 0) {
      this.pushFront(value);
      return;
    }

    if (index > this.size - 1 || index < 0) return;

    let i = 0;
    let newNode = new Node(value, null);

    let node = this.head;
    let prevNode = null;

    while (i < index) {
      prevNode = node;
      node = node.next;

      i++;
    }

    prevNode.next = newNode;
    newNode.next = node;
  }

  erase(index) {
    if (index < 0 || index > this.size - 1 || this.size === 0) return;

    if (index === 0) {
      this.popFront();
      return;
    } else if (index === this.size - 1) {
      this.popBack();
      return;
    }

    let node = this.head;
    let prev = null;

    let i = 0;

    while (i !== index) {
      prev = node;
      node = node.next;

      i++;
    }

    prev.next = node.next;
    this.size -= 1;
  }
}

const list = new LinkedList();
