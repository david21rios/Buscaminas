let tablero = [];
let intervalID;
let puntos = 0;
const puntosElement = document.getElementById('puntos');
const numFilas = 9;
const numColumnas = 11;
const numMinas = 10;
let juegoTerminado = false;

// Función para crear el tablero dinámicamente
function crearTablero() {
    const tableroElement = document.querySelector('.tablero table');
    tableroElement.innerHTML = ''; // Limpiar el contenido del tablero

    for (let i = 0; i < numFilas; i++) {
        const fila = document.createElement('tr');
        for (let j = 0; j < numColumnas; j++) {
            const celda = document.createElement('td');
            celda.id = `${i},${j}`;
            celda.addEventListener('click', () => manejarClicCelda(celda, i, j));
            fila.appendChild(celda);
        }
        tableroElement.appendChild(fila);
    }
}

// Función para manejar el clic en una celda
function manejarClicCelda(celda, fila, col) {
    if (juegoTerminado) return;

    if (tablero[fila][col] == 1) {
        celda.innerHTML = '💣';
        clearInterval(intervalID);
        juegoTerminado = true;
        setTimeout(function() {
            alert('GAME OVER');
            reiniciarJuego();
        }, 100);
    } else {
        celda.innerHTML = '🚢';
        manejarClicCeldaLibre(fila, col);
    }
}

// Función para manejar el clic en una celda libre de minas
function manejarClicCeldaLibre(fila, col) {
    if (tablero[fila][col] == 0) {
        puntos += 5;
        puntosElement.innerText = puntos;
    }
}

// Función para limpiar el tablero
function limpiarTablero() {
    document.querySelectorAll('td').forEach(celda => {
        celda.innerHTML = '';
    });
}

// Función para reiniciar el juego
function reiniciarJuego() {
    puntos = 0;
    puntosElement.innerText = puntos;
    colocarMinasAleatorias();
    limpiarTablero();
    crearTablero();
    juegoTerminado = false;
}

// Función para colocar minas aleatoriamente en el tablero
function colocarMinasAleatorias() {
    // Inicializar el tablero vacío
    tablero = Array.from({ length: numFilas }, () => Array(numColumnas).fill(0));

    // Colocar minas aleatoriamente
    let minasColocadas = 0;
    while (minasColocadas < numMinas) {
        const fila = Math.floor(Math.random() * numFilas);
        const col = Math.floor(Math.random() * numColumnas);
        if (tablero[fila][col] === 0) {
            tablero[fila][col] = 1;
            minasColocadas++;
        }
    }
}

// Inicializar el tablero al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    colocarMinasAleatorias();
    crearTablero();
});
