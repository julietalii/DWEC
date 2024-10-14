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

  //para ejercicio 2 nos muestre x consola buenos dias, ....
  /**objeto date 
   * objeto q permite crear y manipular fechas y horas
   * no es estativo, tengo que crearlo con new
   * sintaxis:
   * const fecha = new Date();
  */

  /*Métodos:
  getFulleYear(), getDate(), getDay, getHoURS(), GETMINUTES
  getmonth, getTime()

  const fecha = new Date();
  console.log(fecha);*/

  const fecha = new Date();
  console.log(fecha);
  console.log(fecha.getFullYear());
  console.log(fecha.getHours);
  console.log(fecha.getDate);
  console.log(fecha.getDay);
  console.log(fecha.getTime());

  //creamos dos fechas, 1/1/24 y 31-12 del 24

  const fecha1 = new Date("2024-1-1");
  console.log(fecha1);

  const fecha2 = new Date(2024,0,1);
  console.log(fecha2);

 const fecha3 = new Date("2024-12-31");

 let diferenciafecha = fecha3.getTime() - fecha1.getTime();
 let diferenciaDias = diferenciafecha /(1000*60*60*24)
 console.log(Math.round(diferenciaDias));


 //SWITCH
 /**
  * Sintaxis: 
  *     switch(expresion){
  *         case valor1:
  *             instrucciones si valor1 true;
  *             break;
  *         case valor2:
  *             instrucciones;
  *             break;
  *         default (no es necesario)
  *             instrucciones SIN BREAK;
  * }
  * TIENE COMPARACIONES ESTRICTAS
  */


 let nota = 5;
 switch(nota){
    case 1:
        console.log("Suspenso");
        break;
    case 2: 
        console.log("Suspenso");
        break;
    case 3:
        console.log("Suspenso");
        break;
    case 4:
        console.log("Suspenso");
        break;
    case 5:
        console.log("Aprobado");
        break;
    case 6:
        console.log("Bien");  
        break;
    case 7:
        console.log("Notable"); 
        break;
    case 8:
        console.log("Notable"); 
        break;
    case 9:
        console.log("Sobresaliente");
        break;
    case 10:
        console.log("Sobresaliente");
        break;
    default:
        console.log("Error");
 }


 //FOR
 /**
  * Sintaxis:
  *     for(expresionInicial; expresionCondicion; expresionActualizacion){
  *         instrucciones;
  * 
  * }
  */


 for(let i = 1; i<=10 ; i++){
    console.log(i);
 }
 //console.log(i) da error porque let es de bloque

 //omitimos expresion inicial, la creamos fuera

 let i=1;
 for( ; i<=10; i++){
    console.log(i);
 }
 console.log(i);//imprime 11

 for (let j = 1;  ; j++){  //omitimos segunda expresion
    if(j>10){
        break;
    }
    console.log(j);
 }

 for (let j = 1; j<=10; ){
        console.log(j);
        j++;
 }

 //continue: omite la interaccion y pasa a la siguiente
 for (let j = 1; j <= 10; j++){
    if(j%2===0){
        continue;
    }
    if(j>5){
        break;
    }
    console.log(j);
 }