//node constructor
function Node(value) {
    this.value = value;
    this.next = null;
}


function List() {
    this.print = print;
    this.findMid = findMid;
    this.head = null;
}

function countNode(list) { // counts the total number of nodes
    let current = list;
    let count = 0;

    while(current) {
        count++;
        current = current.next;
    }
    return count;
}

function print() {

}

function findMid() { // finds mid element of the linked list
    let nodeCount = countNode(this.head); // calling above method to get the total count of nodes

    let mid = Math.ceil(nodeCount/2); //need to ceil for the odd no. of nodes

    if(nodeCount % 2 == 0) // mid will be +1 for even no of nodes
        mid = mid + 1;

    let current = this.head;
    let temp = 1;
    while(current != null && temp < mid) {
        current = current.next;
        temp++;
    }
    return current.value;
}


let list = new List();
list.head = new Node(1);
list.head.next = new Node(2);
list.head.next.next = new Node(3);
list.head.next.next.next = new Node(4);
list.head.next.next.next.next = new Node(5);
list.head.next.next.next.next.next = new Node(6);

console.log(list.findMid());