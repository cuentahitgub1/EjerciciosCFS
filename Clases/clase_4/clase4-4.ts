// ejercicio de notas con for

import * as rls from "readline-sync"

let suma: number, nota: number, promedio: number, contador: number;

suma = 0;

for (contador = 1; contador <11; contador++) {
    nota = rls.questionFloat("Ingrese su nota: ");
    suma += nota;
}

promedio= suma/10;

console.log("El promedio del alumno es: " + promedio)