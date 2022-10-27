class DynamicArray {

  constructor(defaultSize=4) {
    this.capacity = defaultSize;
    this.length = 0;
    this.data = new Array(this.capacity)

  }

  read(index) {
    return this.data[index];
  }

  push(val) {
    if (this.length === this.capacity) this.resize();
    this.length++;
    this.data[this.length - 1] = val;
  }

  pop() {
    let pop = this.data[this.length - 1];
    this.length--;
    let value = (this.capacity - this.length)
    this.data.length-= value;
    this.data.length+= value;
    return pop;
  }

  shift() {
    let shift = this.data[0];
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.length--;
    let value = (this.capacity - this.length)
    this.data.length-= value;
    this.data.length+= value;
    return shift;
  }

  unshift(val) {
    if (this.length === this.capacity) this.resize();
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.length++;
    this.data[0] = val;
  }

  indexOf (val) {
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === val) return i;
    }
    return -1;
  }

  resize () {
    this.capacity *= 2;
    this.data.length = this.capacity;
  }

}



module.exports = DynamicArray;
