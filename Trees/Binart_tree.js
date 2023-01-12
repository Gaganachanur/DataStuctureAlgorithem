//tree node
function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}


function BinaryTree() {
    this.root = null;
    this.inorder = inorder;
    this.inorderIterative = inorderIterative;
    this.preorder = preorder;
    this.postorder = postorder;
    this.insert = insert;
    this.search = search;
    this.deleteNode = deleteNode;
    this.height = height;
}

function inorder(root) {
    if(root == null)
        return;

    inorder(root.left);
    console.log(root.data);
    inorder(root.right);

}

function inorderIterative(root) {
    // stack
    let stack = [];
    let curr = root;

    while(stack.length !=0 || curr != null) {

        if(curr != null){
            stack.push(curr)
            curr = curr.left;
        } else {
            curr = stack.pop();
            console.log(curr.data);
            curr = curr.right;
        }
    }
}

function preorder(root) {
    if(root == null)
        return;

    console.log(root.data);
    preorder(root.left);
    preorder(root.right);

}

function postorder(root) {
    if(root == null)
        return;

    postorder(root.left);
    postorder(root.right);
    console.log(root.data);
}

function insert(root, key) {
    if(root == null)
        return new Node(key);

    if(key < root.data) {
        root.left = insert(root.left, key); //{data:3}
    }

    if(key > root.data) {
        root.right = insert(root.right, key); //16 // 11
    }

    return root;
}


function search(root, key) {
    if(root == null) // if key is not found
        return false;

    if(key < root.data)
        return search(root.left, key);

    if(key > root.data)
        return search(root.right, key);


    return true;
}

function deleteNode(root, key) {
    if(root == null)
        return root;

    if(key < root.data) {
        root.left = deleteNode(root.left, key); //null
    } else if(key > root.data) {
        root.right = deleteNode(root.right, key);
    } else {

        if(root.left == null)
            return root.right;

        if(root.right == null)
            return root.left;

        root.data = inorderSuccesor(root.right);

        root.right = deleteNode(root.right, root.data);
    }
    return root;
}

function inorderSuccesor(root) {
    let res = root.data;
    while(root.left != null) {
        res = root.left.data;
        root = root.left;
    }
    return res;
}


function height(root) {
    if(root == null)
        return 0;

    return Math.max(height(root.left), height(root.right)) + 1;
}




let tree = new BinaryTree();
// tree.root = new Node(1);
// tree.root.left = new Node(3);
// tree.root.right = new Node(4);
// tree.root.left.left = new Node(5);
// tree.root.left.right = new Node(6);
// tree.root.right.left = new Node(7);
// tree.root.right.right = new Node(8);

let node = tree.insert(tree.root, 15);
console.log("\n Inorder Traversal");
tree.inorder(node);
node = tree.insert(node, 8);
console.log("\n Inorder Traversal");
tree.inorder(node);
node = tree.insert(node, 11);
console.log("\n Inorder Traversal");
tree.inorder(node);
node = tree.insert(node, 16);
console.log("\n Inorder Traversal");
tree.inorder(node);
node = tree.insert(node, 3);
console.log("\n Inorder Traversal");
tree.inorder(node);

console.log("##############################  ##############");

console.log("Is 16 available ? ", tree.search(node, 16));
console.log("Is 11 available ? ", tree.search(node, 11));
console.log("Is 5 available ? ", tree.search(node, 5));


console.log("Deleting 11");
tree.deleteNode(node, 11);

console.log("Is 11 available ? ", tree.search(node, 11));





// console.log("\n Iterative Inorder Traversal");
// tree.inorderIterative(tree.root);

// console.log("\n Preorder Traversal");
// tree.preorder(tree.root);

// console.log("\n Postorder Traversal");
// tree.postorder(tree.root);
