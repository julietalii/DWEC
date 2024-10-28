/*
    Set: 
    similar a un array, es un objeto
    colecciones de datoa que pueden ser de cualquier tipo, datos primitivos

    Diferencias con el array: en arrays pueden haber datos duplicados, en conjunto set NO
    Pueden tener valores vacios y indefined, pero solo uno por cada
    no tienen indice numerico como los arrays, no se puede acceder a los elementos, ocupan
    la posicion en la que se añaden, solo listarlos
    o comprobar si existe previsualizando con los metodos vistos en arrays.
*/


/**************************************************************
 *                                                            *
 *       F O R M A S   D E   C R E A R   U N   S E T          *                                     *
 *                                                            *
 **************************************************************/
const conjunto = new Set(); //primera forma, creando set vacio
//añadir elementos, con arrays es .push, conn conjuntos es con add(nombre_conjunto.add(valor))
conjunto.add("hola");
conjunto.add("adios");
conjunto.add("adios");
console.log(conjunto);
console.log(conjunto[0]); //undefined porque esto no se puede hacer en set, no hay indices

//crear pasandole array
const conjunto2 = new Set(["a", "b", "a", "d"]);
console.log(conjunto2);

const array = [1,3,5,3,4,5]; //array con duplos
const conjArray = new Set(array);
console.log(conjArray);
console.log(array);

//convertir set en array nuevamente
const arraysinDup= [...conjArray];
console.log(arraysinDup);

//OPERADORES DE TIPO: typeof, instanceOf, devuelve true o false
console.log(typeof conjunto); //object
console.log(conjunto instanceof Object); //true
console.log(conjunto instanceof Set); //true

//metodos y propiedades de los set
//size, add, delete, has, clear, 

//para visualizar: aparte de los for in, values, keys, entries

//.size: devuelve el numero de elementos q tiene el conjunto
console.log(conjunto.size);
console.log(conjunto.has("hola")); //devuelve true o false
conjunto.delete("hola");
console.log(conjunto);
conjunto.clear();
console.log(conjunto);