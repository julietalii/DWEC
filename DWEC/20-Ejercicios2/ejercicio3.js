/*Crear array para imprimir 10.000 numeros aleatorios
mediante un for, creamos numeros aleatorios
comprendidos del 1 al 10, redondeandolos y marcando el limite
como queremos que sea entre 1 y 10, hacemos el max(-1) menos el minimo, mas el minimo  */
let numeros = new Array();
for(let i=0; i<10000; i++){
    numeros.push(Math.trunc(Math.random()*(11-1)+1));
    /*tb vale numeros[i]= Math.trunc(Math.random()*(11-1)+1)*/
} 
console.log(numeros);

/*A continuación, creamos el mapa para contar 
cuantas repeticiones hay de cada numero
puedes crear un mapa con todos los numeros disponibles
conteo 0, recorro cadena, si veo a, sumo, etc */



let c1=0, c2=0, c3=0, c4=0, c5=0, c6=0, c7=0, c8=0, c9=0, c10=0;
 for(let i=0; i<10000; i++){
    switch(numeros[i]){
        case 1:
            c1 ++;
            break;
        case 2:
            c2 ++;
            break;
        case 3:
            c3 ++;
            break;
        case 4:
            c4 ++;
            break;
        case 5:
            c5 ++;
            break;
        case 6:
            c6 ++;
            break;
        case 7:
            c7++;
            break;
        case 8:
            c8 ++;
            break;
        case 9:
            c9 ++;
            break;
        default: 
            c10 ++;
    }
    
 }
 let tfrecuencia = new Map([[1, c1], [2, c2], [3, c3], [4, c4], [5, c5], [6, c6], [7, c7], [8, c8], [9, c9], [10, c10]]);
 console.log(tfrecuencia); 

 console.log(`Frecuencia de 1: ${c1} veces`);
 console.log(`Frecuencia de 2: ${c2} veces`);
 console.log(`Frecuencia de 3: ${c3} veces`);
 console.log(`Frecuencia de 4: ${c4} veces`);
 console.log(`Frecuencia de 5: ${c5} veces`);
 console.log(`Frecuencia de 6: ${c6} veces`);
 console.log(`Frecuencia de 7: ${c7} veces`);
 console.log(`Frecuencia de 8: ${c8} veces`);
 console.log(`Frecuencia de 9: ${c9} veces`);
 console.log(`Frecuencia de 10: ${c10} veces`);
 document.write("Frecuencia de 1: ");
 document.write(c1);
 document.write("<br>");

 document.write("Frecuencia de 2: ");
 document.write(c2);
 document.write("<br>");

 document.write("Frecuencia de 3: ");
 document.write(c3);
 document.write("<br>");

 document.write("Frecuencia de 4: ");
 document.write(c4);
 document.write("<br>");

 document.write("Frecuencia de 5: ");
 document.write(c5);
 document.write("<br>");

 document.write("Frecuencia de 6: ");
 document.write(c6);
 document.write("<br>");

 document.write("Frecuencia de 7: ");
 document.write(c7);
 document.write("<br>");

 document.write("Frecuencia de 8: ");
 document.write(c8);
 document.write("<br>");

 document.write("Frecuencia de 9: ");
 document.write(c9);
 document.write("<br>");

 document.write("Frecuencia de 10: ");
 document.write(c10);

/*guardar los numeros creamos en una cadena junta? */


 /*tengo que convertir el numero aleatorio en string, guardarlo en caja
 luego en esa caja hacer un conteo y revisar que numero es, en funcion de 
 que numero salga, crear contador: contadorde1, contadorde2, etc */
 /*como creo s el otro array* */




 /**NOTAS EJERCICIOS:
  * en ejercicio1 usar trim
  * char code at from char code,
  * parse int 
  * math abs
  * 
  * ejercicio2 generar loteria
  * esa secuencia de numeros ordenar en menor a mayor
  * utilizar set para no generar numeros repes
  * luego transofrmar a array para la ordenacion
  * sort metodo disponible en los arrays
  * 
  * ejercicio3 con un mapa estaria bien... pero no
  * crear mapa vacio, 1, frecuencia 0, 2 frecuencia 0, ir sumandole
  * hay q hacerlo o con document.write o con documentinner?html no se 
  * 
  * ejercicio 5 con repeat
  */