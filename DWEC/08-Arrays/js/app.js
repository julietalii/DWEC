//ARRAYS
/*
    Es un tipo de objeto
    Guarda varios datos
    Puede almacenar String, number, boolean,
    objetos(math, date, otros arrays...)

    Es una estructura dinámica,bno hay que indicar
    su tamaño en la creación y es heterogénea, puede contener
    diversos tipos de datos.

    Para acceder a los elementos, vamos al indice, 
    el array tiene indice numerico q comienza en 0
    y vale para acceder a los valores del array
 */
//CREACION
const colores=["verde", "rojo", "azul"];
const colores1 = []; //creo array vacio y luego le pongo datos;

//inserto los datos, si el array estuviera lleno se sobreescribe
colores1[0] = "verde";
colores1[1] = "rojo";
colores1[2] = "azul";

//constructor New, pero no se usa porque complica el codigo
//y es mas lento

const colores2 = new Array("Verde", "Rojo", "Azul");

//OPERADORES DE TIPO: typeof, instanceOf: indica si un elemento es instancia de otro dato
console.log(typeof colores);
console.log(typeof colores1);
console.log(typeof colores2);

console.log(colores instanceof Array); //true, devuelve valor booleano
console.log(colores instanceof Object);
console.log(Array.isArray(colores)); //true

/**
 * Array con datos de distintos tipos 
 */
let cierto = true;

const arrayConTodo = [2, "hola", true, Math.PI, new Date().getFullYear(), ["Pepe", 30, 612345678] ];

//Mostrar un array
console.log(arrayConTodo);
console.log(colores);
console.table(colores);
console.table(arrayConTodo);
//alert(colores);
//alert(arrayConTodo);

//document.write(colores);//escribe en mi propio html

//Propiedad del array: array.length

/**
 * for(let i=0; i<= condicion; i++){
 * }
 */

for(let i=0; i<colores.length; i++){
    console.log(colores[i]);
}

//variantes del for: for in, for of
const frutas = ["naranja", , "limon", , "melon"]; //puedo crear array con valores nulos
console.table(frutas);

//toString() visualiza el array con una cadena separada por comas
console.log(frutas.toString());
//arreglamos los undefined con lo if
for(let i=0; i<frutas.length; i++){
    if(frutas[i] != undefined){
        console.log(frutas[i]);
    }
    
}

//tb podemos usar for in 
/**sintaxis:
 *  for (let indice in nombreArray){
 *  nombreArray[indice]
 * }
 */
console.log("Usando for in: ")
  for (let indice in frutas){
    console.log(frutas[indice]);
 }