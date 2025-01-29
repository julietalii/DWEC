/*****      29-01-2025        */

/*

EVENTO: algo que hace el usuario sobre nuestra pagina
y se provoca en algun elemento de html
    tipos de eventos:
        eventos de raton: cuando el usuario hace click en algun html o cuando pasa el raton
        por encima de un elemento html

        cuando se pulsa una tecla

        cuando se envia un formulario

        cuando se cambia de una entrada a otra en un formulario

        eventos de teclado, de pantalla, de window, de formulario etc

MANEJADOR: lo que pasa cuando ocurre el evento
se encarga de realizar la accion tras capturar el evento
modelo de eventos en linea, dentro de la etiqueeta html se incluye atributo
para controlar el evento
atributos: onClick, onmouseover, onmouseout, onload etc
se incluye dentro del html codigo js (no es tan legible, no se reutiliza )


modelo de eventos del w3c, usaremos este
no se incluye dentro de la etiqueta html
se usa un metodo addEventListener

se pueden crear varios eventos iguales en un mismo html(varios eventos click)

sintaxis:
    document.getElementById("id").
    addEventListener("evento_sin_on", 
    funcion a la q se va a llamar,
    false/true: booleano q dice como es propagacion o captura del evento)

*/

//referencias a objetos
const p1 = document.getElementById("p1");

function colorear(id){
    // this.style.color="red";
    // document.getElementById("encabezado").style.color="red"; (SIN PARAMETRO)
    document.getElementById(id).style.color="red";
    //this.id en html para enlazarlo
}

//onmouseover
//onmouseout

function cambiarEstilo(id){
    document.getElementById("p1").style.color="green";
}

function colorOriginal(a){
    document.getElementById("p1").style.color="initial";
}


function mostrarFecha(){
    document.getElementById("p2").innerHTML = new Date();
}

// innerhtml permite tag y Text
// innertext solo texto

document.getElementById("p3").addEventListener("click", saludo);
function saludo(){
    alert("Holi");
}
//x defecto el 3er valor sera false
//hoisting:js hace varias comprobaciones 
document.getElementById("p3").addEventListener("click", saludo2);

function saludo2(){
    alert("Qué tal?");
}

document.getElementById("p3").addEventListener("click", colorear);

function colorear(){
    document.getElementById("p3").style.backgroundColor=azar();
}

function azar() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256); 
    let b = Math.floor(Math.random() * 256); 
    return `rgb(${r},${g},${b})`; 
}

   