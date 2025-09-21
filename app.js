// Lista para almacenar los nombres
let amigos = [];

// Función para validar que el nombre contenga solo letras y espacios
function esNombreValido(nombre) {
    // Expresión regular: solo letras mayúsculas, minúsculas y espacios
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    return regex.test(nombre);
}

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // Eliminar espacios al inicio y final

    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    if (!esNombreValido(nombre)) {
        alert("El nombre solo puede contener letras y espacios.");
        return;
    }

    // Agregar nombre a la lista de amigos
    amigos.push(nombre);

    // Limpiar el input
    input.value = "";

    // Actualizar la visualización de la lista
    mostrarLista();
}

// Función para mostrar la lista de amigos en pantalla
function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar lista antes de actualizar

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${amigo}`;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo aleatoriamente
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }

    // Elegir un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];

    // Mostrar el resultado en pantalla
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo secreto es: ${amigoSeleccionado}`;
}
