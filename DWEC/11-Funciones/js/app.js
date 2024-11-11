// /*   F U N C I O N   

//     function nombre_funcion(parametro1, parametro2){
//     tenemos q comprobar nosotros el tipo de dato q t va a pasar
//     no se pone ; despues de las llaves}
//     */


//     saludar(); //invoco antes de declarar funcion, se puede hacer tb
//     //con variable declarada con var

// function saludar(){
//     console.log("Hola que tal");
// }

// //hoisting o elevacion, cuando definimos estas funciones de forma basica, podemos invocar funcion antes de declararla

// // function saludar2(mensaje, para){
// //     if (para === undefined) {
// //         para = "usuarix";
// //     }
// //     return `Mensaje: ${mensaje}. Para: ${para}`;
// // }

// saludar2("Holi", "Pepe");//js no controla si le pasas bn el parametro ni el tipo

// console.log(saludar2("Holi", "Pepe"));

// console.log(saludar2("Holi", "Pepe", "AJA")); //3 parametros, son 2 y solo pilla los dos primeros

// console.log(saludar2("Holi"));  //1 argumento y deberian haber 2, sale el segundo como undefined

// console.log(saludar2()); //deberan ir 2 y no hay, solo sale undefined.

// //P A R A M E T R O S   X   D E F E C T O:

// function saludar2(mensaje, para="USER"){

//     return `Mensaje: ${mensaje}. Para: ${para}`;
// }

// //typeof de funciones
// console.log(typeof saludar2);
// console.log(typeof saludar2()); //en este caso la funcion devuelve string asi q ya te lo dice


//funcion que cuente el numero de numeros pares de un array cuentaPares(q se le pase un parametro de un array)
//comprobar q el parametro es un array, si no, sms, no se puede contar pares xq no es array
//si es array, contar numero de pares, 
//comprobar q todos los numeros sean NUMEROS, sms no puedo contar xq necesito numeros
//luego contar si es par o no par
//devuelve: el numero de pares es : 


function cuentaPares(arraydenums){
    let totalpares=0, totalimpares=0;
    if (Array.isArray(arraydenums)){      //SI ES ARRAY
        for(let num of arraydenums){
            if (typeof num === 'number'){  //SI ES NUMERO
                if(num % 2 == 0){    // SI ES PAR
                    totalpares++;
                }
                else{
                    totalimpares++;
                }
            }else{//SI NO ES NUMERO
                return `El numero ${num} no es número como tal`;
                break;
            }
        }
    }else{
        return `No es array`;
    }
    return `El numero de pares es ${totalpares}`;
}


console.log(cuentaPares([1,2,3]));

//vale con instaceof o con el metodo isarray


//   A S I G N A R   F U N C I O N E S   A   V A R I A B L E S
/*Funciones anonimas, no tienen propiedad de hoisting */

// const doble = function(num){
//     return 2*num;
// }

// console.log(doble(4));  //llamo a la función con la propia variable

//   A R R O W   F U N C T I O N S
/*Son funciones flecha que permiten omitir el return las llaves y function 
en funciones sencillas y pocas lineas de codigo,lo optimiza */

// const doblearrow = num => 2*num;
//se quita return xq es solo una linea?, no hay llaves 
//LAS ARROW FUNCTIONS NO TIENEN OISTING

// console.log(doblearrow(5));



