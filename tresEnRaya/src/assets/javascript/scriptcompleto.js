document.addEventListener('DOMContentLoaded', () => {
    const casillas = document.querySelectorAll('.tablero .casilla');
    const cuentaTurnos = document.querySelector('.turnoSiguiente');
    const victoriasX = document.createElement('h3');
    const victoriasO = document.createElement('h3');
    let turn = true;
    let victoriasXCount = 0;
    let victoriasOCount = 0;

    // Agregar las victorias al HTML
    const resultados = document.querySelector("#resultados div");
    victoriasX.textContent = "Victorias de X: 0";
    victoriasO.textContent = "Victorias de O: 0";
    resultados.appendChild(victoriasX);
    resultados.appendChild(victoriasO);

    // Combinaciones ganadoras en el tablero (índices de las casillas)
    const combinacionesGanadoras = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontales
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Verticales
        [0, 4, 8], [2, 4, 6]             // Diagonales
    ];

    // Función para verificar si alguien ha ganado
    function verificarVictoria() {
        for (let combinacion of combinacionesGanadoras) {
            const [a, b, c] = combinacion;
            if (casillas[a].textContent && casillas[a].textContent === casillas[b].textContent && casillas[a].textContent === casillas[c].textContent) {
                return casillas[a].textContent; // Retorna 'X' o 'O' si hay ganador
            }
        }
        return null;
    }

    // Función para reiniciar el tablero
    function reiniciarTablero() {
        casillas.forEach(casilla => casilla.textContent = "");
        turn = true;
    }

    casillas.forEach(casilla => {
        casilla.addEventListener('click', function () {
            if (casilla.textContent === '') { // Evita sobrescribir casillas jugadas
                casilla.textContent = turn ? 'X' : 'O';
                cuentaTurnos.innerHTML = turn ? 'Es el turno de O' : 'Es el turno de X';
                
                let ganador = verificarVictoria();
                if (ganador) {
                    alert(`¡${ganador} ha ganado!`); // Muestra un mensaje de victoria
                    if (ganador === 'X') {
                        victoriasXCount++;
                        victoriasX.textContent = `Victorias de X: ${victoriasXCount}`;
                    } else {
                        victoriasOCount++;
                        victoriasO.textContent = `Victorias de O: ${victoriasOCount}`;
                    }
                    reiniciarTablero(); // Reinicia el juego después de una victoria
                }

                turn = !turn; // Cambia el turno
            }
        });
    });
});
