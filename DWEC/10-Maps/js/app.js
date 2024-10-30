/**
 Mapa
 Objeto que permite guardar colecciones de datos,
 se guardan los datos como pares clave-valor
 La clave y el valor pueden ser de cualquier tipo, datos primitivos, objetos
 Las claves no se pueden repetir, pero el valor si
 */

 //C R E A C I O N   D E   M A P A
 const ropa = new Map(); //puedes crearlo vacio y luego añadir con set:
 //sintaxis añadir: mapa.set(clave, valor);
 ropa.set("camisa", 35.95);
 ropa.set("pantalón", 45.95);
 ropa.set("camisa", 25.95); /*lo sobreescribe, pues la clave ya esta, y hace caso al ultimo valor escrito */
 ropa.set("pijama", 15.95);
console.log(ropa);

//O T R A   F O R M A   D E   C R E A R
const motos = new Map([
    ["yamaha", "naranja"],
    ["Honda", "azul"],
    ["Kawasaki", "naranja"]
    ]);

console.table(motos);
console.log(motos);


//operadores: typeof, instanceOf
console.log(typeof ropa);//object
console.log(ropa instanceof Object);
console.log(ropa instanceof Map);

//metodos y propiedades
//mapa.size

console.log(ropa.size);

//mapa.set(clave, valor)
//mapa.clear()
//mapa.delete()
ropa.delete("camisa");
console.log(ropa);//no deja hueco

console.log(ropa.delete("xd")); //devuelve fallo si borrar algo q no existia
//mapa.get()
console.log(ropa.get("pijama"));
console.log(ropa);
//si haces get con algo que no existia da undefined

//mapa.has(clave)
console.log(ropa.has("pijama"));
console.log(ropa.has("ola"));

//M O S T R A R   E L   M A P A

//keys()
    for(let claves of ropa.keys()){
        console.log(claves);
    }

//values()
    for(let valores of ropa.values()){
        console.log(valores);
    }

//entries()
    for(let [clave,valor] of ropa.entries()){
        console.log(`Clave: ${clave} Valor: ${valor}`);
    }

/*ejercicio mapear, cadena con frase y quiero contar frecuencia 
de veces que aparece a, 
en el mapa se guarda clave a, frecuencia, y se hace el conteo*/

const cadena= "Mañana no hay clase porque es el día do ensino";
/*a : sale 5 veces 
puedes crear un mapa con todas las letras del abcdario
conteo 0, recorro cadena, si veo a, sumo, etc*/