
var MinStack = function () {
  this.xStack = []
  this.minStack = [Infinity]
};

/** 
 * @param {number} value
 * @return {void}
 */
MinStack.prototype.push = function (value) {
  this.xStack.push(value)
  this.minStack.push(Math.min(this.minStack[this.minStack.length - 1], value))
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.xStack.pop()
  this.minStack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.xStack[this.xStack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */