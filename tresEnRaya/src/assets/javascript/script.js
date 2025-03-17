const casillas = document.querySelectorAll('.tablero .casilla')
let turn = true
casillas.forEach(function (casilla, index){
    casilla.textContent = index
    casilla.addEventListener('click', function () {
        if(turn){
            casilla.textContent = 'x'//sería casilla.style.setProperty('background)
        }
        else {
            casilla.textContent = 'o'
        }
        turn = !turn;
    })
})