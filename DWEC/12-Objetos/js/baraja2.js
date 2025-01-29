function comprobarParametros(p,v){
    return (p>0&&p<5 && v>0 && v<10);
}

function Carta(p,v){

    // Comprobación

    if(!comprobarParametros(p,v)){
        return null;
    }

    this.palo=p;
    this.valor=v;
    
    //Métodos

    this.paloToString = function(){
        const palos = ["","Oros","Espadas","Bastos","Copas"];
        return palos[this.palo];
    };
    this.valorToString = function(){
        const palos = ["","As","Dos","Tres","Cuatro","Cinco","Seis","Siete","Sota","Caballo","Rey"];
        return palos[this.palo];
        }

    this.ToString = function(){
        return `${this.valorToString()} de ${this.paloToString()}`;
    }

    this.darValor = function(np,nv){
        this.palo=np;
        this.valor=nv;
        if(comprobarParametros(p,v)){
            return `Nueva carta: ${this.valor} de ${this.palo}`;
        }else{
            return `Error`;
        }
    }

}

//pruebas

const cartaErronea = new Carta (-1,0);
console.log(cartaErronea);
const asOros = new Carta (1,1);
console.log(asOros);
console.log(asOros.paloToString());
console.log(asOros.valorToString());
console.log(asOros.ToString());
asOros.darValor(2,2);
console.log(asOros.ToString());


function crearBaraja(){
    const cartas = [];
    for (let i=1;i<5;i++){
        for(let j=1;j<11;j++){
           this.cartas.push(new Carta (i,j));
        }
    }
    return cartas;
}

function Baraja(){
    /*this.cartas = crearBaraja(); */

    this.cartas=[,];
    for (let i=1;i<5;i++){
        for(let j=1;j<11;j++){
           this.cartas.push(new Carta (i,j));
        }
    }

    const barajaOriginal = [...this.cartas];
    const barajaNueva = [];
    
    //Métodos

    this.barajar = function(){

    }

    this.toString = function(){

    }
}
