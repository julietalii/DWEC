/*BOM */
/*Conjunto de objetos js
Se centra en la ventana del navegador y sus propiedades

Objeto Window: objeto global, todos los demás depende de él.

M É T O D O S   P R I N C I P A L E S */

console.log(window.innerWidth); 
//es el ancho de ventana en pixeles, el siguiente es el alto: 
console.log(window.innerHeight); 
window.alert("prueba");
// window.open("https://www.google.com");
// window.close(); 


// objeto navigator: da información sobre navegador y SO:

console.log(navigator.language); 
console.log(navigator.userAgent); 
console.log(navigator.platform); 
//este me sale tachado
console.log(navigator.onLine); 



//Objeto screen: informacion sobre la pantalla del dispositivos:

console.log(screen.width); 
// ancho de la pantalla
console.log(screen.height); 
// alto de pantalla
console.log(screen.availWidth); 
// Ancho disponible, q no incluye la barra de tareas
console.log(screen.availHeight);
console.log(screen.pixelDepth); 
// Profundidad de color en bits


//location: utiliza la url de la página actual:

console.log(location.href); 
 // muestra la url actual
console.log(location.hostname); 
// dominio del sitio web
console.log(location.pathname); 
// ruta del archivo actual
console.log(location.protocol); 
// Protocolo, q puede ser http o https


//object history: controla el historail de nevagacion del usuarioç
history.back();  
// nos lleva a la página anterior
history.forward();  
// avanza hasta la siguiente página
history.go(-2); 
// va 2 páginas hacia atras
