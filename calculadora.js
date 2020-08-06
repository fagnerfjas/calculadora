/**
 * @author Fagner Jefferson
 * @abstract fagnerfjas@gmail.com
 * @abstract  05/08/2020 - Calculadora convencional - Este é um material de estudos para os alunos da ECIT Inácio Antonino - Serra Branca PB 
 */

//Atribuição de variáveis
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
    if(tipo == "-" && numero.innerHTML == "0" && result == null){
        this.digito("-");
        return;
    }
    if( isNaN( parseFloat(numero.innerHTML) ) ){
        console.log('Foi inserido o sinal de - sozinho, isso não pode!')
        return;
    }
    if(result != null){
        var auxResult = result;
        this.cancelEntry();
        numeros.push( auxResult );
        operacoes.push( tipo );
    }else{
        numeros.push( numero.innerHTML );
        operacoes.push( tipo );
        numero.innerHTML = "0";
        memoria.innerHTML = '';
    }

    for(var i=0; i<numeros.length; i++ ){
        memoria.innerHTML += ' '+ numeros[i] +' '+ operacoes[i];
    }
    numeros.innerHTML = "0";
}

/**
 * Faz o calculo e gera o resultado das operações
 */
function gerarResultado(){
    numeros.push(numero.innerHTML);
    result = eval(memoria.innerHTML += ' '+ numero.innerHTML);
    console.log(result);
    memoria.innerHTML += ' = <span id="resultado">' + result +'</div>';
    numero.innerHTML = "0";
}

/**
 * Cancel Entry
 * Cancela todas as intradas de informação como o botão "CE" 
 * Das calculadora convencionais
 */
function cancelEntry(){
    strMemoria.innerHTML = '';
    numero.innerHTML = "0";
    numeros = [];
    operacoes = [];
    result = null;
}
