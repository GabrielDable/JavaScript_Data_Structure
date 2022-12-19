

// Find Parents names.

let nome = " antonio duarte martins"

let pai = " nicolau assunção martins"

let mae = " maria duare"

let apelidos = new String

let arros = new Array



nomespliter =function(value) {

    let arros = value.split(" ");

     if(arros.includes("")) {
         for(element of arros) {
             if(element === "") {
            
             arros.splice(arros.indexOf(element),1) // [ 'antonio', 'duarte', 'martins' ]
             }
         }
     }
    
    return arros
 
}

nome = nomespliter(nome)

pai = nomespliter(pai); 

console.log(pai[pai.find(element => nome.some(value => element === value  ))]) // Martins


// repeating elements.



let aros = new Array(1,2,3,3,1,1,1,4,5,6,6,7);

console.log(arros.indexOf(6))

console.log(aros)


let trer = new Object

function Nested() {
    this.frequency = 0
    this.indexer = []
}


aros.forEach((v,inde,arros) => {
    let counter = 0
    for(let i = 0; i < arros.length; i++) {
        if(v === arros[i]) {
                trer[`${v} repeats`] = new Nested;
                trer[`${v} repeats`]["frequency"] = counter++
                trer[`${v} repeats`]["indexer"].push(arros.indexOf(arros[i]))
            

        }


        }
   
    }
)

console.log(trer)

// Simple Option.


let aros = new Array(1,2,3,3,1,1,1,4,5,6,6,7);

console.log(aros.indexOf(6))


console.log(aros.some((element, ind) => aros.indexOf(element) !== ind )) // As a linear research method, duplicate values will have tha same element but with different index.



