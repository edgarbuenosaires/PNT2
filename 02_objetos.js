// Objetos
const persona = {
    nombre: 'Edgardo',
    apellido: ' Aguirre',
    edad: ' 37',

    saludar() {
        return `hola ${this.nombre}`;
    }
}

console.log(persona.edad)
console.log(persona.saludar())

const persona2 = {
    nombre: 'Pedro',
    apellido: ' Perez',
    edad: ' 73',

    saludar() {
        return `hola ${this.nombre}`;
    }
}

const persona3 = {
    nombre: 'Maria',
    apellido: ' Lopez',
    edad: ' 25',

    saludar() {
        return `hola ${this.nombre}`;
    }
}


// agrupo las tres personas en un array

const myArray = [persona, persona2, persona3]

// aplico filter
console.log(myArray.filter(elemento => elemento.edad>50))





