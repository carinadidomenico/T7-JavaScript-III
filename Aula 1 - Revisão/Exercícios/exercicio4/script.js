// Crie um arquivo html que contenha uma lista com nomes, e a partir destes gere uma ul, onde cada li será gerado apresentando os nomes. Exemplo:

let mercado = ["manteiga", "fruta", "queijo", "bolacha", "macarrão"];
let lista = document.querySelector("ul");
for(elements of mercado) {
    let itemLista = document.createElement ('li');   
    lista.appendChild (itemLista);
    itemLista.textContent = elements;
}
