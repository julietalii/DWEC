//Instrucciones de entrada JS
/*
    confirm: cuadro dialogo con 2 botones aceptar cancelar
    devuelve un boolean true o false
    sintaxis: 
            let resultado = confirm("mensaje");
            const:
    prompt: cuadro de dialogo con un mensaje y opcional
    mensaje con instruccion y dos botones
    devuelve un string, null, o string vacio
    sintaxis;
        let dato = promp("mensaje", "instrucciones");
*/

/*let resultado = confirm("¿Quieres cerrar la ventana?");
console.log(resultado);*/

let dato = prompt ("introduce su edad");
/*console.log(dato);
console.log(typeof dato);*7


//Objeto Math, para generar numeros aleatorios,
/*no se crea con new, es estatico
Propiedad: 
Math.propiedad
Math.PI

Metodos:
math.metodo
round, ceil, floor, trunc, min, max, abs, sign, pow, random
*/

/*console.log(Math.trunc(3.5445345));
console.log(Math.rand(3.5445345));
console.log(Math.ceil(3.5445345));
console.log(Math.floor(3.5445345));
console.log(Math.sign(3.5445345)); 
console.log(Math.sign(-3.5445345));
console.log(Math.min(-3.5445345, -2, 4, -1)); //-2
console.log(Math.random()); //entre 0 y 1 (excluido el 1)
console.log(Math.floor(Math.random()*11));
//Numero aleatorio entre 5 y 15
Math.round(Math.random() * (15 - 5) + 5); //??*/
//control de flujo 
/**
 * if (condicion){
 * instrucciones del if;
 * }else if(condicion2){
 * intrucciones;
 * }else {
 * instrucciones; }
 * 
 * OPERADOR TERNARIO
 * (CONDICION) ? valor1 : valor2; se usa para condiciones sencillas
 * 
 */

//ejemplo:

/* let local = 3;
let visitante = 2;

if(local > visitante){
    console.log("Local gana");
} else if (visitante > local){
    console.log("Visitante gana");}
    else{
        console.log("Empate");
    }*/

//con ternario: 
/*console.log((local > visitante) ? "Local gana" :
 ((visitante>local)  ? "Visitante gana" : "Empate"));

  document.write("<h1>efe</h1>");*/



