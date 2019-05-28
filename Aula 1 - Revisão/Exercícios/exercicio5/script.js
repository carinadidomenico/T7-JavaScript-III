// A partir do exercício 4, adicione um input e um botão, na qual seja possível inserir um valor, ao clicar no botão, o value do input deverá ser adicionado à lista e inserido na ul.

let input = document.querySelector ("input");
let listaUl = document.querySelector("ul");
let btn = document.querySelector("button");

btn.addEventListener ('click', function(){

    if(input.value != 0 ){
        let listaItem = document.createElement ('li'); 
        let valor = document.createTextNode (input.value);
        listaUl.appendChild (listaItem);
        listaItem.appendChild (valor);
        limparInput();
    }

})

function limparInput (){
    input.value = ""
}