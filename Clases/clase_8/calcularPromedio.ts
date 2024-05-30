import * as rls from "readline-sync"

let dimensionArreglo: number = rls.questionInt("Ingrese cantidad de jugadores: ")
let edadesJugadores: number[] = new Array(dimensionArreglo);

function cargarJugadores(edadesJugadores:number[], dimensionArreglo:number){
    let i:number=0;
    for (i; i < edadesJugadores.length; i++) 
         {edadesJugadores[i] = Aleatorio(3,7);}
}

function Aleatorio(menorValor: number, mayorValor: number): number {
let numeroAdevolver:number = 0;
        numeroAdevolver= Math.floor
            (Math.random()*(mayorValor - menorValor+1)+menorValor);
                 return numeroAdevolver;
}

function mostrarJugadores(edadesJugadores:number[], dimensionArreglo:number){
    let i:number=0;
    let jugadores:string="";
    for (i; i < edadesJugadores.length; i++)
        {jugadores+= edadesJugadores[i] + " - ";} 
            console.log("los jugadores son: ", jugadores);
}

function obtenerPromedioEdadesJugadores(edadesJugadores:number[],dimensionArreglo:number):number {
    let suma:number=0;
    let i:number=0
    let promedio:number=0;
    for (i; i< dimensionArreglo; i++)
    {suma = suma + edadesJugadores[i];}
         promedio = suma / dimensionArreglo;
            return promedio;
}

cargarJugadores(edadesJugadores, dimensionArreglo);
mostrarJugadores (edadesJugadores, dimensionArreglo);
console.log("el promedio de edades es: ", obtenerPromedioEdadesJugadores(edadesJugadores, dimensionArreglo))
