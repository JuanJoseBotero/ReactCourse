// Objetos

const cliente = {
    nombre: "Juan",
    saldo: 1000,
    activo: true
}

console.log(cliente);
console.log(typeof cliente);
console.table(cliente); // Muestra el objeto en una tabla en la consola

// Acceder a las propiedades del objeto
const {nombre, saldo} = cliente;
const nombreCliente = cliente.nombre;
console.log(nombreCliente); // Juan
console.log(cliente.nombre); // Juan
console.log(nombre); // Juan
console.log(saldo); // 1000

// Crear un objeto

const autenticacion = true
const usuario = "Juan"

const clienteNuevo = {
    autenticacion,          // Shorthand property names, se usa el nombre de la variable como clave
    usuario1 : usuario,     // Se puede usar un nombre diferente para la clave
    saldo: 1000,
    activo: true
}
 