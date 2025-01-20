function Carta(p,v){
    if (p < 1 || p > 4) {
        return null;
    }

    if (v < 1 || v > 10) {
        return null;
    }

    this.palo = p;
    this.valor = v;

    //Métodos de la carta:

    this.paloToString = function(){
        if (this.palo === 1){
            return 'Oros';
        }
        if(this.palo === 2){
            return 'Espadas';
        }
        if(this.palo === 3){
            return 'Bastos';
        }
        if(this.palo === 4){
            return 'Copas';
        }
    }

    this.valorToString = function(){
        switch(this.valor){
            case 1:
                return 'As';
                break;
            case 2:
                return 'Dos';
                break;
            case 3:
                return 'Tres';
                break;
            case 4:
                return 'Cuatro';
                break;
            case 5:
                return 'Cinco';
                break;
            case 6:
                return 'Seis';
                break;
            case 7:
                return 'Siete';
                break;
            case 8:
                return 'Sota';
                break;
            case 9:
                return 'Caballo';
                break;
            case 10:
                return 'Rey';
                break;

        }
    }

    this.toString = function(){
        return ` ${this.valorToString()} de ${this.paloToString()}`;
    }

    this.darValor = function(np, nv){
        this.palo =np;
        this.valor =nv;
        if(np >=1 && np <=4 && nv>=1 && nv<=10){
             return `Nueva carta: ${this.valor} de ${this.palo}`;
        }else{
            return "ERROR";
        }    
    }
}

function Baraja(){
    // this.cartas = function(){
    //     for(let i =1; i<5 ; i++){
    //         for(let j=1 ; j<11; j++){
    //             if(j<11){
    //                 Carta.paloToString(1);
    //                 this.cartas.push(`${j} de ${Carta.paloToString(i)}`)
    //             }
    //             if(j<21){
    //                 Carta.paloToString(2);
    //                 this.cartas.push(`${j} de ${Carta.paloToString(i)}`)
    //             }
    //             if(j<31){
    //                 Carta.paloToString(3);
    //                 this.cartas.push(`${j} de ${Carta.paloToString(i)}`)
    //             }
    //             else{
    //                 Carta.paloToString(4);
    //                 this.cartas.push(`${j} de ${Carta.paloToString(i)}`)
    //             }
    //         }
    //     }
    //     return this.cartas;
    // } 

    function Baraja(){
        this.cartas=[,];
        for (let i=1;i<5;i++){
            for(let j=1;j<11;j++){
               this.cartas.push(new Carta (i,j));
            }
        }
    }

    this.barajar = function(){
        for(let i = 0 ; i< 41 ; i++){
            Carta.paloToString(Math.random()*(4-1)+1);
            Carta.valorToString(Math.random()*(10-1)+1);
        }
    }
}