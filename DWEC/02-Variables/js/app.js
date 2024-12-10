//VARIABLES var,let, cons
//redeclarar
var cosa= "mesa";
var cosa="silla"; // var si permite redeclara, pero apartir de 2015 no se usa. 


let cosa2="mesa";
// let cosa2="silla"; 
            // da error porque es mas restrictivo y no deja REdeclarar


const cosa3="mesa";
// const cosa3="silla";
// da error ya que no se puede REdeclarar const.


//reasignar

var asunto= "variables";
asunto="otro tema";
    // var si que permite reasignar valores

let asunto2="variables";
asunto2="otro tema";

    // let tambien permite reasignar

const asunto3="variables";
// asunto3="otro tema";
console.log(asunto3);

//Asignar sin valor: var SI,let SI, const NO

var sinvalor;
let sinvalor2;
// const sinvalor3; NO DEJA


//ÁMBITO DE LAS VARIABLES: alcance, desde donde es accesible una variable.
/*
    global: todo el documento
    función: dentro de la función
    bloque: {} dentro del bloque 
*/

//ámbito de var
//creo un bloque 
{
    var variable1 = "hola";
    console.log(variable1);
}
console.log(variable1); 
// var no tiene ambito de bloque, es global. 


//ámbito de let
//creo un bloque
{
    let variable2="como estas";
    console.log(variable2);
}
   // console.log(variable2); 
   // let tiene ambito de bloque, si se define en bloque ese es su alcance.


//ambito const
// creo bloque 
{
    const variable3="que tal";
    console.log(variable3);
}
   // console.log(variable3); 
    // da error fuera del bloque , como que no está definido.
    
 // RESUMEN AMBITO: LET Y CONST AMBITO DE BLOQUE
 


 // Ahora al revés. Creo variable y después bloque.

 var prenda="camisa";
 console.log(prenda);
 {
    var prenda="pantalón"
    console.log(prenda);
 }
 console.log(prenda);

 // Se queda con el valor que se le da en el bloque


 // let
 let prenda1="Sudadera";
 console.log(prenda1); //sudadera
 {
    let prenda1="Chaqueta"
    console.log(prenda1); //chaqueta
 }
 console.log(prenda1); //sudadera

 //Al salir vuelve a imprimir el primer valor, porque deja redeclarar porque piensa
 //que es otra variable diferente. 
 //const 
 const prenda2="Traje";
 console.log(prenda2); //traje
 {
    const  prenda2="Chandal";
    console.log(prenda2); //chandal
 }
 console.log(prenda2); //traje 
 //En el caso de const deja declarar otra vez porque 
 // piensa que es otra variable. Al salir del bloque imprime el primer valor


//Ámbito FUNCIÓN

/*
function saludar(){
    //código js
    var saludo="hola";
    console.log(saludo);
}
*/

// AHORA REDECLARANDO

var pieza="tornillo";
 console.log(pieza); //tornillo 
 {
     pieza="arandela"
    console.log(pieza); // arandela
 }
 console.log(pieza); // tornillo



 // let
 let pieza2="LLave";
 console.log(pieza2); //LLave
 {
     pieza2="Martillo"
    console.log(pieza2); //Martillo
 }
 console.log(pieza2); //Martillo


 let cosa4="SI";
 {
    console.log(cosa4)
 }

 //TIPOS DE DATOS PRIMITIVOS

/*
        String
        Number
        Boolean
        null
        undefindes
        BUSCAR <- BigInt y Symbol
        BigInt: Tipo Numero espeical que es de tamaño arbitrario. Numero mayor de 2^53
        Symbols: Se usa para añadir claves de propiedades unicas a un objeto y que no sea iguales a las claves de otros productos.
        Hace que las propieades estén ocultas a otro codigo que quiera acceder al objeto.
*/

// String
let cadena1= "Soy una cadena";
let cadena2= 'Soy una cadena';
let cadena3="Soy una 'cadena'";
let cadena4='Soy una "cadena"';
let cadena5= "Soy una \"cadena\"";
let cadena6= `soy una cadena`; //plantilla de cadena, une texto y variables
let cadena7= "b"; // no hay char

//Operador de tipo typeof: el tipo de dato que es una variable

console.log(typeof cadena7);
 
//Number
let numero1= 3;
let numero2= 3.54;
let numero4=-4; //no hay distinción
let numero5=12e5; // exponencial
let numero6=12e-5;
console.log(numero6);

//concatenar
//mediante +
console.log("valor: "+  numero6+ " su tipo es: "+ typeof numero6);
//mediante $
console.log(`valor: ${numero6} su tipo es: ${typeof numero6}`);

//Boolean
let cierto= true;
let falso= false;

console.log(`Valor ${cierto} su tipo de dato es: ${typeof cierto}`);


let numero7= "4";
console.log(`valor ${numero7} y su tipo es ${typeof numero7}`);
console.log(4+5+numero7);


//Undefined 
let noDefinido; //sin valor, por defecto es undefined
console.log(`valor ${noDefinido} y su tipo es ${typeof noDefinido}`);
        //Hay  un tipo de dato que es no definido.
noDefinido= undefined; // puedo darle de nuevo ese valor. 

//null

let nulo=null;
console.log(`valor ${nulo} y su tipo es ${typeof nulo}`);
    //el tipo es objeto. 