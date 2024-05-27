import * as rls from "readline-sync";

let empleado: number = rls.questionInt("Sueldo actual: ");

let pocertajeDescuento1: number = 0.20;
let pocertajeDescuento2: number = 0.1;
let pocertajeDescuento3: number = 0.05;

let aplicarDescuento1: number = empleado * pocertajeDescuento1;
let aplicarDescuento2: number = empleado * pocertajeDescuento2;
let aplicarDescuento3: number = empleado * pocertajeDescuento3;

let aumentoSueldo1: number = empleado + aplicarDescuento1;
let aumentoSueldo2: number = empleado + aplicarDescuento2;
let aumentoSueldo3: number = empleado + aplicarDescuento3;

if(empleado<15000)
    {console.log("Aumento de sueldo 20%: " + aumentoSueldo1)}
    
else if(empleado<20000)
    {console.log("Aumento de sueldo 10%: " + aumentoSueldo2)}

else if(empleado<25000)
    {console.log("Aumento de sueldo 5%: " + aumentoSueldo3)}

else if(empleado>24999)
    {console.log("No hay aumento")}