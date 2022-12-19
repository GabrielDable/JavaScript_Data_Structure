       
/* Understanding

1) There are tow objects in Binary Trees: 

Node: It is the object that contain the data(value) and two pointers that containg nested objects derivated from the NODE constructors
The BinarySearchtree is an object that contain the root object and several methods to find the place where the new node must bem writte.
Therefore the BST contain all nested objecst from the root, containing the tree itself.

The BST set of the methods should find the first pointer (left or side) of a node which is null, creating the new node leaf.
The methods of BST must comprise the search rule: 

    if the child node < ofthe parent node, the search must follow the left-side branch. If this branch is null, thefore left.side pointer is null and receive the node.
    If the Child node >=, parent node the search muts follow the right side branch. It the branch is null, therefore the right.side pointer is null and receies the node.
    If the pointers are not null, the search must follow downwards. Therefore, a recursive function is called until finding the empty pointer property. 


       Wrapping up : if the pointer is null, the pointer gets the node. The opposite, the nested object within the pointer is checked to know if its pointers are null, or with a hiegher or lower value thatn node.date 
       
       
 2) Deletion:
 
 Therea specific rules to delete nodes. https://www.geeksforgeeks.org/binary-search-tree-set-2-delete/

 If the left node is empty, the value of the right node is copied to parent node.
 If the right side node is empty, the value of the left-side node is copied to the parent node.
 If both child nodes are empty, the value of the NODE to be deleted is just NULL.
 If the parent node has two child node, it is more complicated:

    2.1) Search of the INORDER_SUCESSOR: 
       Inorder Sucessor is first value grater than a parten of root node.
       One can find it as the lowest  child node value from right-side child node.
       Remeber, the left-side child of the node will nest leftward values always smaller than the parent node.
       The right-side child will nest leftward the values always grater than the root.

 
    2.2) PASS the INORDER SUCESSOR value to the node to be deleted.
       
         Deleting the root 10

                                             10                                       |  In a binary three, values > root will be always allocated rightward.               
                                    5                 15                              |  Values > Root will be always allocated leftward.
                                3      9           14        20                       |  The root.right.left leaft are SUCESSOR of a Root , x  > root and x < root.right, as if x < root it would have followed leftward.
                            2      4    null    - 11   13    17   25                  |  The root.right.rigth.leftward is x > root and x > root.right and x < root.right.right.
                                                                                      |  I another hand, the right-most leaf in root.left.rightward is PREDESSOR the greatest value lesser than the root. 

       
    
Inorder Sucessor of 10 is 2

                                
    
                */






class Node {

    static id = 0

    constructor(data) {

        this.id = ++Node.id
        this.data = data;
        this.right = null;
        this.left = null;
   
    }
}


class BST {


    constructor() {
        this.root = null
    }   

    add(data) {
        let newNode = new Node(data);
        if(this.root === null) {
            this.root = newNode;
            } else {
                this.findleaf(newNode,this.root)
            }

    }

    findleaf(newNode, existentNode) {
        if(newNode.data < existentNode.data) {
            if(existentNode.left === null) {
                existentNode.left = newNode
            } else {
                this.findleaf(newNode,existentNode.left)
            }
        } else { // in case IF - 60 is false, the command enter this branch  If { If { else} else { If { else {}}}}
            if (existentNode.right === null) {
                existentNode.right = newNode;
            } else {
                this.findleaf(newNode,existentNode.right)
            }
        }
    }


       
       
    remove(data)
    {
        
        this.root = this.removeNode(this.root, data); 
    }
        

