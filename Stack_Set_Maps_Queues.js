/* 

1 - Stacks

In js, arrays are stacks.

Functions:  push, pop, peek and length. */

var stack = []
var stacK = []

var words = "www.facebook.com"
var w = "" // Falsy Empty String

/*

        1.1 Interating the string in an Array   */

        for( i= 0; i< words.length; i++) {
            stack.push(words[i])
            stacK.unshift(words[i])
        }

        stack //  [  'w', 'w', 'w', '.', 'f', 'a', 'c', 'e', 'b', 'o', 'o', 'k','.', 'c', 'o', 'm']
        stacK // [  'm', 'o', 'c', '.',  'k', 'o', 'o', 'b', 'e', 'c', 'a', 'f','.', 'w', 'w', 'w']

    //  1.2 Removing the elements of an array 

            for( i= 0; i < (words.length); i++) {
                w += stack.pop() // Concatanation
                stacK.shift()
        }

        stack // []
        stacK // []
        
        w // moc.koobecaf.www
            
    /* 1.3 Stack Constructor Function

        Stacks re object whose property are enumarated ( array-like object, tehre is counter-indexer variable)
        Stacks elements can only be added and removed from the end (top of the stack). There is no free access for its elements, like a stack fo plates.
        It follows the last-in first-out (LIFO) principle and therefore only comprises pop and push methods, adding and removing elements from the end a an array.
        Additionaly, the peek methods must be implemented in JS. 
        Stacks are used for done-undone features.
        */

        stack = function(){
            this.count = 0 
            this.storage = {}
        }

        this.push = function(value) {
            this.storage[this.count] = value;
            this.count++;
        }

        this.pop = function (){
            if(count === 0) {
                return undefined
            }
            this.count--;
            var result = this.storage[this.count];
            delete this.storage[this.count];
            return result 
        
        
        };
        
        this.size = function() {
            return this.count;
        };
        
        this.peek = function (){
            return this.storage[this.count-1]
        };


        let stack2 = new stack

        stack2.push(2)
        
        console.log(stack2.storage) // { '0': 2 } 

        stack2.push("manoel") 

        stack2.size() // 2

        stack2.peek() // "Manuel"


        /* 1.5 Sets.




        1.5.1 Built-in Sets in JS. Cf Flanagan chapter 11.    


        Sets are an unordered array fo values, without duplicates. 

        The argument of the set constructor function is the interable object with its values.

        Duplicate values will be eliminated.

        In Js SETS are unordered.
        */
       
        let setter = new Set([1,2,3,4,5,5,]) //  1,2,3,4,5,5,

        let settor = new Set("Interabble")  // { 'I', 'n', 't', 'e', 'r', 'a', 'b', 'l' }

        /*
            - Set.prototype.has()
        In comparison to array and tis method Array.prototype.includes(), sets have a better search performance with its method has().
        It is importanto to observe, that the stric euqality operator is used when searching in a set and therefore, no converstion is allows.
        Iy you want only o test membership, better to pass the array into a set and perform the search with set.prototype.has */

        setter.has(5) // TRUE


        /*  - Set.prototype.delete

        Differently fo arrays and by the fact sets have no index, when you delete an element, the slot of the value is automatically released from the memory
        In an array, the index would be remained defined as null, but sets they are not. 
        Delete returns false if the value you input is not member of the set
        A set-like an array must have splice methods defined with Array.Prototype.splice  to have free access to its indexes to eliminate values 
        Built-sets have no methods to access a particular value, an interation with for of is required.
        */
        


        setter.delete(5)  // TRUE -  { 1, 2, 3, 4 } - Returns a Boolean


         /* Set.prototype.add()

         Its insert a new value like a stack or array, using the method Array.prototype.push(). Returns a boolean value. 
        /* 

        - Set.prototype.has()

        It is only accept one argument, the value you are looking for an return a boolean. 


         - Interation 

         Sets are interable, and despite not being indexed, the order of the interation remembers the first element inserted.
         Therefore, a set-like an array must have insert methods defined with Array.Prototype.push  


         - Set.Prototype.EachOf()

        This method works exactly as the Array.Prototype.splice()
        Example the set of a products can have its priced updated with this methods.

        






        /*


        Sets are arrays with unique values.
        Sets can be objects as well
        Sets in Js have built-in methods: .add, .has, delete. 
        ADD is derivated from push with a conditional of element existence (has method)
        HAS derivates from indexOf method to check if there value already exist.
        DELETE derivates from splice, once it must returned the deleted element and modify the original set.
        Therefore, has method is central in sets.

        Additionaly, one ca implemente the methods:

        Those methods are derivated from forEach method as it interates one array comparing tis elements to another array and futher actions

        INTERSECTION - takes values from other array and use has method to infer whether is a common value.
        DIFERENCE- takes value from other array and use has method to infer whether is not a common value.
        UNIOM- takes value from both sets with forEach, and use add method to pass them to a union array.
        VALUE -
        ADD -
        DETELE -
        HAS -
        SUBSET - 

        


        */
        
        function mySet() {
            var collection = [];  // Closure - Persistant Lexical Scope. The generated object will inherit the methods still bound to the collection variable in the outer scope.
            this.has = function(element) {
                return (collection.indexOf(element) !== -1) // indexOf returns -1 if an element is no an array. The expression returns TRUE if the elements is contained within collection.
            }
            this.value = function (){
                return collection
            }
            
            this.add = function (element) {
                if(!(this.has(element))) { // If the collectio does not have the element, this.has returns false. The operator inverts the boolena to acess If scope.
                    collection.push(element);
                    return true
                } 
                return false // false if the if expression returns TRUE : the element exist
            };
            this.remove = function(element) {
                if(this.has(element)) {
                    let index = collection.indexOf(element);
                    collection.splice(index,1) // splice modifies the original array, The first argument is the index-startingpoint and the sencond the length afterwards to be deleted.
                    return true
                    
                }

                return false;
            
            }

            this.size = function () {
                return collection.length
            }
            
            this.union = function(otherset) {
                var setunion = new mySet;
                var ownset = this.value();
                var otherset = otherset.value();
                ownset.forEach(element => { 
                    setunion.add(element)
                    
                });
                
                otherset.forEach(element => {
                    setunion.add(element)
                })
            
                return setunion
            
            }

            this.intersection = function (otherset) {
                var intersection = new mySet;
                var ownset = this.value();

                ownset.forEach(e => 
                    { if(otherset.has(e)) {
                        intersection.add(e)
                    }
                    
                    return otherset
                    
                    })
                
            }
            this.difference = function (otherset) {
                ownset.forEach(e => {
                    if(!otherset.has(e)) {
                        intersection.add(e)
                    }
                return intersection    


                }
                )
            } 

            this.subset = function (otherset) {
                var ownset = this.value();
                 return ownset.every(value => otherset.has(value)) // EVERY method is a predicative function Always Return TRUE or FALSE if the predicative returns true for each VALUE tested
             }
         }

        set3 = new mySet
        set4 = new mySet
        
        set3.add(2)
        set3.add(3)
        set3.add(4)
        set3.add(5)
        set3.add(6)
        set4.add(2)
        
        
        console.log(set4.subset(set3)) // TRUE
        console.log(set.intersection(set3)) // 2
            
         /*

         1.6 - QUEUS

         first and first-out.

        Whereas in a stack, the elements are added and removed from the top (left-side of the array, or higher index), in queue the values are added to to roar (left-side)
        with a psh metod and removed from the front (lower index) with shift.

*/
         function MyQueu() {
    
                let collection = new Array;
                let counter = 0;

                this.enqueue =function(value) { // equivalent to push()
                    collection[counter] = value;
                    counter++
                }

                this.dequeue = function(){ // equivalent to shift()
                    return collection.splice(0,1)
                }

                this.size = function() {
                    return collection.length
                }

                this.peek = function() {
                    return collection[counter-1]
                }

                this.value = function() {
                    return collection
                }

                this.empty = function () {
                    if(counter.length === 0) {
                        return true
                    }

                    return undefined
                }

                this.front = function () {
                    return collection[o]
                }

            }


            queue1 =  new MyQueu


            queue1.add(1)
            queue1.add(2)
            queue1.add(3)
            queue1.add(4)

            console.log(queue1.value()) [ 1, 2, 3, 4 ]

            console.log(queue1.remove()) // [ 1 ]
            console.log(queue1.remove()) // [ 2 ]
            console.log(queue1.value()) // [ 3, 4 ]
            console.log(queue1.remove()) // [ 3 ]
            console.log(queue1.value())// [ 4 ]




