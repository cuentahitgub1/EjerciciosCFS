import * as rls from "readline-sync"

const  intentosMax : number= 3;
const  claveCorrecta= "eureka";

let intento: number = 0;
let clave: string = '';

while (intento<intentosMax && clave!= claveCorrecta)
    {clave = rls.question("Ingrese clave de acceso ");
    intento++;}

if (clave!=claveCorrecta)
    {console.log("*ERROR* alcanzaste el maximo de intentos");} else
    {console.log("Bienvenido");}