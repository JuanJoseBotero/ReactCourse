import {sumar, restar, sumaArrow, restaArrow} from './funciones.js';

const suma = sumar(5, 3);
const resta = restar(5, 3);
const sumaArrow1 = sumaArrow(5, 3);
const restaArrow1 = restaArrow(5, 3);
console.log(`La suma es: ${suma}`);
console.log(`La resta es: ${resta}`);
console.log(`La suma con arrow function es: ${sumaArrow1}`);
console.log(`La resta con arrow function es: ${restaArrow1}`);