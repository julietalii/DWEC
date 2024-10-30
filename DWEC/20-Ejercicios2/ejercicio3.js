/*Crear array para imprimir 10.000 numeros aleatorios
mediante un for, creamos numeros aleatorios
comprendidos del 1 al 10, redondeandolos y marcando el limite
como queremos que sea entre 1 y 10, hacemos el max(-1) menos el minimo, mas el minimo  */
let numeros = new Array();
for(let i=0; i<10; i++){
    numeros.push(Math.trunc(Math.random()*(11-1)+1));
    /*tb vale numeros[i]= Math.trunc(Math.random()*(11-1)+1)*/
} 
console.log(numeros);

/*A continuación, creamos el mapa para contar 
cuantas repeticiones hay de cada numero
puedes crear un mapa con todos los numeros disponibles
conteo 0, recorro cadena, si veo a, sumo, etc */

const mapita = new Map();
/*mapita.set(1,1);
mapita.set(2,2);
mapita.set(3,3);
mapita.set(4,4);
mapita.set(5,5);
mapita.set(6,6);
mapita.set(7,7);
mapita.set(8,8);
mapita.set(9,9);
mapita.set(10,10);*/

/*guardar los numeros creamos en una cadena junta? */
let caja;
for(let i=0; i<10; i++){
    caja=caja+numeros[i];
}
 console.log(caja);

 /*tengo que convertir el numero aleatorio en string, guardarlo en caja
 luego en esa caja hacer un conteo y revisar que numero es, en funcion de 
 que numero salga, crear contador: contadorde1, contadorde2, etc */