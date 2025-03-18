/*document.addEventListener('DOMContentLoaded', () => {
    const casillas = document.querySelectorAll('.tablero .casilla');//me coge tanto el tablero como las casillas
    const cuentaTurnos = document.querySelector('.turnoSiguiente');//me coge el apartado de "turnoSiguiente"
    let turn = true;

    casillas.forEach(function (casilla) {
        casilla.addEventListener('click', function () {
            if (casilla.textContent === '') { // para evitar casillas ya jugadas
                if (turn) {
                    casilla.style.setProperty('background-image','url(tresEnRaya\src\assets\css\imagenes\x_tiza.png)');
                    cuentaTurnos.innerHTML = 'Es el turno de O';//para .turnoSiguiente
                } else {
                    casilla.style.setProperty('background-image','url(tresEnRaya\src\assets\css\imagenes\circunferencia_tiza.png)');
                    cuentaTurnos.innerHTML = 'Es el turno de X';//para .turnoSiguiente
                }
                turn = !turn;
            }
        });
    });
});
*/
document.addEventListener('DOMContentLoaded', () => {
    const casillas = document.querySelectorAll('.tablero .casilla'); 
    const cuentaTurnos = document.querySelector('.turnoSiguiente'); 
    let turn = true; // Variable para alternar turnos

    casillas.forEach(function (casilla) {
        casilla.addEventListener('click', function () {
            if (casilla.textContent.trim() === '') { // verifica que la casilla esté vacía
                if (turn) {
                    casilla.style.backgroundImage = "url('./assets/css/imagenes/x_tiza.png')";
                    cuentaTurnos.textContent = 'Es el turno de O';
                } else {
                    casilla.style.backgroundImage = "url('./assets/css/imagenes/circunferencia_tiza.png')";
                    cuentaTurnos.textContent = 'Es el turno de X';
                }
                casilla.style.backgroundSize = "cover"; // que la imagen cubra la casilla
                casilla.style.backgroundPosition = "center"; 
                casilla.style.backgroundRepeat = "no-repeat"; // evita repeticiones de la imagen
                
                turn = !turn; 
            }
        });
    });
});
