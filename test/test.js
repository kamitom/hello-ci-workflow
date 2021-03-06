// test/test.js
var assert = require("assert")

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      // assert.equal(-1, [1, 2, 3].indexOf(0)); // 可通過測試
      // assert.equal(-1, [1, 2, 3].indexOf(1));  // 測試失敗
      // assert.equal(3, [1, 2, 3].indexOf(5)); // 加入錯誤的測試
      assert.equal(-1, [1, 2, 3].indexOf(5)); // 加入 正確的測試

    })
  })
})
