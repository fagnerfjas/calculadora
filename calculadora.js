
var numero = document.getElementById('numero');
var strMemoria = document.getElementById('memoria');
var operacoes = [];
var numeros = [];
var result = null;


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

/**
 * Monta a lista de dados para executar a operação em outra função 
 * @param {String} tipo 
 */
function operacao(tipo){
    if(tipo == "-" && numero.innerHTML == "0"){
        this.digito("-");
        return;
    }
    if( isNaN( parseFloat(numero.innerHTML) ) ){
        console.log('Foi inserido o sinal de - sozinho, isso não pode!')
        return;
    }

    numeros.push( numero.innerHTML );
    operacoes.push( tipo );
    numero.innerHTML = "0";

    memoria.innerHTML = '';
    for(var i=0; i<numeros.length; i++ ){
        memoria.innerHTML += ' '+ numeros[i] +' '+ operacoes[i];
    }

    console.log(numeros);
    console.log(operacoes);
    console.log(result);
}




function resultado(){
    
    if(numero.innerHTML != '0'){
        numeros.push(numero.innerHTML);
    }
    
    if(result == null){
        result = numeros[0];
    }
    
    for(var i=0; i<operacoes.length; i++){
        result = parseFloat(result) - parseFloat(numeros[i+1]);
        console.log(numeros[i]);
        console.log(operacoes[i]);
        console.log(result);
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
            break;
        default:
            return val1;
    }
}

/**
 * Cancel Entry
 */
function cancelEntry(){
    strMemoria.innerHTML = '';
    numero.innerHTML = "0";
    numeros = [];
    operacoes = [];
}
