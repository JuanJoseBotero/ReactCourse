// Agregar a arrays

const lista = [20, 30, 40, 50];
lista.push(60); // Agregar al final
lista.unshift(10); // Agregar al inicio
console.log(lista); // [10, 20, 30, 40, 50, 60]
// Eliminar de arrays
lista.pop(); // Eliminar del final
lista.shift(); // Eliminar del inicio
console.log(lista); // [20, 30, 40, 50]
// Buscar en arrays
console.log(lista.indexOf(30)); // 1
console.log(lista.includes(30)); // true

const nuevoElemento = 60;
const nuevaLista = [...lista, nuevoElemento]; // Crear una nueva lista con el nuevo elemento
console.log(nuevaLista); // [20, 30, 40, 50, 60]