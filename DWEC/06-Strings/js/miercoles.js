/*El String es un tipo de dato PRIMITIVO; se puede construir o con literales o con new (no hacer con new).
Al construirlo a partir de un literal, con un typeof nos da String, mientras que con un new nos da object, por lo que es mejor
usar un literal para que los comparadores estrictos lo detecten como string*/ 

let cadena = "Hola";
let cadena2 = "Hola mundo";

//PROPIEDADES:
//lenght -> devuelve la longitud de la cadena:
console.log(cadena.length);

//MÉTODOS
/* NO cambian la cadena original.
Sintaxis : cadena.método */

//Para cambiar mayúsculas y minúsculas:
console.log(cadena.toUpperCase());
console.log(cadena.toLowerCase());

//Para buscar posición:
//charAt(), at(), cadena[]; todos nos devuelve un caracter según su posición
//Buscando una posición que no existe:

console.log(cadena.charAt(20)); //cadena vacía
console.log(cadena.at(20)); //undefined
console.log(cadena[20]); //undefined

console.log(cadena.at(-2)); // l

console.log(cadena2.indexOf("o")) //1
console.log(cadena2.lastIndexOf("o")) //9
console.log(cadena2.indexOf("O")) //-1, ya que no existe.

console.log(cadena.includes("H"));//true;
console.log(cadena.includes("h"));//false

console.log(cadena.startsWith("H"));//true;
console.log(cadena.startsWith("l"));//false;

console.log(cadena.endsWith("a"));//true;
console.log(cadena.endsWith("i"));//true;

//cadena.CONCAT()
console.log(cadena.concat(" ",cadena2));

//cadena.repeat(n)
console.log(cadena.repeat(5));

//EXTRAER PARTES DE UNA CADENA:
//substring(ini, fin), slice(ini, fin)
console.log(cadena2.substring(0,4)); //Hola
console.log(cadena2.slice(0,4)); //Hola
console.log(cadena2.slice(-5)); //mundo

//para QUITAR ESPACIOS: trim(), trimStarts(), trimEnds()

let cadena3 = "         H       "
console.log(cadena3.length); //17
cadena3 = cadena3.trimStart();
console.log(cadena3.length); //8

//split (SEPARADOR); convierte CADENA en ARRAY
const array = cadena2.split(" ");
console.log(array);
//Ahora podemos ver el array como tabla:
console.table(array);

const array2 = cadena2.split("");
console.log(array2);
//Ahora podemos ver el array2 como tabla de las distintas letras:
console.table(array2);

const array3 = cadena2.split("m");
console.log(array3);

//REMPLAZAR: replace(viejo, nuevo), y también replaceAll

let nombre = "pepe";
let nombre2 = "PEPE";

if (nombre>nombre2) {
    console.log(nombre )//mayor
}else if (nombre<nombre2) {
    console.log(nombre ) //mayor
}else {
    console.log("Iguales")
}

//Nos da que pepe es mayor que PEPE.  Como hacemos que sean iguales?
//localCompare; compara strings. Podemos indicarle el idioma. Devuelve 1, -1 o 0
console.log(nombre.localeCompare(nombre2)); //puedo modificar localeCompare para que de 0? En español

console.log(nombre.localeCompare(nombre2, 'es', { sensitivity: 'base' })); 
// Devuelve 0, ya que no tiene en cuenta mayúsculas, minúsculas o acentos.


