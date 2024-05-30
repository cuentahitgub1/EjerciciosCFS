import * as rls from "readline-sync"

let numero1: number = rls.questionInt("Inserte el primer numero:  ");
let numero2: number = rls.questionInt("Inserte el segundo numero:  ");

console.log("El resultado es: ", numero1+numero2)

