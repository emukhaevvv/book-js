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

  pop() {
    if (this.size === -1) return;

    const val = this.stack[this.size];

    this.stack[this.size] = undefined;
    this.size -= 1;

    return val;
  }
}

const s = new Stack(4);
