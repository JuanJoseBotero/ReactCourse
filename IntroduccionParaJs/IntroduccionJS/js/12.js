const lista = [10, 20, 30, 40, 50];

for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]); // Imprimir cada elemento de la lista
}


// Utilizando forEach para recorrer la lista
lista.forEach(function(elemento, indice){
    console.log("Elemento ", indice, ":", elemento);
})

const lista2 = lista.map(function(elemento){
    return elemento * 2; // Multiplicar cada elemento por 2
})

console.log(lista2); // [20, 40, 60, 80, 100]