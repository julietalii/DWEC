/*
    Objeto:
        Estructura de datos que guarda propiedades (pares
        clave-valor) y métodos (funciones almacenadas
        como propiedades)    

        Diferencias con Map:
        1.- Las claves en el map pueden ser cualquier cosa, en
        objeto solo pueden ser cadena o simbolo (simbolo no lo 
        conocemos). Si ponemos otra cosa se autoconvierte
        en una cadena
        2.- El orden de inserción de los pares clave-valor: en
        los mapas va según el orden de entrada, en los 
        objetos si metes otra cosa y lo tiene que convertir
        a cadena, el orden fluctúa
        3.- En el map, hay métodos específicos, como set, get, size y en el object NO
        */


//COMO CREAR OBJETO:
//1. Usando literales (datos primitivos)
//const para array, mapas, sets y objetos!

    const coche = {
        //creamos los pares clave-valor:
        marca: "Citroen",
        modelo: "Exsala",
        color: "Rojo",
        anho: 2025,
        extras:["Antiniebla", "Sensor Aparcamiento"]
    };

//2da forma, creando objeto vacío y añadiendo
//las propiedades

        const coche1 = {};

        //nombreObjeto.nombrePropiedad = valor;

        coche1.marca = "Renault";
        coche1.modelo = "Kangoo";
        coche1.color = "Blanco";
        coche1.anho = 2020;
        coche1.extras = ["Navegaodr"];

//3a forma: con NEW (no lo vamos a usar)

        const coche2 = new Object();
        //añado las propiedades

//Añadir propiedad a un objeto:
//nombreObjeto.nombrePropiedad = valor; 

coche.consumo = 10;
coche.anho = 2024;

console.log(coche);
console.log(coche1);
console.table(coche);
console.table(coche1);


//eliminar propiedades:
//delete nombreObjeto.nombrePropiedad
delete coche.anho; 
//no da error, pero si intento ver algo q no existe,
//da undefined:
console.log(coche.anho);
console.log(coche.consumo);
console.log(`El coche ${coche.marca} con modelo ${coche.modelo} tiene un consumo de ${coche.consumo} y uno de sus extras es ${coche.extras[0]}`);


//Construimos objeto dentro de objeto, ANIDADOS

const animal = {
    nombre: "Lucas",
    tipo: "Pato",
    color: "Marrón",
    veterinario:{
        nombre: "Pepe",
        apellidos: "López López",
        edad: 40
    }
}

//añadimos 
animal.edad = 2;
animal.veterinario.carnet = true;
console.table(animal);

delete animal.veterinario.edad;

//Visualizar objetos: 
//1a forma: accediendo a cada propiedad de forma individual
//nombreObjeto.nombrePropiedad
console.log(animal.tipo);

//2a forma: con un bucle for...in for...of
for (let i in animal){
    console.log(animal[i])
}

//for of no funciona xq el objeto no es directamente
//iterable, va a dar error

// for(let valor of animal){
//     console.log(valor)
// } 
//da: animal is not iterable

//Métodos de los objetos: 
//Crear objeto con un par de metodos y saber 
//como se crea, como se accede a ellos
//y como se borra

    //Para acceder a propiedad: (otra forma)
    console.log(animal["nombre"]); 

const alumno = {
    nombre: "Julieta",
    edad:24,
    saludo : function(){
        return this.nombre + " " + this.edad;
    }
}

console.table(alumno);
console.log(alumno.saludo());

//OBJECT.CREATE(): se usa para crear un nuevo objeto
//y vincularlo al prototipo de objeto existente.

const trabajo = {
    cargo: "Profesor",
    dificultad: "Alta",
    saludar(){
        return this.cargo;
    }
}

const trabajo2 = Object.create(trabajo);

trabajo2.cargo="Entrenador";

console.log(trabajo);
console.log(trabajo.saludar());
console.log(trabajo2);


/*
    const coche = {
        //creamos los pares clave-valor:
        marca: "Citroen",
        modelo: "Exsala",
        color: "Rojo",
        anho: 2025,
        extras:["Antiniebla", "Sensor Aparcamiento"]
    };
 */

//Metodos

const coche3 = {
    //creamos los pares clave-valor:
    marca: "Citroen",
    modelo: "Exsala",
    color: "Rojo",
    anho: 2025,
    extras:["Antiniebla", "Sensor Aparcamiento"],
    info: function(){
        return `El coche es un ${this.marca} su modelo es ${this.modelo} su color es ${this.color} y tiene estos extras: ${this.extras[0]}, ${this.extras[1]}`
        //los extras podrían hacerse con un for
    }
};

//para acceder a valor dentro de objeto, usamos THIS
//accede al objeto que tratamos