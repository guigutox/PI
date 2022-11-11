var variavel1 = 1;
//Variavel com escopo local se declarada dentro de uma função
//Variavel com escopo global se declarada fora de funções
//Pode ser redeclarada e pode ter valor atualizado
//Variaveis globais tambem pode ser acessadas pelo objeto window

let variavel2 = 1;
//Variavel de escopo restrito ao bloco de codigo
//Pode ser acessada e atualizada apenas dentro do bloco
//Nao pode ser redeclarada no mesmo bloco

const variavel3 = 1;
//Semelhante a let
//Nao pode ser atualizada
//Deve ser inicializada no momento da declaração

// exemplo:

const pi = 3.14;
var soma = 0; //Soma é uma variavel global
for(let i = 1; i <= 10; i++){
    soma += i;
}

if(soma > 50){
    let k = soma + pi; //k so pode ser acessada aqui dentro
    var m = k + 1;
    console.log(k);
}

console.log(m); //mostrará o valor de m normalmente
//console.log(k); //erro, pois k é restrita ao bloco do if acima


// Operador + pode somar ou concatenar

let x = 5 + 5; //X terá o valor de 10
let y = "5" + 5 //Y terá a string '55'


//Operador ==
//Compara apenas valores
//Operandos de tipos diferentes são convertidos e valores comparados


//Operador ===
//Compara o valor e o tipo dos operandos
//Operandos de tipos diferentes sempre resulta em falso

//1 == true; //true
//1 === true; //false
//10 == "10" //true
//10 === "10" //false


//window
//Representa a aba do navegador que contém a página
//Possibilita obter informações ou realizar ações a respeito da janela, como:
    //Obter dimensões: window.innerWidth e window.innerHeight
    //Executar uma ação quando a aba for carregada, fechada, etc.

//navigator (ou window.navigator)
    //Representa o navegador de internet em uso(browser, user-agent)
    //Fornece informações como idioma do navegador, geolocalização, memoria, etc.
    //Ex: alert(navigator.language); //Mostra "pt-BR"

//document (ou window.document)
    //Representa o documento HTML carregado na aba do navegador
    //Possibilita a manipulação da arvore DOM


//METODO para E/S
//window.alert //exibe uma caixa de diálogo para mensagens (botão Ok)
//window.confirm //exibe uma caixa de diálogo para confirmação (Ok/Cancelar)
//window.prompt //exibe uma caixa de diálogo para entrada de texto
//document.write //adiciona conteúdo no documento HTML
//console.log //registra conteúdo de log no console do navegador
//console.warn //registra mensagem de warning no console do navegador
//console.error //registra mensagem de erro no console do navegador


function nome(par1, par2, par3,){
    //operaçoes
    //operaçoes
    //operações
}

function max(a,b){
    if(a > b)
        return a;
    else
        return b;
}

let maior = max(2,5);

//Funções para tratar eventos podem ser indicadas, na maioria do casos, de duas formas:
    //Utilizando propriedades de eventos
    //Utilizando o método addEventListener

//Propriedades de tratamento de eventos
//Permite indicar uma função a ser executada na o   
 window.onload //= funcaoIniciaPagina
//O evento load ocorre qnd a pagina inteira é carregada

//Metodo addEventListener
//Adiciona uma função a ser executada na ocorrencia de um evento
//window.addEventListener("load", funcaoIniciaPagina)
// o primeiro parâmetro é o nome do evento e não tem 'on'
// o segundo parâmetro define a função para tratar o evento,
// também conhecida como função de callback


function mostraMsg(){
    alert('Hello!');
    console.log('Hello!');
}

window.onload = mostraMsg;


function mostraMsg(){
    alert('Hello');
    console.log('Hello!');
}

window.addEventListener('load', mostraMsg);


//Funções Anonimas

function funcaoIniciaPagina(event){ //Função tradicional definida e depois indicada para tratar evento

    //operações
}
window.onload = funcaoIniciaPagina;

window.onload = function(event){ //Função anonima indicada para tratar evento ao mesmo tempo em que é definida
    //operações
}

window.onload = function(){
    alert('Hello!');
};

window.addEventListener('load', function(){
    this.alert('Hello!');
});


//slide 25
