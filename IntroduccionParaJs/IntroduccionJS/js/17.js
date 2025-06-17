// optional chaining
const user = {
    name: 'John',
    class: 'Math',
    grade: 10
    };

// Acceso a propiedades de un objeto con encadenamiento opcional
const userName = user?.name; // 'John'
const examGrade = user?.exam?.grade; // undefined, ya que 'exam' no existe en el objeto
console.log(userName); // Imprime 'John'
console.log(examGrade); // Imprime undefined


//Nullish Coalescing Operator
const userAge = user?.age ?? 18; // Si 'age' es undefined o null, se asigna 18
console.log(userAge)