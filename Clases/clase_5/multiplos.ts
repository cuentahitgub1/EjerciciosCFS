import * as rls from "readline-sync"

let numero: number = rls.questionInt("Inserte numero entero: ");

let numero2: number =rls.questionInt("Inserte numero para comprobar si es el multiplo del anterior: ")

function esMultiplo(num: number, multiploDe: number): boolean 
        {return num % multiploDe === 0;}

let multiplo : boolean = esMultiplo(numero,numero2);
        console.log(multiplo);