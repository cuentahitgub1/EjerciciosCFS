import * as rls from "readline-sync";

let precioProducto : number = rls.questionInt("Precio Unitario: ");
let cantidad: number = rls.questionInt("Cantidad: ")
let precioCompra: number = precioProducto * cantidad
console.log ("Precio total: " + precioCompra)


let pocertajeDescuento: number = 0.15;
let aplicarDescuento: number = precioCompra * pocertajeDescuento;
let precioFinal: number = precioCompra - aplicarDescuento;


let Mes = rls.question("Mes actual: ")

if (Mes == "octubre") 
    {console.log("Obtiene descuento 15% por cumpleaños de la tienda")
    console.log ("Precio final: " + precioFinal)}

console.log ("!Gracias por su compra, vuelva pronto¡ ;)");