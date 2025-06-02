const producto = "Tablet"
const precio = 300;
const disponible = true;

console.log("En la tienda tenemos una " + producto + " que cuesta $" + precio + " y está disponible: " + disponible);

// Usando template literals para mejorar la legibilidad
console.log(`En la tienda tenemos una ${producto} que cuesta $${precio} y está disponible: ${disponible}`);