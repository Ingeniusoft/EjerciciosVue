// Variables globales

const formularioUsuario = document.querySelector('#formulario');
const alertasUsuario = document.getElementsById('alertas');
let arrayAlertas = [];

// Funciones

const crearObjeto = (ejercicio)=> {
    let objetoAlertas = {
        ejercicio: ejercicio,
     estado: false
     }

     arrayAlertas.push(objetoAlertas);

     return objetoAlertas;
}

const GuardarDB = () => {
    localStorage.setItem('rutina', JSON.stringify(arrayAlertas));
}

const leerDB = () => {
    alertasUsuario.innerHTML = '';
}

// EventListener

formularioUsuario.addEventListener('submit', (e) => {
    e.preventDefault();//Para que no refresque el sitio web
    let inputEjercicioUsuario = querySelector('#inputEjercicio').value;

    crearObjeto(inputEjercicioUsuario);
    GuardarDB();

    formularioUsuario.reset();
});

document.addEventListener('DOMContentLoaded', leerDB);
