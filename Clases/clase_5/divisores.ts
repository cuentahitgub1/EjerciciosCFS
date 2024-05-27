import * as rls from "readline-sync"

let numero: number = rls.questionInt("Ingrese un numero: ");

function cantidadDivisores(numero: number): number {
    let cantidad = 0;
    
    for (let i = 1; i <= numero; i++) {
        if (numero %i == 0)
            {cantidad++;}
        } return cantidad;
}

console.log("La cantidad de divisores es: ", cantidadDivisores(numero));