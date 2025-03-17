document.addEventListener('DOMContentLoaded', () => {
    const casillas = document.querySelectorAll('.tablero .casilla');//me coge tanto el tablero como las casillas
    const cuentaTurnos = document.querySelector('.turnoSiguiente');//me coge el apartado de "turnoSiguiente"
    let turn = true;

    casillas.forEach(function (casilla) {
        casilla.addEventListener('click', function () {
            if (casilla.textContent === '') { // para evitar casillas ya jugadas
                if (turn) {
                    casilla.textContent = 'X';
                    cuentaTurnos.innerHTML = 'Es el turno de O';//para .turnoSiguiente
                } else {
                    casilla.textContent = 'O';
                    cuentaTurnos.innerHTML = 'Es el turno de X';//para .turnoSiguiente
                }
                turn = !turn;
            }
        });
    });
});

