//COMENTARIO EN LÍNEA
/* COMENTARIO
    EN
    MULTIPLES
    LÍNEAS
*/


//COMO Y DONDE INSERTAR JAVASCRIPT 
/*
    1º FORMA: 
        - Utilizando una etiqueta script
        <script> 
            // Codigo JavaScript
        </script>
    
    2º FORMA:
        - Utilizando un documento externo que se vincula
        <script src="ruta_Archivo.js" type="text/javascript ESTE ES POR DEFECTO"></script>
        atributos opcionales:
            type : define el tipo mime q se incluye
            async: DEBE CARGARSE DE FOMRA ASINCRONA con respecto al resto del doc, procesa html while script y cd cargue lo runea
            defer:  dp del html
            (Mirar para el proximo dia)
       
            
    DONDE SE SITUA EL SCRIPT
    En el  <head> o  en el <body>
        Forma interna: en el HTML
            --Interesa mas en el body, ya que puede cargar js antes del html.
            -- Se usa cuando el codigo de JS es breve

        Forma externa: Con un documento aparte
             --Interesa que sea documento externo ya que disminuye las etiquetas en html.
           
        Vamos usar la forma externa y al final del body  

        */

        //INSTRUCCIONES DE SALIDA 
        /*
            console.log("mensaje") + variantes --> Envía mensaje por consola, pruebas y depuración.
            alert("Mensaje") o wiendow.alert("Mensaje")     
            document.write("Mensaje con etiquetas html") Se usa solo en pruebas y escribe en el html 
        */ 

            console.log("Mi primer mensaje por consola");
           
           
            console.error("Error");
            console.warn("Advertencia");
            console.table("No se va a ver una tabla"); // sirve para enviar objetos,matrices..
             // alert("Mi primer mensaje de alerta");
            
            
             // SENTENCIAS Y SINTAXIS 
             /* 
                Identificadores: no empezar por un número. Empiezan por una letra, _ , $
                    despues ya pueden tener números, letras, o lo que sea
                    Es case sensitive: Distingue mayusculas y minusculas. 
                    No podemos usar palabras reservadas para crear un identificadores: var,let,const, for .. 
                    Las instrucciones acaban con ; 
                    NO  instrrucciones muy largas, si no, cortarlas por un operador 
                    Los espacios en blanco no se tienen en cuenta 
                    Bloque: Es lo que va entre corchetes {}
                    Camel Case: otroNumero,primeraCadena
                    Snake: otro_numero
                    Pascal: OtroNumero,PrimeraCadena
              */
            // Sintaxis: var identificador = valor
            var cadena =" mi primera cadena";
            console.log(cadena);


            var numero= 4;
            var cierto= true;
            var otroNumero= 4.5;
            var sinvalor; //Por defecto será Undefined

            console.log(numero,cierto);
            console.log(otroNumero);
            sinValor="Hola";
            console.log(sinValor);
            sinValor= 4;
            console.log(sinValor);

            //typeof : Metodo para preguntar tipo de dato de una variable 
            console.log(typeof sinValor);
             // JS ES DINAMINCO

            
             //VARIABLES
             /*
                var(anterior a 2015)(No se usa)
                let(Aparece en 2015)
                const(2015)
            
            */

            var fruta = "kaki";
            //redeclarar  SI
            var fruta="limon";


            //let 
            let carnaca="chorizo";
            console.log(carnaca);
          //    let carnaca="Chuleta"; NO deja, interesa ante un codigo extenso usar let
          // ya que nos permite saber si ya la hemos usado o no. 


          //const: cuando queremos declarar un elemento que no cambia su valor o referencia

            const pi=3.141516;
            console.log(pi);
          //   const pi=4  da error 
        //      pi=4;      da error se asignamiento 
        

