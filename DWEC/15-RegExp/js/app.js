/*
    EXPRESIÓN REGULAR
    - Es una secuencia de caracteres que forma un patrón de búsqueda, principalmente utilizada para la búsqueda de patrones de cadenas de caracteres u operaciones de sustituciones.

    Sintaxis:
        const aptron= /patron/modificador;
    Modificadores:
        i: no distingue entre mayúsculas y minúsculas
        g: la busqueda se realiza de forma global, en toda la cadena
        
        patrones: 
            [abc]: q se busca alguno de los caracteres entre corchetes
            [^abc]: busca algun caracter q no est eincluido en el corchete
            [a-z]
            [A-Z]
            [0-9]
            (x | y) busca uno de los dos caracteres entre parentesis

            Métodos de cadenas q se suelen emplear con expresiones regulares
            patron.test(cadena): comprueba si un patron esta en una cadena y devuelve true o false

            search(): busca un patron en una cadena y devuelve la posicion de la primera coincidencia
            match(): devuelve un array con la/s coincidencias de buscar un patron en una cadena
            replace(): reemplaza un patron por otro
*/

const saludo = "Hola gente";
//const p1 = /ola/;//true. estando entre las dos barras, quiero buscar ola, tal cual
//const p1 = /[ola]/;//true. busca si hay alguna de las letras entre corchetes
//const p1=/[opq]/;//true. busca si hay alguna de las letras entre corchetes, esta la o
//const p1=/[^ola]/;//true. tiene q buscar algun caracter q no este en los corchetes
//const p1=/[UOE]/;//false. no hay ninguna de las letras entre corchetes
const p1=/[UOE]/i;//true. no distingue entre mayusculas y minusculas
console.log(p1.test(saludo));//true. comprueba si el patron esta dentro del saludo

const cadena="mesa, libro, MESA, silla";
const p2=/mesa/ig;//g para q busque de forma global, sino me devolveria solo la primera coincidencia
console.log(cadena.match(p2));//["mesa", "mesa"]

const c = "coche azul";
const patronSearch = /che/;
console.log(c.search(patronSearch));//me devuelve la posicion de la primera coincidencia

const c2 = "hoy es martes";
const patronReplace = /martes/gi;
const cambio = c2.replace(patronReplace, "miercoles");
console.log(cambio); 