"use strict"

//********************************
//*** Medir y acceder a un arreglo
//el muestreo depende del precio?

const vehiculos = [{
    marca: 'Peugeot',
    modelo: '206',
    puertas: 4,
    precio: 200000,
},
{
    marca: 'Peugeot',
    modelo: '208',
    puertas: 4,
    precio: 250000,
},
{
    marca: 'Honda',
    modelo: 'Titan',
    cilindrada: '150cc',
    precio: 60000.00, 
},
{
    marca: 'Yamaha',
    modelo: 'YBR',
    cilindrada: '160cc',
    precio: 80500.50,
}];



vehiculos.sort((a, b) => b.precio - a.precio);

  
//console.log(vehiculos);


//primero
var primero = vehiculos[0];

console.log("=============================");
console.log("Vehículo más caro:", primero);
//ultimo
var buscaUltimo = vehiculos.length;
buscaUltimo--;
//console.log(buscaUltimo);
var ultimo = vehiculos[buscaUltimo];
console.log("Vehículo más barato:" ,ultimo);

//Busco Y
var search = vehiculos.filter(i => i.modelo > "Y")
console.log("Vehículo que contiene en el modelo la letra ‘Y’:",search);


//como ya está ordenado solo lo muestro.
console.log("Ordenados por precio:",vehiculos);
//for( let contador=0; contador <= buscaUltimo; contador++ ) {
//    console.log( "Marca: [" + vehiculos[contador].marca + "] Modelo: [" + vehiculos[contador].modelo + "] Cilindrada: [" + vehiculos[contador].cilindrada + "] Precio: [" + vehiculos[contador].precio + "] " );
//}



console.log("=============================");