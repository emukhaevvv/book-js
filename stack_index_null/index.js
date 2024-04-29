class Stack {
  constructor(size) {
    this.stack = new Array(size);
    this.max = size;
    this.size = -1;
  }

  isEmpty() {
    return this.size === -1;
  }

  isFull() {
    return this.max - 1 === this.size;
  }

  push(val) {
    if (this.isFull()) return;

    this.size += 1;

    for (let i = this.size; i > 0; i--) {
      this.stack[i] = this.stack[i - 1];
    }

    this.stack[0] = val;
  }
}

const s = new Stack(4);
