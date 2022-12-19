/* 

Linked List 

    1.1 Concepts
        Comprises a series of nodes

        Each node has a property to guard an information and another to guard the reference to another node.

            Node:
            Data_Field: Treasures an information
            Address_Field: Reference to another node.


        Linked-List are widely used to treasure dynamic data. 
    
    1.2 Methods

    Transverse:
    Insertion:
    Deletion:
    Searching:

    
    2. Syngly Linked List */

    
    
    class Node {


   

        constructor(data) {
            this.data = data 
            this.pointer = null
        }

    

    }


    class LinkedList {

        constructor(data) {

            this.start = new Node (data)
        }

        add(data) {
            let node = new Node(data);
            return this.#searchTail(this.start, node, true)
            
        }
        
        delete() {

            this.start = this.#searchTail(this.start, {} , false)
  
          }

        #searchTail(node, newNode, operator) { // Recursive function commonly used for both delete and add methods. The third parameter OPERATOR is a boolean value to branch the scope to delete or add a node.
                                                // The third parameter is an argument passed when #searchtail is invoked. Adding method pass TRUE and Delete Method passes FALSE

            if(node === undefined) {

                return false

            } else if(node.pointer === null) {

                    if(operator === true) {
                        node.pointer = newNode
                        return node
                    } 
                        node = null ;   
                        return  node; 
            
                
            } else {

                node.pointer = this.#searchTail(node.pointer,newNode,operator)
                return node
                
            }  

        }
            
    
        search(data) {
            
            if(this.start.data === data) {
                return this.start
            } 
            
            return this.#auxSearch(data,this.start.pointer)

        }

        #auxSearch(data,node) {

            if(node === null) {
                return false
            }

            if(node.data === data) {
                return node
            }

            return this.#auxSearch(data,node.pointer)

        }

        transverse() {

            if(!this.start) {
            return undefined
            } else {
               this.#auxTransverse(this.start)
            }
        }

        #auxTransverse(node) {

            console.log(node)

            if(node.pointer === null) {
                return false
            }

           this.#auxTransverse(node.pointer)
        }



    }


  