    removeNode(node, key)   { // RETURNS: FIRST-ARGUMENT; NULL or left-side or RIGHT-SIDE POINTERS PROPERTIES. 
    /* That is a RECURSIVE function that always return an object, which is its first argument. 
    This object can be same object passed as first argument, null or the lef.side or right.side object.
    The function stop recuring when node === key, performing the operation atribuing null to node or passing the left.side or right.side object to it .
    The fore the recursive function inspects the value node.date comparin to the key, reassign the node objec it self as a value

    */

                
    
        if(node === null) { // The condition to stop the recursion is key === node.data, as no recursive function is called again
            return null; 

        /*   The scope of this function is branched by a parent control structure (IF with two else IF) 97-109 lines.
         The logic test if the key researched is larger or smaller than the node.data, and if the node is null. */ 
    
        }else if (key < node.data){
            node.left = this.removeNode(node.left, key); // Defines that the node.left is assigned by the function recurving. The function returns the own argument while is recurving, untill reaching ket === node.data
            return node;

        } else if (key > node.data){ (key > node.data)
        
            node.right = this.removeNode(node.right, key);
            return node;
            
        }  else { 
            
            /* The else is the remaning logical condition implicitly key === node.data and node !== null.
            Within this blocks scope, the code will test if the left-side or right-side objects are empty. */
    
            if(node.left === null && node.right === null) {
                node = null;
                return node; // If there is no child-node, the function returns NODE = NULL
            } 
            
            if(node.left === null)  {
                node = node.right;
                return node; // If there is no left.node, the parent node = node.right +
            }  else if(node.right === null) { 
                node = node.left; // If there is no right.node, node = node.left
                return node; 
            }
    
            let aux = this.findMinNode(node.right); // This statements are executed if the three bollens in lines 116,121 abd 124 returns false. That is: both sides objecst are not null
            node.data = aux.data;  // It returns the last left.side node from the node whose node.data === key and node has two child
        
            node.right = this.removeNode(node.right, aux.data); // Removing the sucessor from the tree bottom and passing the nested three to node.right
            return node;
        }

       

    }   


    #findMinNode(node) { // recursive function called in RemoveNode. Returns the own argument when the codition is matched, other sise returns the own function unvokation

        if(node.left === null) {
            return node;
        }else{
            return this.#findMinNode(node.left); // the lowest value from a branch, follows continously the left-side branch untill the leaf
        }
    }

    search(value) {

    return this.#searchAux(this.root,value)    

    }
    
    #searchAux(node,value) {

        if(node === null) {
            return false
        } else if( value < node.data) {
            return  this.#searchAux(node.left, value) 
        } else if( value > node.data) {
            return  this.#searchAux(node.right,value)
        } else { 
            return node }
    }

    findSucessor(value) {
        var node = this.search(value);
        return this.#findMinNode(node.right)

    }

    findPredessor(value) {
        var node = this.search(value);
        return this.#findMax(node.left)

    }    
        
    #findMax(node) { // 

        if(node.right === null) {

            return node 
        } else {this.#findMax(node.right)}

    }

    inorder(node)
    {
        if(node !== null)
        {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }

 
    preorder(node)
    {
        if(node !== null)
        {
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }


    postorder(node)
    {
        if(node !== null)
        {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data);
        }
    }

    maxHeight(node) {
        if(node.right == null && node.left == null) {
            return node
        } else  if (node.left == null) {
           return this.maxHeight(node.right)

        } else if (node.right == null) {
            
         return this.maxHeight(node.right) 
        
        } else { return this.maxHeight(node)}

    }




}


tree = new BST
tree2 = new BST 

tree.add(4)
tree.add(3)
tree.add(5)
tree.add(6)
tree.add(2.3)
tree.add(4)
tree.add(10)
tree.add(15)

console.log(tree.findSucessor(4).id) // user@Air-de-Alaa Move % node test.js


console.log(tree.search(15)) // Node { id: 6, data: 15, right: null, left: null }

console.log(tree.findPredessor(5)) // Node { id: 4, data: 4, right: null, left: null }

tree.inorder(tree.root)
tree.preorder(tree.root)
tree.postorder(tree.root)
console.log(tree.maxHeight(tree.root))







