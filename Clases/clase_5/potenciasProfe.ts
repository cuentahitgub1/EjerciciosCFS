//Métodos_Ejercicio Potencias (Maico Olguin)
import * as rls from "readline-sync"

let base: number = rls.questionInt("Inserte numero base:  ");
let exponente: number = rls.questionInt("Inserte numero exponente:  ");

function calcular(base: number, exponente: number) {
    
    if (exponente >= 0) {
        
        if (exponente === 0) 
            {return 1;} 
        
        else {return calcularPotencia(base,exponente);}
    }
}

function calcularPotencia(base: number, exponente: number) {
     let resultado: number = 1;
    
        for (let i: number = 0; i < exponente; i++) 
           
            {resultado *=base;}
             
             return resultado;
}

let potencia: any = calcular(base,exponente);

console.log( base + " a la " + exponente + " es =  " + potencia);
