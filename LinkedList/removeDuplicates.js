function List(){
    this.head = null;
    this.removeDuplicates = removeDuplicates
}
function Node(data){
 this.data =data;
 this.next =null;
}

function removeDuplicates(){
    let current =this.head;
   console.log(current) 
    while(current && current.next){
        if(current.data === current.next.data){
            current.next = current.next.next;
            
        }
            current = current.next;
       
    }
   current = this.head
    while(current){
        console.log(current.data);
        current = current.next
    }

}

let list  = new List();
list.head = new Node(1);
list.head.next =new Node(2)
list.head.next.next =new Node(3)
list.head.next.next.next =new Node(3)

list.removeDuplicates();


