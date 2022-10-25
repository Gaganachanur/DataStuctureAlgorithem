/*
Given a singly linked list, rotate the linked list counter-clockwise by k nodes. Where k is a given positive integer.

For example, if the given linked list is 10->20->30->40->50->60 and k is 4, the list should be modified to 50->60->10->20->30->40.

*/

function node(value)
{
    this.value=value;
    this.next=null;
}

function LinkedList()
{
    this.head=null;
    this.length=0;
    this.findlength=findlength;
    this.circle=circle;

}
function findlength()
{

    let current=this.head;
    while( current !=null)
    {
        this.length =this.length+1;
        current =current.next;
    }
console.log(`length of the linkedlist ${this.length}`)
}
function circle(k) {
    let i=0;
    let current=this.head;
    let prevhead=this.head;
    while(current !=null && i<k)
    {
        current=current.next;
        i++;
    }
    this.head=current;
    console.log(`current head value ${this.head.value}`)
    console.log(`previous head value ${prevhead.value}`)
    i=0;
    current=this.head;
    while( this.length>i)
    {
        if(current ==null)
        {
                  current=new node(prevhead.value);
                  prevhead=prevhead.next;
        }
        console.log(current.value)
        current=current.next;
        i=i+1;
    }

}

let list =new LinkedList()
list.head=new node(10);
list.head.next=new node(20);
list.head.next.next=new node(30);
list.head.next.next.next=new node(40);
list.head.next.next.next.next=new node(50);
list.head.next.next.next.next.next=new node(60);
//list.head.next.next.next.next.next.next=new node(70);

list.findlength()
list.circle(4);
