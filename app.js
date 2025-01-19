// Seleccionamos los elementos necesarios del DOM
const inputAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

// Array para almacenar los nombres
let nombresAmigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    const nombre = inputAmigo.value.trim(); // Obtenemos el valor y eliminamos espacios extra

    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    // Validamos que el nombre no esté repetido
    if (nombresAmigos.includes(nombre)) {
        alert('Este nombre ya está en la lista.');
        inputAmigo.value = '';
        return;
    }

    // Agregamos el nombre al array y a la lista visual
    nombresAmigos.push(nombre);
    const li = document.createElement('li');
    li.textContent = nombre;
    listaAmigos.appendChild(li);

    // Limpiamos el campo de texto
    inputAmigo.value = '';
}

// Función para sortear un amigo
function sortearAmigo() {
    if (nombresAmigos.length === 0) {
        alert('No hay nombres en la lista. Agrega amigos antes de sortear.');
        return;
    }

    // Generamos un índice aleatorio y obtenemos el nombre correspondiente
    const indiceAleatorio = Math.floor(Math.random() * nombresAmigos.length);
    const amigoSecreto = nombresAmigos[indiceAleatorio];

    // Mostramos el resultado
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong> 🎉</li>`;
}
