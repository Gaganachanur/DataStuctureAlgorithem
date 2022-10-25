/*Given a singly linked list of characters,
write a function that returns true if the given list is a palindrome,
else false.

K - A - N - A - K*/
function node(value) {
    this.value=value;
    this.next=null;
    this.prev=prev;

}
function List(){
    this.head=null;
    this.tail=null;
    this.print=print;
}
function print() {
    console.log(this.head.value);
    console.log(this.tail.prev);

}

let list=new List();
list.head=new node(1);
list.head.next=new node(2);
list.head.next.next=new node(2);
list.head.next.next.next=new node(1);

list.print();