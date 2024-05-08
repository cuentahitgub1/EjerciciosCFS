// esperar colectivo;
import * as rls from "readline-sync"

let llegadacolectivo : string;
console.log("Esperando el colectivo")

llegadacolectivo = rls.question("Llego el colectivo? (S/N)")

while (llegadacolectivo == "N") {
    console.log("Todavia no llego");

    llegadacolectivo = rls.question("Llego el colectivo? (S/N)");

}

console.log("Llego el colectivo");