const tpendientes=[]; //array vacío de tareas que agregar
const thechas=[]; //tareas ya realizadas
// console.log("Cositas pendientes: ")
// const tarea = prompt("Nueva tarea: ");
tpendientes.push(tarea); //añadir tarea a array de pendientes
console.log(tpendientes); //Visualizamos en consola la tarea pendiente.

/*Ahora, bucle para que se ejecute el prompt
hasta que pongamos: "STOP" */

let tarea; //let y no const? para volver a llamar
do {
    tarea = prompt("Nueva tarea: ");
    if (tarea !== "STOP") { 
        tpendientes.push(tarea); 
    }
} while (tarea !== "STOP");

console.log(tpendientes); // enseña tareas pendientes
