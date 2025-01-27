/*Document OBJECT model */

/*
<!DOCTYPE html>
<html lang="en">
<head>
  <title>DOM</title>
</head>
<body>
    <h1>DOM>/h1>
    <a href="https://dom.org">Link>/a>
</body>
</html>


como accedemos a los elementos del DOM:
document.getElementById("id")
document.getElementsByTagName("etiqueta")
document.getElemenstByClassName("clase")
document.querySelector("selector")
document.querySelectorAll("selector")
*/

/*Podemos guardas las referencias a esos elementos
dentro de una variable:
 */

const parrafo1 = document.getElementById("parrafo1");
console.log(parrafo1);

console.log(parrafo1.innerHTML);
parrafo1.innerHTML = "Nuevo valor del párrafo";
//esto cambia lo q muestra en el html, no en la consola
//js modifica html, quita añade etc, lo hace dinamico

const noexiste = document.getElementById("noexiste");
console.log(noexiste);
//si accedemos a dom q no existe, DA NULL

const titulo = document.getElementById("titulo");

titulo.innerHTML = "Este es el nuevo título";
// document.getElementsByClassName("etiqueta")
/*Este devuelve una HTMLCollection */
const lis = document.getElementsByTagName("li");
console.log(lis);

console.log(lis[0]);
console.log(lis[0].innerHTML);

for(let li of lis){
    console.log(li.innerHTML);
}

// document.getElemenstByClassName("clase")
// devuelve un htmlcollection

const p1 = document.getElementsByClassName("p1");
console.log(p1);
console.log(p1.length);

for(let p of p1){
    console.log(p.innerHTML);
}


//modificar el contenido de los párrafos
p1[0].innerHTML = "Estoy cambiando el contenido";
p1[1].innerHTML = "Más cosas";

//document.querySelector("selector") :  selecciona el primero q cumple
// document.querySelectorAll("selector") :  selecciona todos los q cumplen, devuelven un NodeList
//similar a array pero no es como html collection+

const li3 = document.querySelector("li#item3");
console.log(li3);

li3.innerHTML="Modificando";

const lies = document.querySelectorAll("li");
console.log(lies);

lies.forEach(li => {
    console.log(li.innerHTML);
});

/*diferencia entre html collection y nodelist */

/*como cambiar contenido html
innerhtml
innerText: accede o modifica todo lo que esta dentro de un elemento HTML,
texto, otras etiquetas
textContent */

const subtitulo = document.getElementById("subtitulo");
console.log(subtitulo.innerHTML);
console.log(subtitulo.innerText);

subtitulo.innerHTML="Esto <i> es </i>un subtitulo 25";
console.log(subtitulo);
console.log(subtitulo.textContent);

//como acceder a atributo

const enlace = document.getElementsByTagName("a");
console.log(enlace);
enlace[0].title = "Enlace a Google";

/*Cambiar estilos css con JS */
titulo.style.backgroundColor = "red";
subtitulo.style.color = "pink";
subtitulo.style.backgroundColor = "blue";