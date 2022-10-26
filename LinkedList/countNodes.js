function Node(val) {
  this.val = val;
  this.next = null;
}

function List() {
  this.head = null;
  this.countNodes = countNodes;
}

function countNodes() {
  let current = this.head;
  let count = 0;
  while (current) {
    count++;
    current = current.next;
  }
  return count;
}

let list = new List();
list.head = new Node(1);
list.head.next = new Node(2);
list.head.next.next = new Node(3);
list.head.next.next.next = new Node(4)

console.log(list.countNodes());