//        1.6. Priority Queues

        
                    function priorityQueue() {
                        let collection = new Array; // closure
                        added = Boolean // closure 



                    this.enqueue= function(value) {

                        var added = false // Added is variable to control the success of the enqueuing. It must be reuptaded for each enqueue invokation

                        if(collection.length === 0) {
                            collection.push(value);
                            added = true
                            return added // return keyword will quit the code execution from the functiom
                        } 
                        
                        for(let i = 0; i < collection.length; i++) {
                            if(value[1] < collection[i][1]) {
                                collection.splice(i,0,value);
                                added = true;
                                return added // Return will quit function execution. One could use break keyword from the looping scope, the command will follow the lines downward
                            
                            }

                            
                        }

                        if(!added) { // the inline command did not enter the 305 loop or control structure in line 299, added will be always false, therefore with the negation operator, it will enter 316 line
                            collection.push(value)
                        }    
                    }

                    this.dequeue = function() {
                        var dequeue = collection.shift();
                        return dequeue[0]
                    }

                    this.value = function() {
                        return collection
                    }

                    }


                    q = new priorityQueue

                    q.enqueue(["paulo",1])
                    q.enqueue(["maria",4])
                    q.enqueue(["fernão",1])
                    q.enqueue(["hney",2])

                    console.log(q.value()) // [ [ 'paulo', 1 ], [ 'fernão', 1 ], [ 'hney', 2 ], [ 'maria', 4 ] ]
        /*


        1.7 - Maps


        Maps have a value denominated as keys.
        Each value fo the Keys has another value associated to it.
        A map essentialy is lilke an array, allowing us to use arbitrary values as indexes.
        But a MAP ressembles an Object a lot, with the difference that you can only add and remove properties from its own methods set() and delete().
        Those features of maps avoids the programmer from overwrittring inherited properties of the MAP CLASS, differently of Object Data Type.
        The get method never return a built-in property of the MAO CLASS.
        In objects, one can access and overwrite whatever instance properties, own or inherited, overwritting them.
        Maps are faster than object, but not so rapid as an array.

            Syntax:

            Like sets, the argument of the Map Constructor Function is an interable object its self.
            usually, the argument is an associative array.
            */

            let m = new Map([["maria", 45],["Vaz, 76"]]) /*

            It is very common to use map constructor to copy values from another map, and even from another object */

            let o = {a:2, b:3}

            m = new Map(Object.entries(o)) //  Map(2) { 'a' => 2, 'b' => 3 }


        

        //    - Methods 



                    class Opus {

                        constructor(x,y,z) {
                            this.x = x;
                            this.z = z;
                            this.y = y
                        }
                    }

                    oper = new Opus(1,2,3)


                    for( let elements in oper) {
                        console.log(oper[elements])
                    }

                    let mapo = new Map(Object.entries(oper)) // { 'x' => 1, 'z' => 3, 'y' => 2 }                    

                    Map.prototype.has() - // Very similar to the set method, returns a boolean value.

                        mapo.has("z") // TRUE 

                    Map.prototype.set() - //Accepts two arguments. The first refers to the they, and the second to the value associated to it.
                    //It permits to overwrite the associated value, or enter a new key-value. Differently of Object.set methods, it does not return a boolean, but the map itself. 

                        mapo.set("x",2) // // Map(3) { 'x' => 2, 'z' => 3, 'y' => 2 }

                    Map.prototype.get() - // Accetps only one argument, the key, and return the associated value. Otherwise returms undefined.

                        mapo.get("x") // 2
                        mapo.get("z") // undefined

                    Map.prototype.size - // It is aproperty and and returns the number of keys of map.

                        mapo.size// 2


                    Map.prototype.delete() - //The Argument is uniquely the key to be deleted. Differently of the set() method, returns a boolea    N value.
                    //Delete removes the key and associated value, not only the value. If you want to remove the associated value, one must use Map.prototype.set method, omitting the second argument. DIFFERENTLY OF USING DELETE OPERATOR IN ARRAYS, THE MAP.PROTOTYPE.SET WILL PASS UNDEFINED TO THE VALUE OF THE KEY YOU UPDATEED

                        mapo.set("x") //  Map(3) { 'x' => undefined, 'z' => 3, 'y' => 2 }

                        mapo.delete("x") // Map(2) { 'z' => 3, 'y' => 2 }

                        // ALTHOUGH, LIKE OBJECT.SETS YOU NEED TO EXPLICITLY PASS NUL AS A VVALUE OF THE KEY.

                        mapo.set("y", null) //  Map(2) { 'z' => 3, 'y' => 2 }

                        

                    Map.prototype.clear() - //remove all the keys and values and returns unidefined.


                    Map.prototype.forEach() - // as maps have no index, the second argument is they key itself.


                    /*

                     - Interation:

                     Like objects, the keys of maps are compared by identity not values
                     Therefore if you compare keys with the same value they will be unequal by the interpreter.
                     Like SETS, ARRAYS AND STRINGS, MAPS ARE ITERABLE with OFR OF LOOP
                     Like in OBJECTS, the interpreter will desestructure the map, returning for each interation the pair KEY VALUE. 
                     The Keys are interated in order they were inserted to the map, like sets */


                     let m = new Map([[1,2],[3,4]]);


                        [...m] // Idiomatic Expression

                        for(let [key,value] of m) {
                            console.log(key)
                            console.log(value)
                        }  // 1,2,3,4


                    /*

                    - Auxilirary Methods

                    Map.Prototype.keys : returns an array of keys.
                    Map.Prototype.values: return an array of values.
                    Map.Prototype.entries: return an array of key-values pair arrays. ( it is the same with you interate with a forloop directly)

                    - 


        

/*

WRAPPING UP - 

(I) DATA STRUCTURES SUCH AS MAPS AND SETS ARE COMMONLY BUILT WITH CONSTRCUTOR WHOSE ARGUMENTS ARE INTERABLE OBJECTS.
(II) BOTH ARE INTERABLE WITH A LOOP FOR-OF, THEREFORE THEY ARE INTERABLE OBJECTS.
(III) ASSINGMENT OPERATOR , DELETE OPERATOR AND ANY OTHER OPERATOR CAN NOT INITIALIZE OR MODIFY VALUES OF THEM, ONLY USING TIS IN-BUILT CLASS METHODS (ADD, REMOVE,CLEAR,SET)
(IV) TO CHECK VALUS WITHIN THE DATASTRCUTURE THE METHODS OBJECT.PROTOTYPE.HAS IS COMMONLY USED, AS IT IS IMPOSSIBLE TO ACCESS ITS PROPERTIES.




