const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  depth = 1;
  maxDepth = 1;
  calculateDepth(arr, cleanMaxDepth = true) {
    if (cleanMaxDepth) {
      this.maxDepth = 1;
    }
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        this.depth ++;
        this.calculateDepth(item, false)
      }
    })
    this.maxDepth = Math.max(this.depth, this.maxDepth);
    this.depth = 1;
    return this.maxDepth;
  }
}

module.exports = {
  DepthCalculator
};
