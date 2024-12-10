//operadores asignacion = += -= *= /=
/**operadores aritmeticos: +  -  /  %  *
 * operadores de comparacion == === != !== < > <=  >==
 * 
 * == compara valor
 * === compara valor y tipo de dato
 * 
 * operadores logicos &&  ||  !
 * precedencia operaciones
 */

let valor = 3;
let valor2= "3";
console.log(valor == valor2); //devuelve true
console.log(valor === valor2); //devuelve false por el tipo

/**
 * != no estricta
 * !== estricta
 */

console.log(valor != valor2);
console.log(valor !== valor2);

let x = 10;
let y = 20;
let z = "10";
let resultado;
resultado = x + y + z;//da: 3010
console.log(resultado);




/********************************************* */
//operadores aisgnaciónm = += -= *= /=
let numero=3;
console.log("Operadores asignación");
numero+=2;
console.log(numero);
console.log(numero-=1);
console.log(numero*=2);
console.log(numero/=2);


//operadore aritméticos + - / % *
console.log("Operadores aritmécitos");
console.log(numero+2);



//operadores comparación == === != !== < > >= <=
let valor3 = 3;
let valor4 ="3";
/* == compara valor 
 ==== compara valor y tipo de dato */


console.log(valor == valor2);
console.log(valor === valor2);
console.log("Uso de != y !== ")

// != no estricta
console.log(valor!= valor2);
// !== estricta 
console.log(valor!== valor2);



//operadores lógico && || !

//precedencia operaciones 

let x2 =10;
let y2=20;
let z2="10";

let resultad;
resultado= x+ y + z;
// suma los numericos y concatena el string.Preferencia de izquierda a derecha

console.log(resultado);
