class Queue {
  constructor(size) {
    this.max = size;
    this.size = 0;
    this.arr = new Array(size);
    this.front = -1;
    this.back = -1;
  }

  add(val) {
    if (this.size === this.max) return;

    this.size += 1;

    if (this.back === this.max - 1) {
      this.back = 0;
    } else {
      this.back += 1;
    }

    this.arr[this.back] = val;

    return this;
  }

  remove() {
    if (this.size === 0) return;

    this.size -= 1;

    if (this.front === this.max - 1) {
      this.front = 0;
    } else {
      this.front += 1;
    }

    this.arr[this.front] = -1;

    return this;
  }
}

const q = new Queue(4);
