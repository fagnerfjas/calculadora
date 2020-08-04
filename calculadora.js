
var numero = document.getElementById('numero');
var memoria = document.getElementById('memoria');
var operacoes = [];
var numeros = [];
var result = 0;


/**
 * Apaga o último caractere digitado no display da calculadora
 */
function backspace(){
    if(numero.innerHTML.length > 1){
        numero.innerHTML = numero.innerHTML.substring(0, numero.innerHTML.length-1);
    }else{
        numero.innerHTML = "0"
    }
}


/**
 * Entrada de valores do teclado da calculadora
 * @param {string} val 
 */
function digito(val){
  
    if(val == "." && numero.innerHTML == "0"){
        numero.innerHTML = "0.";
    }else if(val == "." && numero.innerHTML == "-"){
        numero.innerHTML = "-0.";
    }else if(val == "00" && numero.innerHTML == "0"){
        numero.innerHTML = "0";
    }else{
        if(numero.innerHTML == "0"){
            numero.innerHTML = "";
        }

        if(val == "." && numero.innerHTML.indexOf(".") != -1 ){
            val = "";
        }

        numero.innerHTML += val;
    }
}


function operacao(tipo){
    if(tipo == "-" && numero.innerHTML == "0"){
        this.digito("-");
        return;
    }

    if(numero.innerHTML != 0){
        if(result != 0){
            numeros = [];
            operacoes = [];
            memoria.innerHTML = '';
            result = 0;  
        }

        numeros.push(numero.innerHTML);
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

    console.log(numeros);
    console.log(operacoes);
    console.log(parseFloat("-.8"));
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
