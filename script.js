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
}

const list = new LinkedList();

list.pushFront(59);
list.pushFront(22);
