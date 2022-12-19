
/* Hash Table

https://www.freecodecamp.org/news/javascript-hash-table-associative-array-hashing-in-js/



        1 Concepts: 
        A hash table stores values indexed by an econded string.
        Two classes or prototypes objecs are important to build a hash table in JS: Object and Maps
        The Object Data Type in JS is a special kind of hash table. What are the limitations of HASH TABLE that JS commonly share ?

            (i) Objects inherit properties from the Object.prototype, and the programmer can accidentaly overwrite this properties and methods inherited.
            (ii) The size of an Object Data Type and Hash Tables are only accountable manually.

        The MAP Data-Structure was created to overcome some of this limitations.



        2 Features

        2.1 Data Structures:
                2.1.1 A HASH CLASS 
                        (a) SIZE : Property to measure how many elements exist in the table
                        (b) TABLE : the table itself in format of an array.
                        (c) SET: Method do insert key-values pair in table slots
                        (d) GET: Method to return the key-value pair of a hash table.
                        (e) HASH: method to transform values in index (encoding any string or number in numbers following ASCII)

                                There several ways to define a hash function:

                                (i)  The sum of the ASCII code of Each Character.
                                (ii) Folding Method: The sum of the ASCII code of Each Character divided by the number of available adresses and take the remainder.
                                (iii) The sum of the Numeric Enconded KEY divided by the number of available adresses and take the remainder.

                        The Key that is used to be enconded as an INDEX must be an interable object (string).



                                The String.Prototype.charCodeAt() returns a numeric value corresponding to the character following ASCII dicitionary.
                                The unique argument of this method is the index of the strin to be enconded.

                2.1.2 MAP       
                        The MAP CLASS ITSELF. 

            2.2  FEATURES:

                2.2.1 - Index - The numeric enconded key of the map generated from hash function that provides de address of the slot to be indexed.
                2.2.2 - Load Factor: Numer of non-null slots / table.length. the load factor can not be higher than 70%.
                2.2.3 - PRIMARY CLUSTER: The Occupied addresses are clustered in a part of the array.

            2.3 Colision

            The hash function generates the same address for different key values. This is rather common.

            OPEN-ADRESS

                (a) Open Adressing or Lienar Probing. If the slot addressed from the hash function is occupied, a linear search is made starting from this slot.
                If the linear search reachs the end of the table, the search is restarted from index 0. Linear probing works well when the LOAD-FACTOR is SLOW and there is no PRIMARY CLUSTER

                (b) IF there is primary cluster, better to use a PLUS 3 REHASH. Every time a occupied slot is found, the probing jumps three indexes.

                (c) QUADRATIC PROBING; For each time the search for a empty slot occurs, the next index to be researched is squared.

                (d) Double Hash: A second hash function is applied to provide a new adress for the value.

            CLOSED-ADRESS

                Chainning : each index of the table can host an array. If two keys collides by having the same adress from the hash function, the will be stores in array 
                the same index of the table, being nodes of a linked list index within the HASH TABLE. It is worthy only if the LOAD FACTOR IS HIGH.



            2.4 What to expect from a HASH FUNCTION

                (i) Sparse and Uniform Distribution of the VALUES
                (ii) Minimize Collisions
                (iii) Efficient Conflit Resolution
                (iv) Hash function calculation must be easy

         


    // A HASH TABLE WITH CLOSED ADRESSING AND LINEAR PROBING */


    class HashTable {

        table = new Array(127);
        size = 0;
        loadFactor = null


        #hash(key) { // folding method

            let hash = 0

            for(let i = 0; i< key.length; i++) {
            hash += key.charCodeAt(i) // encodes each caracter in numbers and  afterward summing them.

            }

            return hash = hash % this.table.length

            
        }

        set(key,value) {
            let m = new Array(key,value)
            let index =  this.#hash(key)
            this.size++;

            if( this.loadFactor > 0.7) {
                this.table.length += 1 
            }

           

            for(let i = index; i < this.table.length; i++) {

                if(!this.table[i])  {
                        this.table.splice(i,1,m)
                        return true }

                if (this.table[i][0] === key) {
                        this.table[i][1] = value;
                        return true }
            }

            for(let i = 0; i < index; i++) {
                  if(!this.table[i])  {
                        this.table.splice(i,1,m);
                        return true }

                    if (this.table[i][0] === key) {
                        this.table[i][1] = value;
                        return true }
                         
       
            }

            this.loadFactor = this.size/ this.table.length

            return false

    
        }

        get(key) {

            let index = this.#hash(key)

            for(let i = index; i < this.table.length; i++) {
                if(this.table[i]?.["0"]=== key) {
                    return this.table[i][1]
                }
            }

            for(let i = 0; i < this.table[index]; i++) {
                if (this.table[i]?.[0]=== key)  {
                    return this.table[i][1]
                }
            }

            return false


        }

        remove(key) {

            let index = this.#hash(key)

            for(let i = index; i < this.table.length; i++) {
                if(this.table[i]?.[0]=== key) { // The conditional operator is mandatory, other wise if the slot is null or undefined it will throw an type error
                    this.table.splice(i,1);
                    this.size--;
                    return true
                }
            }

            for(let i = 0; i < index; i++) {
                if (this.table[i]?.[0]=== key)  {
                    this.table.splice(i,1);
                    this.size--;
                    return true
                }
            }

            return false



        }

    }


   
h = new HashTable


for(let i = 0; i < 187; i++) {
    h.set(`${i}`,45)

}

console.log(h.size)
console.log(h.table)
console.log(h.table.length)

for(let i = 0; i < 100; i++) {
    console.log(h.remove(`${i}`))

}


console.log(h.table)

console.log(h.size)
console.log(h.table.length)
console.log(h.loadFactor)





