//Referencias a elementos
//Acceder al icono del carrito
//Como quiero mostrar el carrito cuando hago click...
const iconoCarrito = document.getElementById("acarrito") ;
//CONSEJO: console.log para ver que vamos bien
//Ahora q tengo referencia, hago evento

iconoCarrito.addEventListener("click",mostrarCarrito);
//no se le pueden poner parametros al event listener, si no hay q hacer arrow dentro

function mostrarCarrito(){
    console.log("Entro en mostrar carrito");
    //saber si hay una clase
    console.log(carrito.classList.contains("mostrar"));
    //queremos añadirle la clase
    if(!carrito.classList.contains("mostrar")){
        carrito.classList.add("mostrar");
    }else{
        carrito.classList.remove("mostrar");
    }
}
//toggle mejor para mostrarcarrito

//en el css del carrito, sale display none, por eso al inicio no se muestra
//tenemos q pasarlo a display block
//para eso, accedemos a referencia del elemento, podemos ir con el dom (combinadores css?¿)

//accedemos a div carrito: 
const carrito = document.getElementById("carrito");
console.log(carrito); 

//AddEventListner
//Métodos

//vamos a vaciar carrito:
//necesitamos referencia a tbody y al boton de vaciar carrito
//boton de vaciar carrito
const vaciarCarritoBtn = document.getElementById("vaciar-carrito");
console.log(vaciarCarritoBtn);

//tbody referencia, usamos queryselector
const contenidoCarrito = document.querySelector("#lista-carrito tbody");
console.log(contenidoCarrito);


//evento cuando clico em vaciarcarritoboton

vaciarCarritoBtn.addEventListener("click", vaciarCarrito);

//funcion vaciarCarrito:

function vaciarCarrito(){
    articulosCarrito = [];
    //vaciamso array de articulos
    console.log("entro en vaciar carrito");
    //acceder al innerhtml del contenido del carrito
    console.log(contenidoCarrito);
    //quiero vaciarlo
    contenidoCarrito.innerHTML="";
    //innerhtml añado texto y etiquetas, vaciamos contenido de tbody
}

//estructura de datos 
// intermedia para confirmar añadir al carrito, cantidad etc
//array!

let articulosCarrito = [];

//botones de añadir curso: 
btnAnadirCurso = document.querySelectorAll(".info-card a.boton");
console.log(btnAnadirCurso);
//addevent: tengo que recorrer el nodelist:
for(let b of btnAnadirCurso){
    b.addEventListener("click", anadirCurso);
}

function anadirCurso(e){
    console.log("Entro en añadir curso");
    console.log(e.type);
    console.log(e.target);
   /*intentos del ejercicio */
    a = document.querySelectorAll(".info-card .not(a.boton)");
    contenidoCarrito.appendChild(a);
    console.log("pasa por aquí");
}

//extraer info de evento, parametro e, dos propiedades e.type, evento q se lanza
//e.target (evento q lanzo el evento )
//toggle: añade o elimina una clase en html, dependiendo si ya la tiene o no
// function toggle(){
//     carrito.classList.toggle("mostrar");
// }


// mostrar carrito en interfaz
function mostrarCarrito() {
    //evitamos duplicados limpiadno el contenido
    contenidoCarrito.innerHTML = "";

    articulosCarrito.forEach(curso => {
        //creamos fila para la tabla:
        const row = document.createElement("tr"); 
        row.innerHTML = `
            <td><img src="${curso.imagen}" width="50"></td>
            <td>${curso.titulo}</td>
            <td>${curso.precio}</td>
            <td>${curso.cantidad}</td>
            <td><button class="borrar-curso" data-id="${curso.id}">X</button></td>
        `;
        contenidoCarrito.appendChild(row); 
        //agregamos la fila a tbody
    });
}
