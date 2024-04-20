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
}

const list = new LinkedList();
