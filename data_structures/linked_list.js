const Node = require('./node');

function LinkedList() {

  let _size = 0;
  let _head = null;

  return {
    insert, insertAt, insertBeginning,
    remove, removeAt, removeBeginning,
    size, toString, toArray
  };

  // Adds to end of list
  function insert(data) {
    const newNode = Node(data);
    _size === 0 ? setHead(newNode) : addToEnd(newNode);
    _size++;
  }

  function insertAt(index, data) {
    if (index < 0 || index > _size) throw new Error('Index is out of bounds');

    const newNode = Node(data);
    if (index === 0) { newNode.next = _head; _head = newNode; _size++; return; }

    let n = _head; let count = 0;
    while (count !== index - 1) { n = n.next; count++; }
    newNode.next = n.next;
    n.next = newNode;
    _size++;
  }

  function insertBeginning(data) {
    const newNode = Node(data);
    newNode.next = _head;
    setHead(newNode);
    _size++;
  }

  // remove first occurrence
  function remove(data) {
    if (_head.data === data) { _head = _head.next; _size--; return; }

    let n = _head;
    while (n.next !== null) {
      if (n.next.data === data) { n.next = n.next.next; _size--; return; }
      n = n.next;
    }
  }

  function removeAt(index) {
    if (index > _size) throw new Error('Index is out of bounds');
    if (_size === 0) throw new Error('List is empty');

    if (index === 0) { setHead(_head.next); _size--; return; }

    let n = _head; let count = 0;
    while (count !== index - 1) { n = n.next; count++; }
    n.next = n.next.next;
    _size--;
  }

  function removeBeginning() {
    if (_size === 0) throw new Error('List is empty');

    _head = _head.next;
    _size--;
  }

  function size() { return _size; }

  function setHead(newNode) { _head = newNode; }

  function addToEnd(newNode) {
    let n = _head;
    while (n.next !== null) n = n.next;
    n.next = newNode;
  }

  function toString() {
    let str = '[ ';
    let n = _head;
    while (n !== null) {
      str += n.data + ', ';
      n = n.next;
    }
    return str.slice(0, -2) + ' ]';
  }

  function toArray() {
    const arr = [];
    let n = _head;
    while (n !== null) {
      arr.push(n.data);
      n = n.next;
    }
    return arr;
  }
}

module.exports = LinkedList;