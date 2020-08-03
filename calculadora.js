
var numero = document.getElementById('numero');
var memoria = document.getElementById('memoria');
var operacoes = [];
var numeros = [];
var result = 0;


function digito(val){
    if(numero.innerHTML == "0"){
        numero.innerHTML = "";
    }

    numero.innerHTML += val;
}


function tipoOperacao(tipo){
    if( numero.innerHTML != '0' ){

        if(result != 0){
            numeros = [];
            operacoes = [];
            memoria.innerHTML = '';
            result = 0;  
        }

        numeros.push( numero.innerHTML );
        operacoes.push(tipo);
    }else if(result != 0){
        numeros = [];
        operacoes = [];
        memoria.innerHTML = '';
        numeros.push( result );
        operacoes.push(tipo);
        result = 0;   
    }
    
    numero.innerHTML = "0";
    memoria.innerHTML = '';
    
    for(var i=0; i<numeros.length; i++ ){
        memoria.innerHTML += ' '+ numeros[i] +' '+ operacoes[i];
    }
}


function resultado(){
    
    
    if(numero.innerHTML != '0'){
        numeros.push(numero.innerHTML);
    }
    
    for(var i=0; i<numeros.length; i++){
        result = this.executa( operacoes[i], numeros[i], result );
        console.log(numeros);
        console.log(operacoes);
    }
   
    memoria.innerHTML += ' '+ numero.innerHTML +' = <span id="resultado">' + result +'</div>';
    numero.innerHTML = '0';


  
    // numero.innerHTML = '0';
}


function executa(operacao, val1, val2){
    val1 = parseFloat(val1);
    val2 = parseFloat(val2);
    switch(operacao) {
        case '+':
            return val1 + val2;
            break;
        case '-':
            return (val1 - val2);
            break;
        case '*':
            console.log(val1);
            return val1 * val2;
            break;
        case '/':
            if(val2>0){
                return val1 / val2;
            }
            return 0;
            break;
        default:
            return val1;
    }
}
