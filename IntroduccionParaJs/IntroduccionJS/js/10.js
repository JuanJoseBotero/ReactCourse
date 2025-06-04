/* // Agregar a arrays

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
 */

// Para react las listas se manejan de forma diferente
// Si quiero agregar un elemento a una lista en react, no se puede modificar la lista original
// Se debe crear una nueva lista con el nuevo elemento

let listaReact = [20, 30, 40, 50];
const nuevoElementoReact = 60;
let listaReact1 = [...listaReact, nuevoElementoReact]; // Crear una nueva lista con el nuevo elemento

console.log(listaReact); // [20, 30, 40, 50, 60]

// Si quiero eliminar un elemento de una lista en react, no se puede modificar la lista original
const elementoAEliminar = 30;
let listaReact2 = listaReact1.filter(function(elemento){
    if (elemento !== elementoAEliminar) {
        return elemento;
    }
})

console.log(listaReact2); // [20, 40, 50, 60]

// Si quiero modificar un elemento de una lista en react, no se puede modificar la lista original
const elementoAModificar = 70;
let listaReact3 = listaReact2.map(function(elemento){
    if (elemento === 60){
        return elementoAModificar; // Modificar el elemento
    }
    else {
        return elemento; // Dejar el elemento igual
    }
})
console.log(listaReact3); // [20, 40, 50, 70]
