const cliente = {
    nombre: "Juan",
    saldo: 1000,
    activo: true
}

const cliente2 = {
    nombre: "Pedro",
    saldo: 1500,
    activo: true,
    descripcion: {
        calle: "Calle Falsa",
    }
}

const {nombre, saldo} = cliente; // Desestructuración de objetos
const {nombre: nombre2, saldo: saldo2,  descripcion: { calle : calle1}} = cliente2; // Renombrar una propiedad al desestructurar asi para poder sacar de cliente2 el nombre y que no se confunda con el de cliente
console.log(nombre); // Juan
console.log(nombre2); // Pedro
console.log(saldo); // 1000
console.log(saldo2); // 1500
console.log(calle1); // Calle Falsa



