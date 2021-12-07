'use strict'

// localizar body
const main  = document.querySelector('body')

// tiempo actual en movimiento
setInterval(() => {
    const currentTime = new Date()
    const hours = ('0' + currentTime.getHours()).slice(-2)
    const minutes = ('0' + currentTime.getMinutes()).slice(-2)
    const seconds = ('0' + currentTime.getSeconds()).slice(-2)
    const time = (`${hours} : ${minutes} : ${seconds}`)
    // creando HTML para ubicar el reloj
    document.body.innerHTML = `
    <div>
        <form name="form_oclock">
            <input class="oclock" type="text" name="oclock">
        </form>
    </div>
    `
    document.form_oclock.oclock.value = time
}, 1000)



