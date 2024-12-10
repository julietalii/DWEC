//Number
let numero = 3;//crea un numero a través de un literal

//Un number creado como objeto, no se suele hacer xq ocupa mas espacio y ralentiza el codigo
let numero1 = new Number(3);

console.log(typeof numero);  //da number
console.log(typeof numero1);  //da object
/**si los comparo con el estricto, da false: */
console.log(numero === numero1);

let cadena = "hola" ; //string
let cadena1 = new String("hola"); //object
console.log(typeof cadena);
console.log(typeof cadena1);
let cadena2 = new String("prueba");
console.log(cadena1 === cadena2);
console.log(cadena1 == cadena2);

// === comparacion no estricta
console.log(cadena === cadena1);//false
console.log(cadena == cadena1);//true

//number creado como objeto new
let numero2 = new Number(3);
// === comparacion estricta (valor y tipo)
console.log(numero2 === numero1);
//compara valor
console.log(numero2 == numero1);

console.log("prueba")
let a = new Number(1);
let b = new Number(1);
console.log(a == b);

//toString()
let cadena5="3";
console.log(typeof cadena5);
nuevacadena5=cadena5.toString();
console.log(typeof nuevacadena5);
console.log(cadena5);

//toFixed()

let numfixed = 9.2349573
console.log(numfixed);
ab = numfixed.toFixed(3);
console.log(ab);

//Number()
//parseInt()
console.log(parseInt("123abc")); // 123 (extrae el número)
console.log(parseInt("abc123")); // NaN (no empieza con número)
console.log(parseInt("101", 2)); // 5 (interpreta en base 2)
console.log(parseInt("0xff", 16)); // 255 (base 16)

//parseFloat()
//isInteger()


//NaN not a number
let nonum = NaN;
console.log(nonum+" es de tipo "+typeof nonum);

console.log("hola"/"hola");//not a number
console.log(3/0); //dara infinity

//funcion isNaN() true o false 
console.log(isNaN("hola"/"hola"));
console.log(isNaN(3));

function func() {
	let a = new Number(5);
	console.log(a);
}
func();


let variable = 3.1344;
console.log(variable.toFixed(2)); //solo visualiza, no guarda el valor que se ve, es como un rednondeo
