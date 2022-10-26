/*Given a singly linked list of characters,
write a function that returns true if the given list is a palindrome,
else false.

K - A - N - A - K*/
function node(data) {
  this.data = data;
  this.next = null;
}
function List() {
  this.head = null;
  this.print = print;
}
function print() {
  let temp = this.head;
  let current = this.head;
  let arr = [];

  while (temp) {
    arr.push(temp.data);
    temp = temp.next;
  }

  while (current) {
    if (current.data !== arr.pop()) {
      return false;
      break;
    }
    current = current.next;
  }
  return true;
}

let list = new List();
list.head = new node(1);
list.head.next = new node(2);
list.head.next.next = new node(2);
list.head.next.next.next = new node(1);
//list.head.next.next.next.next = new node(3);

console.log(list.print());
