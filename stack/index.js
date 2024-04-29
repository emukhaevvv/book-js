class Stack {
  constructor(size) {
    this.stack = new Array(size);
    this.max = size;
    this.size = -1;
  }

  push(val) {
    if (this.max - 1 === this.size) {
      return;
    }

    this.size += 1;
    this.stack[this.size] = val;
  }
}

const s = new Stack(4);
