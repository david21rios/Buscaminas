let puntos = 0;
let minasTotales = 15; // Ajusta este número según el nivel
let tablero = []; // Aquí almacenarás el estado de cada celda en el tablero
const filas = 5; // Ajusta el número de filas según el tamaño del tablero
const columnas = 10; // Ajusta el número de columnas según el tamaño del tablero

function actualizarContadores() {
    document.getElementById('puntos').innerText = puntos;
    document.getElementById('minas-totales').innerText = minasTotales;
}

// Obtén el contenedor del tablero desde tu HTML
let contenedorTablero = document.querySelector('.tablero');

// Genera el tablero de juego
function generarTablero(filas, columnas) {
    // Crea un elemento de tabla
    let tabla = document.createElement('table');
    // Crea las filas y columnas del tablero
    for (let i = 0; i < filas; i++) {
        let fila = document.createElement('tr');
        const filaTablero = [];   //Crear la fila en el tablero
        for (let j = 0; j < columnas; j++) {
            let celda = document.createElement('td');
            celda.setAttribute('data-fila', i);
            celda.setAttribute('data-columna', j);
            // Agrega la celda a la fila
            fila.appendChild(celda);
            filaTablero.push(0);  //Asignar 0 a la celda
        }
        // Agrega la fila a la tabla
        tabla.appendChild(fila);
        tablero.push(filaTablero);  //Adicionar la fila al tablero
    }

    //Generar las posiciones al azar que van a contener las bombas, es decir, los 1
    tablero[0][5] = 1;
    tablero[1][2] = 1;
    tablero[2][9] = 1;
    tablero[3][0] = 1;

    // Agrega la tabla al contenedor del tablero
    contenedorTablero.appendChild(tabla);

    // Verificar la matriz (opcional, solo para comprobar)
    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            console.log(`Tablero[${i}][${j}] = ${tablero[i][j]}`);
        }
    }
}

// Llama a la función para generar el tablero con el número de filas y columnas deseados
generarTablero(filas, columnas);

// Crea una constante en la que se almacenan todos los td de la tabla del DOM
const celdas = document.querySelectorAll('td');

// Agrega un controlador de eventos de clic a cada celda de la tabla del DOM
celdas.forEach((celda) => {
    celda.addEventListener('click', () => {
        const fila1 = celda.getAttribute('data-fila');
        const col1 = celda.getAttribute('data-columna');
        console.log(`Fila1: ${fila1}, Columna1: ${col1}`);
        if (tablero[fila1][col1]==1) {
            celda.textContent = "💣";
            //clearInterval(intervalID);
            //reiniciarJuego();
            // Muestra un alert después de un breve retraso
            setTimeout(function() {
                alert('GAME OVER');
            }, 1);
        } else{
            celda.textContent = "😊";
        }
    });
});