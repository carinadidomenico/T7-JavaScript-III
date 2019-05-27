# Exercícios: 

## 1º exercício

```js

Crie uma função que leia um valor e exiba se ele é par ou ímpar:

function parImpar (valor) {
  if (typeof (valor) == "number"){
    if (parseInt (valor) % 2 == 0) {
      console.log ("É par.");
    }
    else if (valor % 2 != 0) {
      console.log ("É impar.");
    }
  }
    else {
      console.log ("Digite um número válido!")
    }
}

```


## 2º exercício

Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:

```js (serve para colocar um códigos javascript em um arquivo.md)
function pares(x, y) {
  for (var i = x; i < y; i++ ){
    if (x % 2 == 0){
      console.log (x)
    }
    x++;
  }
}

ou 

function pares(x, y) {
  for (var i = x; i < y; i++ ){
    if (i % 2 == 0){
      console.log (i)
    }
  }
}


pares(32, 321);
```

## 3º exercício

Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:

```js
function experiencia(anos) {
  
}

var anosEstudo = 7;
experiencia(anosEstudo);

// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master
```

# 4º exercício

Crie um arquivo html que contenha uma lista com nomes, e a partir destes gere uma ul, onde cada li será gerado apresentando os nomes. Exemplo:

```js
var nomes = ["aaa", "bbb", "ccc"];

* aaa
* bbb
* ccc

```

# 5º exercício

A partir do exercício 3, adicione um input e um botão, na qual seja possível inserir um valor, ao clicar no botão, o value do input deverá ser adicionado à lista e inserido na ul.



