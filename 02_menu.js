// Se muestra la fecha del equipo
function horaActual() {
    let date = new Date();
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hour = date.getHours();
    return `${hour}:${minutes}:${seconds}`

}
// Preparacion del menu
function getEnsalada() {
    console.log(horaActual() + ' Ensalada Terminada');
    return 'Ensalada';
}

function getHamburguesa() {
    setTimeout(() => {
        console.log(horaActual() + ' Hamburguesa Terminada');
    }, 6000); // la hamburguesa va a terminar en 6 segundos

    return 'Hamburguesa JyQ';
}

function getBebida() {
    setTimeout(() => {
        console.log(horaActual() + ' Bebida Servida');
    }, 3000); // la bebida va a servirse en 3 segundos

    return 'Coca Cola';
}

// Llamo a las funciones
function preparar() {
    getEnsalada();
    getHamburguesa();
    getBebida();

}
preparar()