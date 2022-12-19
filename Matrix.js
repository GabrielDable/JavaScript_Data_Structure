// Break and Continue in Matrixes

     let matrix = 
     [
         [1,4,2,77,2,07,43],
         [45,47,3,null,43],
         [4,3,null,4,,2,11]
     ]

    

     for(let i = 0;i < matrix.length; i++) {
        for (let k = 0; k < matrix[i].length; k++){
            if (matrix[i][k]=== 2) {
                console.log(i,k); // 02, 22 
                break


            } 
        } // Break to here (outer loop scope). It does not interate the rest of the nested array

    }

    // Equivalento to 

     continuer : for(let i = 0;i < matrix.length; i++) {
        for (let k = 0; k < matrix[i].length; k++){
            if (matrix[i][k]=== 2) {
                console.log(i,k); // 02, 22 
                continue continuer


            } 
        } 

    }


    for(let i = 0;i < matrix.length; i++) {
        for (let k = 0; k < matrix[i].length; k++){
            if (matrix[i][k]=== 2) {
                console.log(i,k); // 02 
                


            } // Break to Here (Nested loop scope). It does not quit the nested loop, interating the rest. 0 2 0 4 2 2 2 5
        }
    }

     breaker: for(let i = 0;i < matrix.length; i++) {
         for (let k = 0; k < matrix[i].length; k++){
             if (matrix[i][k]=== 2) {
                 console.log(i,k); // 02
                 break breaker


             } 
         }

     } // Break to Here  (global scope), quiting the outer loop and not interating the arrays and its nesteda arrays. 

     */s
