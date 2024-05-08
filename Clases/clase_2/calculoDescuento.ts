import * as readlineSync from "readline-sync";

let precioProducto = readlineSync.questionInt("Ingrese el precio del producto:  ")

let pocertajeDescuento: number = 0.1;

let precioDescuento: number = precioProducto * pocertajeDescuento;

let precioFinal: number = precioProducto - precioDescuento;

console.log("El precio final de su producto es: " + precioFinal);