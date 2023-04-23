function horaActual() {
    let date = new Date();
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hour = date.getHours();
    return `${hour}:${minutes}:${seconds}`

}
console.log(horaActual());