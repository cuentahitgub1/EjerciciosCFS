import * as readlineSync from "readline-sync";

let baseTriangulo : number = readlineSync.questionInt( "Ingrese la base: ");
console.log("el numero de la base es: ", baseTriangulo);

let alturaTriangulo : number = readlineSync.questionInt( "Ingrese la altura: ");
console.log("el numero de la altura es: ", alturaTriangulo);


console.log ("el area del triangulo es: " + baseTriangulo*alturaTriangulo);

// area = base x altura
