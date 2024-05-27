import * as rls from "readline-sync";

let Ingreso = rls.question("Ingrese nombre de usuario: ");
let Clave = rls.question("Ingrese clave: ");

if (Ingreso == "Juan"){
  (Clave == "claveJuan")
    {console.log ("Bienvenido")}

}else 
{console.log("Nombre de usuario o clave son incorrectas. Vuelva a intentarlo")}

