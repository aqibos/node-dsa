module.exports = function Stack() {

  let _top = -1;
  let _data = [];

  return { push, pop, peek, size, isEmpty };

  function push(data) {
    _data[_top++] = data;
  }

  function pop() {
    if (_top === -1) throw new Error('Stack is empty');

    return _data[_top--];
  }

  function peek() {
    return _data[_top];
  }

  function isEmpty() { return _top === -1; }

  function size() { return _top + 1; }

};