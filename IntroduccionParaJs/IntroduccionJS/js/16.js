// Condicionales

const saldo = 1000;
const retirar = 500;

if (retirar <= saldo) {
    console.log("Retiro exitoso");
}
else {
    console.log("Saldo insuficiente");
}

// Comparador estricto "===" y "!="

const numero1 = 5;
const numero2 = "5";
if (numero1 !== numero2) {
    console.log("Son estrictamente iguales");
}
else {
    console.log("No son estrictamente iguales");
}

// Comparador no estricto "==" y "!="
if (numero1 == numero2) {
    console.log("Son iguales");
}
else {
    console.log("No son iguales");
}

// Operadores lógicos
const edad = 17;
const tieneLicencia = true;
const tieneChofer = true;

// And lógico (&&)

if (edad >= 18 && tieneLicencia) {
    console.log("Puede conducir");
}
else {
    console.log("No puede conducir");
}

// Or lógico (||)

if (edad < 18 || !tieneLicencia) {
    console.log("No puede conducir");
}

// Operador Ternario
// Condicional ternario para verificar si es mayor de edad, primero se evalúa la condición y si es verdadera se ejecuta la primera parte, si es falsa se ejecuta la segunda parte

edad >= 18 ? 
    console.log("Es mayor de edad") : 
    tieneChofer ?
        console.log("Puede conducir con chofer") :
        console.log("Es menor de edad"); 
