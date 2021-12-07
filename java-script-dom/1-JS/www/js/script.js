'use strict'



const game = (attempts) => {
    const password = Math.floor(Math.random() * 10)
    console.log(password)
    for (let i = 1; i <= attempts; i++) {
        const insertPassword = prompt('Por favor, introduzca un número entre 0 y 100')
        if (+insertPassword === password) {
            return true
        }
    }
    return false
}

game(5) ? alert('Has ganado!!!') : alert('Has perdido!!!')







