// Funciones - Funciones declarativas

function primeraFuncion() {
    console.log("Hola, esta es mi primera función en JavaScript");
}

// Funciones - Funciones expresivas. La diferencia es que las funciones expresivas se pueden asignar a una variable o constante y primero se debe declarar la función antes de usarla, mientras que las funciones declarativas se pueden usar antes de ser declaradas.

const segundaFuncion = function(numero1, numero2) {
    console.log(numero1 + numero2); // Sumar dos números y devolver el resultado
}

// Funciones - Funciones flecha. Son una forma más concisa de escribir funciones expresivas y no tienen su propio contexto de `this`.

const terceraFuncion = (numero1, numero2) => {
    console.log(numero1 + numero2); // Sumar dos números y devolver el resultado
}

// Funciones que retornan valores. Las funciones pueden devolver un valor utilizando la palabra clave `return`.
const cuartaFuncion = function(numero1, numero2) {
    return numero1 + numero2; // Sumar dos números y devolver el resultado
}

function quintaFuncion() {
    return "Hola, esta es mi quinta función en JavaScript"; // Retornar un mensaje
}

const sextaFuncion = (numero1, numero2) => {
    return numero1 + numero2; // Sumar dos números y devolver el resultado
}

primeraFuncion(); // Llamar a la función declarativa
segundaFuncion(5, 10); // Llamar a la función expresiva con dos números
terceraFuncion(15, 20); // Llamar a la función flecha con dos números

const resultadoCuartaFuncion = cuartaFuncion(25, 30); // Llamar a la función que retorna un valor
console.log(resultadoCuartaFuncion); // Imprimir el resultado de la cuarta función
console.log(quintaFuncion()); // Llamar a la quinta función y mostrar el mensaje retornado