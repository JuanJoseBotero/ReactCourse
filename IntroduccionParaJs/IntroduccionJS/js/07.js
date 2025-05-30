const cliente = {
    nombre: "Juan",
    saldo: 1000,
    activo: true
}

const producto = {
    nombre: "Laptop",
    precio: 1500,
    disponible: true
}

// const carrito = {
//     cantidad: 2,
//     ...producto, // Spread operator para copiar las propiedades de producto
// }
// console.log(carrito); // { cantidad: 2, nombre: 'Laptop', precio: 1500, disponible: true }

// Combinando objetos con el spread operator, pero si hay keys con el mismo nombre, se sobrescriben
const nuevoObjeto = {
    ...cliente, // Spread operator para copiar las propiedades de cliente
    ...producto, // Spread operator para copiar las propiedades de producto
    descripcion: "Este es un objeto combinado" // Agregar una nueva propiedad
}
console.log(nuevoObjeto); // { producto: { nombre: 'Laptop', precio: 1500, disponible: true } }

const nuevoObjeto2 = Object.assign(cliente, producto, {descripcion: "Este es un objeto combinado"}); // Object.assign para combinar objetos
console.log(nuevoObjeto2); // { nombre: 'Juan', saldo: 1000, activo: true, precio: 1500, disponible: true, descripcion: 'Este es un objeto combinado' }