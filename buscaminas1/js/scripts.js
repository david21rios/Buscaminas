// Inicializacion del tablero con minas
let tablero = [
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0]
];

let intervalID;
// Obtén todas las celdas de la tabla
const celdas = document.querySelectorAll('td');
console.log(celdas)
// Agrega un controlador de eventos de clic a cada celda
celdas.forEach((celda) => {
    celda.addEventListener('click', () => {
        // alert(`Clic en la celda ${index + 1}: ${celda.textContent}`);
        const celdaId = celda.id;
        const fila = celdaId[0];
        const col = celdaId[2]; 
        if (tablero[fila][col]==1) {
            celda.textContent = "💣";
            clearInterval(intervalID);
            
            // Muestra un alert después de un breve retraso
            setTimeout(function() {
                alert('GAME OVER');
                reiniciarJuego();
            }, 1);
            
        } else{
            celda.textContent = "😊";
            manejarClicCeldaLibre(fila,col);
        }
    });
});
function limpiarTablero() {
    celdas.forEach(celda => {
        celda.textContent = ''; // Limpiar el contenido de la celda
    });
}
function reiniciarJuego(){
    puntos= 0;
    puntosElement.innerText = puntos;
    tablero = [
        [0,1,0,0,0],
        [0,0,1,0,0],
        [0,0,0,1,0]
    ];
    limpiarTablero();
}

console.log("implementaremos los puntos");
let puntos = 0;
const puntosElement = document.getElementById('puntos');

// Aquí asumimos que tienes una función manejarClicCeldaLibre para manejar el clic en una celda libre de minas.
function manejarClicCeldaLibre(fila,col) {
    if(tablero[fila][col]==0){
        puntos += 5;       
        puntosElement.innerText = puntos; 
        console.log("Puntos incrementados a: " + puntos);
    } else{
        console.log(puntos);
    }
}
