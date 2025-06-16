const lista = [10, 20, 30, 40, 50];

const posicion3 = lista[2]  // Mejor utilizar este método para acceder a un elemento específico
console.log(posicion3); // 30

const [primerElemento, segundoElemento, tercerElemento] = lista;
console.log(primerElemento); // 10
console.log(segundoElemento); // 20
console.log(tercerElemento); // 30

const [ , , , elemento4] = lista;
console.log(elemento4); // 40
