module.exports = function Stack() {
  let _top = -1;
  let _data = [];

  const isEmpty = () => _top === -1;
  const throwError = err => { throw new Error(err); };

  return {
    push: d => { _data[_top++] = d; },
    pop: () => isEmpty() ? throwError('Stack is empty') : _data[_top--],
    peek: () => _data[_top],
    size: () => _top + 1,
    isEmpty
  };
};