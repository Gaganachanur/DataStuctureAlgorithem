function node(val)
{
    this.val=val;
    this.next=null;

}

function LinkedList()
{
    this.head=null;
    this.swap=swap;
    this.print=print;

}

function swap(head) {
    let current = head;
    let prev = 0;
    while (current !== null && current.next !== null) {
        prev.val = current.next.val
        prev.next.val = current.val


        current = current.next.next;
        prev = prev.next.next

    }
}
    function print(current)
    {
        while(current !== null)
        {
            console.log(current.val)
            current=current.next;
        }

    }





let list = new LinkedList()
list.head = new node(1);
list.head.next = new node(2);
list.head.next.next= new node(3);
list.head.next.next.next = new node(4);

list.swap(list.head)
//list.print(list.head)