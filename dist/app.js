"use strict";
function calcularTotal(productos) {
    return productos.reduce((acc, p) => acc + p.precio, 0);
}
const productos = [
    { id: 1, nombre: "Pan", precio: 10.5, disponible: true },
    { id: 2, nombre: "Mantequilla", precio: 25.0, disponible: true }
];
console.log("Productos:", productos);
console.log("Total:", calcularTotal(productos));
