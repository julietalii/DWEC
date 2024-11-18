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


// function cuentaPares(arraydenums){
//     let totalpares=0, totalimpares=0;
//     if (Array.isArray(arraydenums)){      //SI ES ARRAY
//         for(let num of arraydenums){
//             if (typeof num === 'number'){  //SI ES NUMERO
//                 if(num % 2 == 0){    // SI ES PAR
//                     totalpares++;
//                 }
//                 else{
//                     totalimpares++;
//                 }
//             }else{//SI NO ES NUMERO
//                 return `El numero ${num} no es número como tal`;
//                 break;
//             }
//         }
//     }else{
//         return `No es array`;
//     }
//     return `El numero de pares es ${totalpares}`;
// }


// console.log(cuentaPares([1,2,3]));

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


/*M E T O D O S   F O R E A C H, M A P   Y    */
/*Metodo foreach: permite iterar sobre los elementos
de array, set y map

No devueñve un nuevo array, no modifica el array original
No puedo parar el ciclo de iteracion con break, continue
No renderiza return:

S I N T A X I S:
array.forEach(funcion_anonima(parametro1: elemento, param2: indice, param3: array original)){
istrucciones ; }
elem al q esta accediendo en cada iteracion
*/

// const desayunos = ["yogur", "petisuis", "rollo canela"];
// desayunos.forEach(function(elemento){
//     console.log(elemento); //me visualiza los elementos del array
// });

// /*con arrowfunction:  */
// desayunos.forEach(d = console.log(d));

// //foreach en sets
// const conjunto = new Set(["hola", "adios", "bye"]);
// conjunto.forEach(function(slaudo){
//     console.log(saludo);
// });

// conjunto.forEach(s => console.log(s));

// //foreach en mapa
// const mapa = new Map([
//     [1, "hola"],
//     [2, "adios"],
//     [2, "bye"]
// ]);

// mapa.forEach(function(elemento, indice){
//     console.log(`Indice: ${indice} elemento: ${elemento}`);
// })

// mapa.forEach((e,i) => console.log(`Indice: ${i} elemento: ${e}`));


//array con edades de alumnos, con foreahc realizamos el conteo de +18
//array con notas y hacemos media





const edades = [19, 18, 7, 14, 5, 23, 19];
let contmayores = 0;
edades.forEach(function(alumno){
    if (alumno>=18){
        contmayores++;
    }
})
console.log(`Numero de mayores de edad: ${contmayores}`)

//con arrow:
// desayunos.forEach(d => console.log(d));


const notas = [9, 8, 7, 6, 5, 4, 3];
let nota = 0;

let total=0;
notas.forEach(function(alumno){
    nota = nota + alumno;
})
console.log(`La media es: ${nota/notas.length}`);


//como lo hace iria:
 const edadesn = [16,19, 24,17, 36, 40];
 function contarMayores(array){
    let mayores = 0; //si no se inicializa sale como undefined.
    array.forEach(function(edadn){
        if(edadn>=18){
            mayores ++;
        }
    });
    return mayores;
}
console.log(contarMayores(edades));

//como hacer el sig:  
const notasn = [9, 8, 7, 6, 5, 4, 3];
function median(array){
   let notasp = 0; //si no se inicializa sale como undefined.
   array.forEach(function(alumno){
       notasp = notasp + alumno;
   });
   return (notasp/notasn.length);
}
console.log(median(notasn)); /*pasar el array */

//arrow function: 
const edadesi = [16,19, 24,17, 36, 40];
function contarMayores(array){
   let mayores = 0; //si no se inicializa sale como undefined.
   array.forEach( edadi =>{
       if(edadi>=18){
           mayores ++;
       }
   });
   return mayores;
}
console.log(contarMayores(edades));


//LoS MISMOS EJERCICIOS PERO CON MAP
//Es como el foreach, itera sobre elemn del array, sobre conjuntos
//lo q hace distinto es q devuelve un nuevo array

/*SINTAXIS:
const nuevoArrray = array.map(function(elemento, indice, valor){
    instrucciones
}) */


//consigue nuevo array con elementos pares
const numeros2 = [1,2,3,4,5,6,7];

const mapa = new Map([
    [1, "hola"],
    [2, "adios"],
    [2, "bye"]
]);

mapa.forEach(function(elemento, indice){
    console.log(`Indice: ${indice} elemento: ${elemento}`);
})

const pares = new Map([
    [1, 1],
    [2,2],
    [3,3],
    [4,4],
    [5,5],
    [6,6],
    [7,7]
]);

pares.forEach(function(par, indice){
    let contpares = [];
    if(pares %2 ==0){
        contpares.push(pares);
    }
    console.log(contpares);
})



//consifue nuevo array con las pañabras de mas de 4 letras


/*******************************************************
 *                                                     *
 *                     18 NOV 2024                     *
 *                                                     *
 *******************************************************/

/*MAP TRANSFORMA ELEMENTOS DE ARRAY PERO NO FILTRA: */
const numeros =[2,3,4,1];

const dobles = numeros.map(function(num){
    return num*2;
});

console.log(dobles);
//.map recorre todos los elementos de un array y 
//x eso pasas funcion anonima


/*M I   I N T E N T O */
const palabras2 = ["mesa", "silla", "ordenador", "tomcat"];
// const totalpalabras = palabras2.map(function(total){
//     for(let i=0; i<palabras2.length; i++){
//         palabras2[i].length;
//         const largos=[];
//         largos.push(palabras2[i].length);
//     }
// })


/**C O M O   L O   H A C E   I R I A : */

const longpal = palabras2.map(palabras2=> palabras2.length);
console.log(longpal);

/*F I L T E R:   */
// Recorre todos los elementos de un array y a cada elemento se le aplica
// una funcion o condicion y si se cumple se filtra.
// Puede devolver un array de igual o menor longitud que el original
// Si ningun elemento cumple la condicion, devuelve un array vacio

// const nuevoArray = array.filter(funcion(elemento, indice, array))
    //instrucciones



    //pares
    const paresn = numeros.filter(function(num){
        return (num %2 ===0);
    });

    console.log(paresn);
   
    const paresz = numeros.filter(num => num%2 ===0);
    console.log(paresz);

    //palabras de mas de 6 letras

    const palabrasLargas = palabras2.filter(palabra => palabra.length>6);
    console.log(palabrasLargas);

    /*funcion tradicional
    se le pasa array y una letra
     devuelve array con las palabras que incluyan la letra adecuada*/

    function palabrasConLetra(array,letra){ //se le pasa array y letra
        array.filter(function(palabra){
            return palabra.toLowerCase().includes(letra.toLowerCase());
        })
    }

    function palabrasConLetra(array,letra){ //se le pasa array y letra
        const arrayFiltrado = array.filter
        (palabra => palabra.toLowerCase().includes(letra.toLowerCase()));
        return arrayFiltrado;
    }
    


    //  const dobles = numeros.map(function(num){
    //     return num*2;
    // });