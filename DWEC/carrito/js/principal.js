
// referencias a elementos y declarar variables
const btnCarrito = document.getElementById("acarrito");
const contenedorCarrito = document.getElementById("carrito");
const btnVaciar = document.getElementById("vaciar-carrito");
const listaCarrito = document.querySelector("#lista-carrito tbody");
let cursosCarrito = [];
const btnAgregaCurso = document.querySelectorAll(".info-card a.boton");

btnCarrito.addEventListener("click", () => {
    contenedorCarrito.classList.toggle("mostrar");
});

btnVaciar.addEventListener("click", () => {
    cursosCarrito = [];
    actualizarCarrito();
});

btnAgregarCurso.forEach(boton => {
    boton.addEventListener("click", agregarCurso);
});

function agregarCurso(e) {
    const cursoElement = e.target.closest(".card");
    const curso = {
        imagen: cursoElement.querySelector("img").src,
        titulo: cursoElement.querySelector(".info-card h4").textContent,
        precio: cursoElement.querySelector(".precio span").textContent,
        id: e.target.getAttribute("data-id"),
        cantidad: 1
    };

    const existe = cursosCarrito.find(item => item.id === curso.id);
    if (existe) {
        existe.cantidad++;
    } else {
        cursosCarrito.push(curso);
    }

    actualizarCarrito();
}

function limpiarCarrito() {
    listaCarrito.innerHTML = "";
}

function actualizarCarrito() {
    limpiarCarrito();

    cursosCarrito.forEach(curso => {
        const fila = document.createElement("tr");

        const celdaImagen = document.createElement("td");
        const imagen = document.createElement("img");
        imagen.src = curso.imagen;
        imagen.width = 50;
        celdaImagen.appendChild(imagen);

        const celdaTitulo = document.createElement("td");
        celdaTitulo.textContent = curso.titulo;

        const celdaPrecio = document.createElement("td");
        celdaPrecio.textContent = curso.precio;

        const celdaCantidad = document.createElement("td");
        celdaCantidad.textContent = curso.cantidad;

        const celdaEliminar = document.createElement("td");
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "X";
        btnEliminar.classList.add("eliminar");
        btnEliminar.setAttribute("data-id", curso.id);
        btnEliminar.addEventListener("click", () => eliminarCurso(curso.id));
        celdaEliminar.appendChild(btnEliminar);

        fila.appendChild(celdaImagen);
        fila.appendChild(celdaTitulo);
        fila.appendChild(celdaPrecio);
        fila.appendChild(celdaCantidad);
        fila.appendChild(celdaEliminar);

        listaCarrito.appendChild(fila);
    });
}

function eliminarCurso(id) {
    cursosCarrito = cursosCarrito.filter(curso => curso.id !== id);
    actualizarCarrito();
}
