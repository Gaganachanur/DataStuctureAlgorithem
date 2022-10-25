/*
Write a function that takes a linked list and an integer index and
 returns the data value stored in the node at that index position.
Example: Input:  1->10->30->14,  index = 2 Output: 30  The node at index 2 is 30*/

 function node(value) {
     this.next=null;
     this.value=value;
 }

 function List()
 {
  this.head=null;
  this.size=size;
 }

//finding length of the linked list
 function size()
 {
  let k=this.head;
  let length=0;
  while(k)
   {
    length++;
    k=k.next;
   }
   return length;
 }

 //find the element in index position
 function index(post) {

  if (post < 0) {
   return "invalid";
  }

  let g = list.head;
  for (let i = 0; i <post; i++) {
   if (g != null) {
    g = g.next;
   }else
   {
    return "invalid index"
   }

  }
  return g.value;
 }
 
let list=new List();
list.head=new node(1);
list.head.next=new node(10);
list.head.next.next=new node(30);
list.head.next.next.next=new node(14);
console.log("length of the list")
console.log(list.size())
console.log("element at the index" )
console.log(index(2))