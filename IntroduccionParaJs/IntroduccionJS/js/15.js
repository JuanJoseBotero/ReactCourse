// Array methods

const numbers = [1, 2, 3, 4, 5];
const words = ["hello", "world", "javascript", "functions"];

// Filter: Create a new array with elements that pass a test

const evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0; // Retorna los números pares
})

console.log(evenNumbers); // Imprime [2, 4]

// Inclides: Check if an array includes a certain value
const includesThree = numbers.includes(3); // Verifica si el número 3 está en el array

console.log(includesThree); // Imprime true si el número 3 está en el array

// Some : Check if at least one element in the array passes a test
const hasEvenNumer = numbers.some((num) => {
    return num === 10; // Verifica si hay un 10 en la lista
})

console.log(hasEvenNumer); // Imprime true si hay al menos un número par

// Find: Returns the first element in the array that passes a test
const firstEvenNumber = numbers.find(function(num) {
    return num % 2 === 0; // Retorna el primer número par
})

console.log(firstEvenNumber); // Imprime el primer número par del array

// Every: Check if all elements in the array pass a test
const allEvenNumbers = numbers.every((num) => {
    return num % 2 === 0; // Verifica si todos los números son pares
})

// Reduce: Apply a function against an accumulator and each element in the array (from left to right) to reduce it to a single value
const sum = numbers.reduce((accumulator, currentValue) => {
    console.log(accumulator, currentValue); // Imprime el acumulador y el valor actual en cada iteración
    return accumulator + currentValue; // Suma todos los números del array
}, 0); // El valor inicial del acumulador es 0

 // Imprime la suma total de los números en el array