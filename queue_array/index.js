class Queue {
  constructor(max) {
    this.q = new Array(max);
    this.max = max;
    this.size = 0;
    this.p = -1;
    this.head = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  isFull() {
    return this.p === this.max - 1;
  }

  enqueue(val) {
    if (this.isFull()) {
      this.p = 0;
    } else {
      this.p += 1;
    }

    if (this.size <= this.max - 1) {
      this.size += 1;
    }

    this.q[this.p] = val;
  }

  dequeue() {
    if (this.isEmpty()) return;

    this.q[this.head] = 0;

    if (this.head === this.max - 1) {
      this.head = 0;
    } else {
      this.head += 1;
    }

    this.size -= 1;
  }
}

const queue = new Queue(4);
