// 1º exercício

// Crie um array de alunas contendo as informações: nome, idade, materia_preferida, conforme exemplo abaixo:

const alunas = [
    { nome: "Mari", idade: 23, materia_preferida: "JavaScript" },
    { nome: "Joana", idade: 15, materia_preferida: "JQuery" },
    { nome: "Lucrecia", idade: 30, materia_preferida: "Bootstrap" }
  ];


//   1.1 Utilizando o `map`

//  Percorra o array alunas e retorne outro array contendo apenas as idades de todas as alunas. Exemplo:
  
  [
    23,
    15,
    30
  ]
    
  let mostrarIdades = alunas.map(function idade(x){
        return x.idade
      })



// 1.2 Utilizando o `filter`

// Retorne um array que contenha os dados da alunas que tem a idade maior que 24. Exemplo:

[
  {  nome: "AAA", idade: 30, materia_preferida: "Bootstrap" }
]

function idadeMaior () {
  if (alunas.idade >= 24) {
    return
  }  
}

let idadeMaior = alunas.filter (idadeMaior());

//  1.3 Utilizando o `find`

// Retorne um array que encontre as alunas na qual a matéria preferida seja JavaScript. Exemplo:

[
  { nome: "XXX", idade: 23, materia_preferida: "JavaScript" }
]


// 1.4 Unindo operações

// Multiplique a idade de todas alunas por dois e depois realize um filtro nas que possuem no máximo 25 anos: 

// Resultado:
[
  { nome: "XXX", idade: 23, materia_preferida: "JavaScript" },
  { nome: "ZZZ", idade: 15, materia_preferida: "JQuery" },
]



  
 
