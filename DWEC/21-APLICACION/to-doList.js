/**TO-DO LIST:
 * Utilizo prompts y alerts para interactuar con el cliente.
 * La aplicación tiene la estructura esencial de HTML. 
 * Ejecutamos el html y nos aparece la ventana de prompt con el menú principal.
 * Tenemos distintas opciones: 
 *    1. Agregar tarea: nos pedirá a continuación el nombre de la tarea y la fecha de entrega
 *    (el id viene automático). 
 *    Nos avisa que la tarea está bien añadida mediante una alert
 *    
 *    Volveremos siempre al menú principal. El objetivo es tener siempre el prompt 
 *    abierto para cualquier opción de nuestra TDList, a menos que pongamos "salir"
 *    Si ponemos salir, salimos del prompt.
 * 
 *    2. Ver tareas, tanto pendientes como por hacer
 *    Vemos la lista de tareas. Si la fecha de hoy es la misma que la fecha de entrega, te indicara 
 *    que es el último día
 * 
 *    3. Marcar tarea realizada.
 *    Te pedirá el id de la tarea ya hecha
 *    Si no logra encontrar la tarea en la lista de tareas pendientes, te enviará un
 *    alert avisándote. Lo mismo si dejas la opción vacía o con un tipo de dato
 *    no numérico, volviendo a la opción de "¿quieres volver al menú principal?"
 *    Si encuentra el id, te avisa de su traspaso a tareas realizadas.
 * 
 *    4. Borrar tarea
 *    Elimina de las visualizaciones la tarea en cuestión.
 *    Puede borrar ls tareas hechas así como las pendientes, para que
 *    cuando seleccionemos la opción 2, ya no aparezca reflejada.
 * 
 *    Todas las opciones tienen como objetivo volver al menú principal.
 *  
 */





//Declaramos los arrays: 
const ids = []; // IDs de las tareas
const nombres = []; //  nombres de las tareas
const fechasEntrega = []; // fechas de entrega de las tareas
const estados = []; // estados de la tarea

// Función para mostrar el menú principal
function mostrarMenu() {
  let opcion;
  do {
    opcion = prompt(`Bienvenido al control de tareas. Elige una opción:
    1. Agregar tarea
    2. Ver tareas pendientes y tareas realizadas
    3. Marcar una tarea como completa
    4. Borrar tarea
    (Teclea el número de la opción o 'salir' para terminar)`).trim().toLowerCase();
    
    if (opcion !== "salir") {
      switch (opcion) {
        case "1":
          agregarTarea();
          break;
        case "2":
          verTareas();
          break;
        case "3":
          completarTarea();
          break;
        case "4":
          borrarTarea();
          break;
        default:
          alert("Opción no válida, inténtalo de nuevo.");
      }
    }
  } while (opcion !== "salir");
  
}

// Función para volver al menú principal
function volverMenu() {
  let respuesta;
  do {
    respuesta = prompt("¿Quieres volver al menú principal? (s para sí)").trim().toLowerCase();
  } while (respuesta !== "s");
}

// Función para agregar una tarea
function agregarTarea() {
  const nombre = prompt("Introduce el nombre de la tarea:").trim();
  const fechaEntrega = prompt("Introduce la fecha de entrega (YYYY-MM-DD):").trim();

  const id = ids.length + 1; // Generamos ID automáticqmente
  ids.push(id);
  nombres.push(nombre);
  fechasEntrega.push(new Date(fechaEntrega)); 
  estados.push("pendiente"); // Marcamos como pendiente

  alert(`Tarea "${nombre}" añadida correctamente.`);
}

// Función para ver tareas pendientes y realizadas
function verTareas() {
  const hoy = new Date().toDateString();

  let mensajePendientes = "Tareas pendientes:\n";
  let mensajeRealizadas = "Tareas realizadas:\n";

  for (let i = 0; i < ids.length; i++) {
    const fechaTarea = fechasEntrega[i].toDateString();
    const esUltimoDia = fechaTarea === hoy;

    if (estados[i] === "pendiente") {
      mensajePendientes += `- ID: ${ids[i]}, Nombre: ${nombres[i]}, Fecha de entrega: ${fechasEntrega[i].toLocaleDateString()}`;
      if (esUltimoDia) {
        mensajePendientes += " ¡Última llamada!";
      }
      mensajePendientes += "\n";
    } else if (estados[i] === "completada") {
      mensajeRealizadas += `- ID: ${ids[i]}, Nombre: ${nombres[i]}, Fecha de entrega: ${fechasEntrega[i].toLocaleDateString()}\n`;
    }
  }

  alert(`${mensajePendientes}\n\n${mensajeRealizadas}`);
}


// Función para marcar la tarea como completada
function completarTarea() {
  const id = parseInt(prompt("Introduce el ID de la tarea que deseas marcar como completada:"), 10);

  const index = ids.indexOf(id); // buscamos la posición del ID en el array
  if (index !== -1 && estados[index] === "pendiente") {
    estados[index] = "completada";
    alert(`Tarea con ID ${id} marcada como completada.`);
  } else {
    alert("No se encontró una tarea pendiente con ese ID.");
  }
}

// Función para borrar una tarea
function borrarTarea() {
  const id = parseInt(prompt("Introduce el ID de la tarea que deseas borrar:"), 10);

  const index = ids.indexOf(id); // buscamos la posición del ID en el array
  if (index !== -1) {  //indexOf devuelve -1 si el elemento no se encuentra en el array, por lo que si es distinto, significa que un elemento coincide en su índice
    ids.splice(index, 1); // Eliminar el ID
    nombres.splice(index, 1); // Eliminar el nombre
    fechasEntrega.splice(index, 1); // Eliminar la fecha
    estados.splice(index, 1); // Eliminar el estado

    alert(`Tarea con ID ${id} eliminada correctamente.`);
  } else {
    alert("No se encontró una tarea con ese ID.");
  }
}

// Visualizamos el menú principal:
mostrarMenu();

