import * as readlineSync from "readline-sync";

let primerVuelta : number = readlineSync.questionInt("Tiempo vuelta 1: ");
console.log("Minutos del primer tiempo: ", primerVuelta);

let segundaVuelta : number = readlineSync.questionInt("Tiempo vuelta 2: ");
console.log("Minutos del segundo tiempo: ", segundaVuelta);

let terceraVuelta : number = readlineSync.questionInt("Tiempo vuelta 3: ");
console.log("Minutos del tercer tiempo: ", terceraVuelta);

let cuartaVuelta : number = readlineSync.questionInt("Tiempo vuelta 4: ");
console.log("Minutos del Cuarto Tiempo:  ", cuartaVuelta);

let tiempoTotal: number = primerVuelta+ segundaVuelta + terceraVuelta + cuartaVuelta;
console.log("Tiempo total: ", tiempoTotal);

let promedio: number
promedio = tiempoTotal/10
console.log("Promedio:  " + promedio)