// Ejemplo de uso de querySelector y querySelectorAll para seleccionar elementos del DOM
const heading = document.querySelector('.heading');

console.log(heading);
console.log(heading.textContent);

const enlaces = document.querySelectorAll('.navegacion a');

console.log(enlaces);

// Modificar elementos del DOM
heading.textContent = 'Nuevo Heading';
heading.id = 'nuevo-id';
heading.classList.add('nueva-clase', 'otra-clase');
heading.classList.remove('otra-clase');

// Eventos del DOM
heading.addEventListener('click', () => {
    heading.textContent = 'Has hecho clic en el heading';
})

// Eventos del DOM - Input
const input = document.querySelector('#nombre');
input.addEventListener('input', (e) => {
    console.log(e.target.value);
});

const password = document.querySelector('#password');
password.addEventListener('input', (e) => {
    password.type = "text";
    setTimeout(() => {
        password.type = "password";
    }
    , 700);
})


// Eventos del DOM - Submit

const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', e => {
    e.preventDefault()
    const nombre = document.querySelector('#nombre').value;
    const password = document.querySelector('#password').value;
    console.log(`Nombre: ${nombre}, Password: ${password}`);

    const existeAlerta = document.querySelector('.alerta');
    /* if (existeAlerta) {
        existeAlerta.remove();
    } */
    existeAlerta?.remove();

    const alerta = document.createElement('div');
    alerta.classList.add('alerta', 'text-white', 'uppercase', 'text-sm', 'p-2', 'font-black', 'text-center');


    if (nombre === '' || password === '') {
        alerta.textContent = 'Todos los campos son obligatorios';
        alerta.classList.add('bg-red-500');

    } else {
        alerta.textContent = 'Formulario enviado correctamente';
        alerta.classList.add('bg-green-500');
        setTimeout(() => {
        alerta.remove();
    }, 3000);
    }

    formulario.appendChild(alerta);
    
})



