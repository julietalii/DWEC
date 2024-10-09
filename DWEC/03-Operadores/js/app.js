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