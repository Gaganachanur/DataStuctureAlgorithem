
function node(val) {
    this.val=val;
    this.next=null;

}
function LinkedList() {
    this.head=null;
    this.database=null;
    this.sortList=sortList;
    this.printList=printList;

}
function sortList(head)
{

    let cur=head;
    while(cur.next !=null)
    {
        if(cur.val != cur.next.val)
        {
           // console.log(cur.val)
            list.database=new node(cur.val);
            //console.log(list.database.val)
            list.database=list.database.next;

        }

        cur=cur.next;
    }
    return this.database
}
function printList(header)
{
    let peace=header;
    while(peace !=null)
    {
        console.log(peace.val)
        peace=peace.next
    }

}



let list=new LinkedList();
list.head=new node(1);
list.head.next=new node(2);
list.head.next.next=new node(3);
list.head.next.next.next=new node(3);
list.head.next.next.next.next=new node(4);

list.sortList(list.head)
list.printList(this.database)
