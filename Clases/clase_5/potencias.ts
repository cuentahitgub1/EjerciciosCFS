//Métodos_Ejercicio Potencias (Maico Olguin)
import * as rls from "readline-sync"

let base: number = rls.questionInt("Inserte numero base:  ");
let exponente: number = rls.questionInt("Inserte numero exponente:  ");
let resultado: number= base**exponente

function calcularPotencia(base: number, exponente: number): number 
         {return resultado}
         
{let potencia: number = calcularPotencia(base, exponente);
         console.log(base + " a la " + exponente + " es =  " + potencia);}