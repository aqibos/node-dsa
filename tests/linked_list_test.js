const LinkedList = require('../data_structures/linked_list');
const chai = require('chai');
const assert = chai.assert;
const expect = require('expect.js');

describe('LinkedList Test', function() {

  let list;
  beforeEach(function() {
    list = LinkedList();
  });

  describe('insert(:data)', function() {
    it('inserts node to empty list', function() {
      list.insert(1);
      assert(1, list.size());
      assert(list.toArray().includes(1), true);
    });

    it('inserts node at end of existing list', function() {
      [1, 2].map(list.insert);
      assert(2, list.size());
      assert.equal(list.toArray()[1], 2);
      assert(list.toArray().includes(2), true);
    });
  });

  describe('insertAt(:index, :data)', function() {
    it('inserts node as head', function() {
      list.insert(1);
      list.insertAt(0, 2);
      assert.equal(list.toArray()[0], 2);
      assert.equal(list.size(), 2);
    });

    it('inserts node as tail', function() {
      list.insert(1);
      list.insertAt(1, 2);
      assert.equal(list.toArray()[1], 2);
    });

    it('inserts node at given index', function() {
      const index = 1;
      list.insert(1);
      list.insert(2);
      list.insertAt(index, 3);
      assert.equal(list.size(), 3);
      assert.equal(list.toArray()[index], 3);
    });

    it('throws error for invalid index', function() {
      expect(() => list.insertAt(-1, 1)).to.throwError();
    });
  });

  describe('insertBeginning(:data)', function() {
    it('inserts at beginning of empty list', function() {
      list.insertBeginning(1);
      assert.equal(list.toArray()[0], 1);
    });

    it('inserts at beginning of filled list', function() {
      list.insert(1);
      list.insertBeginning(2);
      assert.equal(list.toArray()[0], 2);
    });
  });

  describe('remove(:data)', function() {
    it('removes first occurrence of data', function() {
      [3, 3, 3].map(list.insert);
      list.remove(3);
      assert.equal(list.size(), 2);
    });

    it('removes matching head', function() {
      [3, 4, 5].map(list.insert);
      list.remove(3);
      assert.equal(2, list.size());
      assert.equal(list.toArray()[0], 4);
    });

    it('removes matching tail', function() {
      [3, 4, 5].map(list.insert);
      list.remove(5);
      assert.equal(2, list.size());
      assert.equal(list.toArray()[list.size() - 1], 4);
    });

    it('does not remove on unmatched data', function() {
      [3, 4, 5].map(list.insert);
      list.remove(6);
      assert.equal(list.size(), 3);
    });
  });

  describe('removeAt(:index)', function() {
    it('removes head', function() {
      [3, 4, 5].map(list.insert);
      list.removeAt(0);
      assert.equal(list.size(),  2);
      assert.equal(list.toArray()[0], 4);
    });

    it('removes tail', function() {
      [3, 4, 5].map(list.insert);
      list.removeAt(2);
      assert.equal(list.size(), 2);
      assert.equal(list.toArray().includes(5), false);
    });

    it('removes given index', function() {
      [3, 4, 5].map(list.insert);
      list.removeAt(1);
      assert.equal(list.size(), 2);
      assert.equal(list.toArray().includes(4), false);
    });

    it('throws error on invalid index', function() {
      [3, 4, 5].map(list.insert);
      expect(() => list.removeAt(3)).to.throwError();
    });
  });

  describe('removeBeginning()', function() {
    it('throws error for empty list', function() {
      expect(() => list.removeBeginning()).to.throwError();
    });

    it('removes head for filled list', function() {
      [3, 4, 5].map(list.insert);
      list.removeBeginning();
      assert.equal(list.size(), 2);
      assert.equal(list.toArray()[0], 4);
    });
  });

  describe('size()', function() {
    it('returns zero for empty list', function() {
      assert.equal(0, list.size());
    });

    it('returns correct size after insertions', function() {
      [1, 2, 3].map(list.insert);
      assert.equal(list.size(), 3);
    });

    it('returns correct size after removals', function() {
      [1, 2, 3].map(list.insert);
      [1, 2].map(list.remove);
      assert.equal(list.size(), 1);
    });
  });
});