/*
Given pointer to the head node of a linked list, the task is to reverse the linked list.
 We need to reverse the list by changing the links between nodes.
 Examples:
Input: Head of following linked list 1->2->3->4->NULL
Output: Linked list should be changed to, 4->3->2->1->NULL*/

function node(value) {
    this.value=value;
    this.next=null;
}

function List() {
    this.head=null;

    this.print=print;
    this.reverse=reverse;
}
function  print()
{
    let current =this.head;

    while(current !=null)
    {
        console.log(current.value)
        current=current.next;
    }
}
function reverse()
{
    let prev=null,next=null;
    let curr=this.head;
    while(curr) {
        next = curr.next;
        curr.next = prev//reverse the next pointer
        prev = curr;
        curr = next;
    }
        this.head=prev;
}

let list= new List();
list.head=new  node(1);
list.head.next=new node(2);
list.head.next.next=new node(3);
list.head.next.next.next=new node(4);

list.print();//before
list.reverse()//reversing operation
console.log("after the reversed Linked List")
list.print();//after the reversed Linked List


