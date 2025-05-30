const cliente = {
    nombre: "Juan",
    saldo: 1000,
    activo: true
}

cliente.nombre = "Pedro"; // Modificar una propiedad del objeto
console.log(cliente.nombre); // Pedro

cliente.apellido = "Perez"; // Agregar una nueva propiedad al objeto
console.log(cliente.apellido); // Perez
console.log(cliente); // { nombre: 'Pedro', saldo: 1000, activo: true, apellido: 'Perez' }

delete cliente.activo; // Eliminar una propiedad del objeto
console.log(cliente); // { nombre: 'Pedro', saldo: 1000, apellido: 'Perez' }

Object.freeze(cliente); // Congela el objeto, no se pueden modificar sus propiedades
Object.seal(cliente); // Sella el objeto, no se pueden agregar nuevas propiedades, pero se pueden modificar las existentes