// optional chaining
const user = {
    name: 'John',
    class: 'Math',
    grade: 10,
    exam: {
        subject: 'Math',
    }
    };

// Acceso a propiedades de un objeto con encadenamiento opcional
const userName = user?.name; // 'John'
const examGrade = user.exam?.grade; // undefined, ya que 'exam' no existe en el objeto
console.log(userName); // Imprime 'John'
console.log(examGrade); // Imprime undefined


//Nullish Coalescing Operator
const edad  = null
const userAge = edad ?? 18; // Si 'edad' es undefined o null, se asigna 18
console.log(userAge)


// && cortocircuito
const isLoggedIn = true;
const userStatus = isLoggedIn && 'Usuario autenticado'; // Si isLoggedIn es true, se asigna el valor de la derecha
console.log(userStatus); // Imprime 'Usuario autenticado'