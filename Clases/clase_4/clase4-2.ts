// calcular promedio;
import * as rls from "readline-sync"

let suma: number, nota: number, promedio: number, contador: number;

contador = 1;
suma = 0;

while(contador <=10) {
    nota = rls.questionFloat("Ingrese su nota: ");
    suma = suma + nota;

    contador = + 1;
}

promedio = suma/10;

console.log("El promedio del alumno es : " + promedio);