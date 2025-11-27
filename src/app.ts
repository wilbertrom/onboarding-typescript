interface Producto {
  id: number;
  nombre: string;
  precio: number;
  disponible: boolean;
}

function calcularTotal(productos: Producto[]): number {
  return productos.reduce((acc, p) => acc + p.precio, 0);
}

const productos: Producto[] = [
  { id: 1, nombre: "Pan", precio: 10.5, disponible: true },
  { id: 2, nombre: "Mantequilla", precio: 25.0, disponible: true }
];

console.log("Productos:", productos);
console.log("Total:", calcularTotal(productos));
