/*Problem 1 :
Given a singly linked list consisting of N nodes. The task is to remove duplicates (nodes with duplicate values) from the given list (if exists).
Note: Try not to use extra space. Expected time complexity is O(N). The nodes are arranged in a sorted way.
Example 1:
Input:
LinkedList: 2->2->4->5

Output: 2 4 5
Explanation: In the given linked list
2 ->2 -> 4-> 5, only 2 occurs more
than 1 time.
Example 2:
Input:
LinkedList: 2->2->2->2->2
Output: 2
Explanation: In the given linked list
2 ->2 ->2 ->2 ->2, 2 is the only element
and is repeated 5 times.

*/
function node(value)
{
    this.value=value;
    this.next=null;
}
function LinkedList()
{
    this.head=null;
    this.checkOccurance=checkOccurance;

}
function checkOccurance()
{
    let current = this.head;
    while(current.next !=null)
    {
        if(current.value != current.next.value)
        {
            current =current.next;
        }
        else{
            console.log(current.value)
            current =current.next;
        }

    }
}
let list =new LinkedList();
list.head=new node(2);
list.head.next=new node(2);
list.head.next.next=new node(4);
list.head.next.next.next=new node(5);

list.checkOccurance();

