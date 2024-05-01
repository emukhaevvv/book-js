class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class QueueLinked {
  constructor() {
    this.front = null;
    this.back = null;
  }

  add(val) {
    const node = new Node(val);

    if (this.checkIsEmpty()) {
      this.front = node;
      this.back = node;
      node.next = this.front;
    } else {
      this.back.next = node;
      this.back = this.back.next;
      this.back.next = this.front;
    }
  }

  remove() {
    if (this.checkIsEmpty()) return;

    if (this.back === this.front) {
      this.front = null;
      this.back = null;
    } else {
      this.front = this.front.next;
      this.back.next = this.front;
    }
  }

  checkIsEmpty() {
    return !this.front && !this.back;
  }
}

const q = new QueueLinked();
