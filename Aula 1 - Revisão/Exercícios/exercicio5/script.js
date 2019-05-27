// A partir do exercício 4, adicione um input e um botão, na qual seja possível inserir um valor, ao clicar no botão, o value do input deverá ser adicionado à lista e inserido na ul.

let lista = document.querySelector("ul");
let input = document.querySelector ("input").value;
let item = document.createElement ("li")
let btn = document.querySelector("button");

btn.addEventListener ('click', function(){
    lista.innerHTML(input.value);
})
