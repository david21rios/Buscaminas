let puntos = 0;
let minasTotales = 15; // Ajusta este número según el nivel
let tablero = [
    [0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1],
    [0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1],
    [0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1]
]; // Aquí almacenarás el estado de cada celda en el tablero
let filas = 11; // Ajusta el número de filas según el tamaño del tablero
let columnas = 13; // Ajusta el número de columnas según el tamaño del tablero
const celdas = document.querySelectorAll('td');
function actualizarContadores() {
    document.getElementById('puntos').innerText = puntos;
    document.getElementById('minas-totales').innerText = minasTotales;
}
let celda;
function verificarCelda(fila, columna) {
    celda = celdas[fila * columnas + columna];
    if (tablero[fila][columna] === 1) {
        celdas.textContent = "💣";
        console.log("la celda ha sido rellenada");
        setTimeout(function() {
            alert('GAME OVER');
        }, 500);
        console.log('GAME OVER'); // Mostrar "Game Over"
    } else {
        puntos += 5; // Incrementar puntuación por cada celda no minada
        verificarCelda.textContent = "✔️";
        console.log("la celda ha sido rellenada");
         // Disminuir el contador de minas restantes
        actualizarContadores(); // Actualizar los contadores en el HTML
        // Lógica adicional para verificar si se alcanzó el final del juego
    }
}

// Resto de tu código...

// Obtén el contenedor del tablero desde tu HTML
let contenedorTablero = document.querySelector('.tablero');

// Genera el tablero de juego
function generarTablero(filas, columnas) {
    // Crea un elemento de tabla
    let tabla = document.createElement('table');

    // Crea las filas y columnas del tablero
    for (let i = 0; i < filas; i++) {
        let fila = document.createElement('tr');
        for (let j = 0; j < columnas; j++) {
            let celda = document.createElement('td');
            celda.setAttribute('data-fila', i);
            celda.setAttribute('data-columna', j);
            // Agrega un evento de clic a cada celda
            celda.addEventListener('click', function() {
                let filaClickeada = event.target.getAttribute('data-fila');
                let columnaClickeada = event.target.getAttribute('data-columna');
                verificarCelda(filaClickeada, columnaClickeada);
            });
            // Agrega la celda a la fila
            fila.appendChild(celda);
        }
        // Agrega la fila a la tabla
        tabla.appendChild(fila);
    }

    // Agrega la tabla al contenedor del tablero
    contenedorTablero.appendChild(tabla);
}

// Llama a la función para generar el tablero con el número de filas y columnas deseados
generarTablero(9, 11);