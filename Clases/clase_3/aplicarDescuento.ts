import * as rls from "readline-sync";

let precioProducto : number = rls.questionInt("Precio del producto: ");

let cantidadDeseada: number = rls.questionInt("Cantidad deseada del producto: ")

let precioCompra: number = precioProducto * cantidadDeseada
console.log ("Precio total: " + precioCompra)

let pocertajeDescuento: number = 0.1;

let aplicarDescuento: number = precioCompra * pocertajeDescuento;

let precioFinal: number = precioCompra - aplicarDescuento;


if (precioCompra>1000) 
    {console.log("Obtiene descuento 10% por su compra mayor a $1000")
    console.log ("Precio final: " + precioFinal)}

console.log ("!Gracias por su compra, vuelva pronto¡ ;)");