"use strict";

const puntuaciones = [
    {
        equipo: "Toros Negros",
        puntos: [1, 3, 4, 2, 10, 8],
    },
    {
        equipo: "Amanecer Dorado",
        puntos: [8, 5, 2, 4, 7, 5, 3],
    },
    {
        equipo: "Águilas Plateadas",
        puntos: [5, 8, 3, 2, 5, 3],
    },
    {
        equipo: "Leones Carmesí",
        puntos: [5, 4, 3, 1, 2, 3, 4],
    },
    {
        equipo: "Rosas Azules",
        puntos: [2, 1, 3, 1, 4, 3, 4],
    },
    {
        equipo: "Mantis Verdes",
        puntos: [1, 4, 5, 1, 3],
    },
    {
        equipo: "Ciervos Celestes",
        puntos: [3, 5, 1, 1],
    },
    {
        equipo: "Pavos Reales Coral",
        puntos: [2, 3, 2, 1, 4, 3],
    },
    {
        equipo: "Orcas Moradas",
        puntos: [2, 3, 3, 4],
    },
];

let mejorEquipo = {
    nombre: null,
    total: null
}

let peorEquipo = {
    nombre: null,
    total: null
}

const compararResultados = (puntosEquipos) => {
    for (const puntosEquipo of puntosEquipos) {
        const equipoActual = {
            nombre: puntosEquipo.equipo,
            suma: puntosEquipo.puntos.reduce((acc, curr) => acc + curr)
        }
        // console.log(equipoActual)
        if (equipoActual.suma > mejorEquipo.total) {
            mejorEquipo.nombre = equipoActual.nombre
            mejorEquipo.total = equipoActual.suma
        }
        if (equipoActual.suma < mejorEquipo.total) {
            peorEquipo.nombre = equipoActual.nombre
            peorEquipo.total = equipoActual.suma
        }
    }
    console.log(`El mejor esquipo con ${mejorEquipo.total} puntos es ${mejorEquipo.nombre} y el peor equipo con ${peorEquipo.total} puntos es ${peorEquipo.nombre}.`)
}
compararResultados(puntuaciones)
