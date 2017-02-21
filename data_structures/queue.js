module.exports = function Queue() {

  let _size = 0;
  let _data = [];

  return {
    enqueue, dequeue,
    isEmpty: () => _size === 0,
    size: () => _size
  };

  function enqueue(data) {
    _data.push(data);
    _size++;
  }

  function dequeue() {
    _size--;
    return _data.shift();
  }
};
