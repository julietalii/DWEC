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


/************************************** */
            /*13-01-2025 */
/************************************** */

const fruta = {
    nombre:"Pera",
    tipo:"Conferencia",
    precio:2.95,
    descuento:true,
    info:function(){
        return `La fruta ${this.nombre} de tipo ${this.tipo} tiene un precio de ${this.precio}`;
    },
    precioDescuento: function(){
        if(this.descuento){
            return this.precio - 0.5;
        }
    },
    actualizarPrecio:function(nuevoprecio){
        this.precio = nuevoprecio;
    }
}
console.table(fruta);
//añadir propiedades a un objeto:
fruta.color="Verde";

//añadir metodos a un objeto: EN ESTE CASO, metodo q compare dos frutas
//y q devuelva cadena indicando cual es la q mas vale
fruta.compararPrecio = function(nuevaFruta){
    
    if(this.precio > nuevaFruta.precio){
        return `La fruta mas barata es ${nuevaFruta.nombre}`;
    }else if (this.precio < nuevaFruta.precio){
        return `La fruta mas barata es ${this.nombre}`;
    }else{
        return `Tienen el mismo precio`
    }
};

//LLAMADAS A LOS METODOS
console.log(fruta.info());
console.log(`El precio de descuento es: ${fruta.precioDescuento()}`);

//crear nuevo objeto:
const fruta2 = {
    nombre:"Manzana",
    tipo:"Golden",
    precio:2.20,
    descuento:true,
    info:function(){
        return `La fruta ${this.nombre} de tipo ${this.tipo} tiene un precio de ${this.precio}`;
    },
    precioDescuento: function(){
        if(this.descuento){
            return this.precio - 0.5;
        }
    },
    actualizarPrecio:function(nuevoprecio){
        this.precio = nuevoprecio;
    }
}

console.log(fruta.compararPrecio(fruta2));

// console.log(fruta2.compararPrecio(fruta));
//este no va a funcionar xq en fruta2 no existe este metodo!


//ELIMINAR PROPIEDADES O METODOS TRAS LA CREACION
//delete nombreObjeto.nombrePropiedad
//delete nombreObjeto.nombreMetodo

//VISUALIZAR UN OBJETO
console.log(fruta.nombre);
    //CON BUCLES TB VALE:
    //con for.off no funciona xq no va con los iterables    TEST
    for(let i in fruta){
        if(typeof fruta[i] !== 'function'){
            console.log(fruta[i]);
        }
    }

//METODOS PARA VISUALIZAR OBJETOS
    //Metodos: Object.values(), Object.keys(), Object.entries()
    //Cada uno de ellos devuelve un array con valores, claves, y
    //pares clave valor de los OBJETOS

    const array_valores = Object.values(fruta);
    // console.log(array_valores);
    for(let valor of Object.values(fruta)){
        if(typeof valor !=='function'){
            console.log(valor);
        }    
    };

    for(let ind of Object.keys(fruta)){
        if(typeof ind !=='function'){
            console.log(ind);
        }        
    };

    for(let [cl,val] of Object.entries(fruta)){
        if(typeof val !=='function'){
            console.log(`La clave es ${cl} y el valor es ${val}`);
        }   
    };

//Convertir un objeto a cadena en formato JSON
//para por ejemplo guardar en un archivo o 
//alamacenamiento local:
//-->localStorage, sessionStorage
const cadenaObjeto = JSON.stringify(fruta);
console.log(cadenaObjeto);

/*metodo es lo mismo q propiedad, la clase
es una cadena, el propio metodo se declara como
 funcion */


/************************************** */
            /*15-01-2025 */
/************************************** */

//Función constructora de objetos:
function Persona(nom, ap1, ap2, fnac, ocu, ojos ="Marrones"){
    //PROPIEDADES
    this.nombre = nom;
    this.apellido1 = ap1;
    this.apellido2 = ap2;
    this.fnacimiento = new Date(fnac);
    this.ocupacion = ocu;
    //propiedades con valor por defecto
    this.ojos= ojos;
    //this.ojos=2;
    //si pongo en el parametro un valor, siempre estara por
    //defecto si no se le pasa otro valor

    
    //Métodos: 
    this.nombreCompleto = function(){
        return `Mi nombre es ${this.nombre} ${this.apellido1} ${this.apellido2}`;
    };
    //las funciones terminan en ; como en las propiedades

    this.cambiarOcupacion = function(nuevaOcupacion){
        return this.ocupacion = nuevaOcupacion;
    };

    this.obtenerEdad = function(){
        const anhoActual = new Date().getFullYear();
        return anhoActual - this.fnacimiento.getFullYear()
    };

    this.infoCompleta = function(){
        return `Mi nombre es ${this.nombreCompleto()} y trabajo de ${this.ocupacion} y tengo ${this.obtenerEdad()} años`
    };
}

//Instanciar objetos Persona
const miPadre = new Persona("Pepe", "López", "Martínez", "1977-01-01", "banquero", "verdes"); 
const miMadre = new Persona("María", "Pérez", "Martínez", "1977-02-02", "Docente");

//Visualizamos el objeto:
for(let v of Object.values(miPadre)){
    if(typeof v !== "function"){
        console.log(v)
    }
    
}

for(let v of Object.values(miMadre)){
    if(typeof v !== "function"){
        console.log(v)
    }
}

//Cambiar propiedades en los objetos instanciados:
miMadre.ojos ="AMARILLOS";
console.log(miMadre);

//Añadir propiedad adicional a los objetos instanciados
miMadre.altura=1.70;


//si añadimos una propiedad a los objetos instanciados
//no va a estar en el constructor, solo en el objeto que añadimos
//si no está, da UNDEFINED 
console.log(miMadre.altura);
console.log(miPadre.altura);

//podemos eliminar propiedades pero no se van del 
//constructor

//¿cómo añado propiedades o metodos en el constructor?
Persona.prototype.altura = 1.70;
const yo = new Persona("Lucia", "Pérez", "Pérez", "1990-01-01", "Camina");
console.log(yo);

Persona.prototype.infoOcupacion = function(){
    return `Trabajo de ${this.ocupacion}`;
}

//Métodos asociados a los objetos:
/*
Object.create();
Object.assign(); //se puede hacer lo mismo con el operador de propagacion
Object.freeze();
Object.seal();
Object.isSealed(); Object.isFrozen();
Object.hasOwnProperty(); //se puede hacer con in
// */

console.log(miMadre.hasOwnProperty("nombre"));//true
console.log(miMadre.hasOwnProperty("abcdefghijkl"));//true
console.log("nombre" in miMadre); //true

// Object.create();
//crea un objeto a partir de uno existente
const Clase = Object.create(miMadre);
console.log(Clase);

//Object.assign(): copia las propiedades de una
//o mas objetos
Object.assign(miMadre,miPadre);
console.log(miMadre);
console.log(miPadre);
//pasa los atributos de miPadre a miMadre


//Object.freeze():
//no deja modificar el objeto instanciado
Object.freeze(miMadre);
miMadre.ojos="azul claro";
console.log(miMadre);

//Object.seal(): evita que añadas o elimines propiedades, PUEDES MODIFICAR
Object.seal(miPadre);
miPadre.pelo=false;
console.log(miPadre);

console.log(Object.isSealed(miPadre));
console.log(Object.isSealed(miMadre));

console.log(Object.isFrozen(miPadre));
console.log(Object.isFrozen(miMadre));


