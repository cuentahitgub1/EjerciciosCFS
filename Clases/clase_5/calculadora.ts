import * as rls from "readline-sync";
let i : number, linea : string;

let numero1 : number = rls.questionInt("Ingrese un numero: "); 
let numero2 : number = rls.questionInt("Ingrese un numero: "); 
let opcionMenu : number = rls.questionInt("Ingrese 1 para sumar, 2 para restar, cualquier otro numero para salir: ");
   
function dibujarGuiones() {
   let i : number; let linea : string = "";
   for (i = 0; i <= 25; i++) 
       { linea = linea + "-";};	
       console.log(linea);}
   
     if (opcionMenu == 1){
         dibujarGuiones();
         console.log("El resultado es: ",numero1+numero2)
         dibujarGuiones();}

     else if(opcionMenu == 2){
         dibujarGuiones();
         console.log("El resultado es: ",numero1-numero2)
         dibujarGuiones();}

  
