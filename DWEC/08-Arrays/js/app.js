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
// alert(colores);
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
console.log(frutas);

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


 //miercoles:
 const diasTrabajo =["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
 const diasDescanso=["Sabado", "Domingo"];
 const diasSemana = diasTrabajo.concat(diasDescanso);
 console.log(diasSemana);

 const diasrevert = diasSemana.reverse();
 console.log(diasrevert);

 const diasordenados = diasSemana.sort();
 console.log(diasordenados);


 //Desestructuracion de Array
 const bebidas = ["Agua", "Café", "Vino" , , "Cerveza"];
 let [b1, b2, b3, b4, b5] = bebidas;
 console.log(b1);
 console.log(b2);
 console.log(b3);
 console.log(b4);
 console.log(b5);

 const array7 = ["j", "k", ,"h"];
 let[a1, a2, a3, a4] = array7;
 console.log(a1);
 console.log(a3);

 const array8 = array7;

 console.log(array7);
 console.log(array8);

 let [be1, be2, be3, , be5] = bebidas;
 console.log(be1);
 console.log(be2);
 console.log(be3);
 console.log(be5); //es igual a let b1 = bebids[0];


 //Operador de expansion, propagacion spread (...)
 const bebidas2 = bebidas; //esto no es hacer copia
 bebidas2[3] = "tea"; //el cambio va en bebidas2 y en bebidas EXAMEN
 console.log(bebidas);
 console.log(bebidas2);

 const bebidas3 = [...bebidas]; //extiende los valores de ese array ESTO SI Q ES UNA COPIA
 console.log(bebidas3);

 bebidas3[3] = "Fanta";
 console.log(bebidas3);
 console.log(bebidas);

 let [beb1, beb2, ...otrasBebidas] = bebidas;//creas otro array con el operador
 console.log(otrasBebidas); //al original no le pasa nada, se crea nuevo array con los valores dp del operador


 //ver array
 //for... in , accedo al indice
 for(let i in bebidas){
    console.log(bebidas[i]);
 }

 //for...of  accedo al valor
 for(let valor of bebidas){
    console.log(valor);
 }

 //Métodos de visualizar objetos
 /*Metodo values(), keys(), entries()
 values() valor obj iterable, del array, devuelve array con todos loa valores
 key claves, devuelve array con todos los valores
 entries accede al par clave-valor, accedes al indice y al propio valor y los devuelve
 en conjunto  */

 console.table(bebidas);

 const bebidasValores = bebidas.values();
 console.log([...bebidasValores]);
 for(let valor of bebidas.values()){
    console.log(valor);
 }

 for(let valor of bebidas.keys()){
    console.log(valor);
 }

 for(let valor of bebidas.entries()){
    console.log(valor);
 }

 for(let [clave,valor] of bebidas.entries()){
    console.log(`Clave: ${clave} y el valor es ${valor}`);
 }


 const listanums= [2,4, 1];
 console.log(Math.max(...listanums));

 console.log("Hola Mundo".indexOf("o"));