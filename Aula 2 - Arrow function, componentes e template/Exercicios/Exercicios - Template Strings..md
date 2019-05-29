# Exercícios: 

## 1º Exercício

Converta o seguinte trecho de código utilizando Template Literals:

```js
const usuario = 'Amélia';
const idade = 25;

// console.log('O usuário ' + usuario + ' possui ' + idade + ' anos');
console.log (`O usuário ${usuario} possui ${idade} anos`);
```

## 2º exercício

Crie uma função que dado o objeto a seguir:

```js
var endereco = {
  curso: 'Reprograma',  
  local: 'Estação Hack',
  rua: 'Avenida Paulista',
  numero: 1374,
  bairro: 'Bela Vista',
  cidade: 'São Paulo',
  uf: 'SP'
};
```

Retorne o seguinte conteúdo:

```js
O curso da Reprograma acontece na Estação Hack que fica localizada em São Paulo / SP, no bairro Bela Vista, na "Avenida Paulista", nº 1374.

console.log (`O curso da ${endereco.curso} acontece na ${endereco.local} que fica localizada em ${endereco.cidade}/${endereco.uf}, no bairro ${endereco.bairro}, na ${endereco.rua}, número ${endereco.numero}`)

```
## 3º exercício

Dado o seguinte vetor de objetos:

```js
var usuarios = [
  {
    nome: 'Bruna',
    habilidades: ['Javascript', ' ReactJS', ' Redux']
  },
  {
    nome: 'Gabriela',
    habilidades: ['VueJS', ' Ruby on Rails', ' Elixir']
  }
];

function exibirHabilidades (usuarios) {
  for (elemento of usuarios) {
    console.log (`A ${elemento.nome} possui as habilidades: ${elemento.habilidades.join(" - ")}`);
  }
}


    console.log (`A ${usuarios[0].nome} possui as habilidades: ${usuarios[0].habilidades}\nA ${usuarios[1].nome} possui as habilidades: ${usuarios[1].habilidades}`);
```

Escreva uma função que produza o seguinte resultado:

```js
// COM O \N:
A Bruna possui as habilidades: Javascript, ReactJS, Redux
A Gabriela possui as habilidades: VueJS, Ruby on Rails, Elixir


//  COM O JOIN:

A Bruna possui as habilidades: Javascript -  ReactJS -  Redux
VM7171:3 A Gabriela possui as habilidades: VueJS -  Ruby on Rails -  Elixir
```
