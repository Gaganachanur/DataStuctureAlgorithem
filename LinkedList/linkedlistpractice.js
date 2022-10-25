
/*Given a singly linked list, find the middle of the linked list. For example,
if the given linked list is 1->2->3->4->5 then the output should be 3. If there are even nodes,
then there would be two middle nodes, we need to print the second middle element. For example,
if given linked list is 1->2->3->4->5->6 then output should be 4.*/

function node(value)
{
    this.value=value;
    this.next=null;
}

function List() {

    this.findMid = findMid;
    this.head = null;
}
function findMid() {
    let count=0;
    let temp=1;
    let g=this.head;

    while(g)
    {
        count++;
        g=g.next;
    }
    if(count%2==0)
    {
        count=Math.ceil(count/2);
        g=this.head;
        while(g !=null && temp<count+1 )
        {
            g=g.next;
            temp++;
        }
        return g.value;

    }
    else
    {
        count=count/2;
        g=this.head;
        while(g !=null && temp<count )
        {
            g=g.next;
            temp++;
        }
        return g.value;

    }
}

let list =new List()
list.head=new node(1)
list.head.next=new node(2)
list.head.next.next=new node(3)
list.head.next.next.next=new node(4)
list.head.next.next.next.next=new node(5)
list.head.next.next.next.next.next=new node(6)
list.head.next.next.next.next.next.next=new node(7)
list.head.next.next.next.next.next.next.next=new node(8)
console.log(list.findMid())