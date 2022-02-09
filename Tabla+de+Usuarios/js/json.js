//OBJETOS
var vinicio = {
    "nombre": "Borja Vinicio",
    "edad": 23,
    "pais": "Mexico"
}

var doris = {
    "nombre": "Doris Borja",
    "edad": 23,
    "pais": "Mexico"
}

//ARRGOLOS -- UN ARREGLO TAMBINE PUDE TENER OBJETOS
var nombresAmigos = ['Alejandro','Manuel']
console.log(nombresAmigos[0]);
console.log(vinicio.nombre,doris.nombre);

// EJMPLOS de JSON - UN AREGLO DE OBJETOS
var amigos = [
    {
        "nombre": "Borja Vinicio",
        "edad": 23,
        "pais": "Mexico"
    },
    {
        "nombre": "Doris Borja",
        "edad": 23,
        "pais": "Ecuador"
    }
];

console.log(amigos[0].pais)