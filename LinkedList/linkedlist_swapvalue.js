/*Given a linked list and two keys in it, swap nodes for two given keys.
Nodes should be swapped by changing links. Swapping data of nodes may be expensive in many situations when data contains many fields.
It may be assumed that all keys in the linked list are distinct.
Examples:
Input : 10->15->12->13->20->14,  x = 12, y = 20
Output: 10->15->20->13->12->14

Input : 10->15->12->13->20->14,  x = 10, y = 20
Output: 20->15->12->13->10->14

Input : 10->15->12->13->20->14,  x = 12, y = 13
Output: 10->15->13->12->20->14
*/
function node(value)
{
    this.value=value;
    this.next=null;
}

function LinkedList()
{
    this.head=null;
    this.swap=swap;
}

 function swap(x,y)
 {
     let current=this.head;
     while(current !=null)
     {
         if(current.value==x)
         {
             current.value=y;
         }else if(current.value==y)
         {
             current.value=x;
         }
         console.log(current.value)
         current=current.next
     }

 }

let list =new LinkedList()
list.head=new node(10);
list.head.next=new node(15);
list.head.next.next=new node(12);
list.head.next.next.next=new node(13);
list.head.next.next.next.next=new node(20);
list.head.next.next.next.next.next=new node(14);

list.swap(12,13);