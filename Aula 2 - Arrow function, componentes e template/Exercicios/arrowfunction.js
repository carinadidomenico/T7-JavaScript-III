// 1º exercício

// Converta as funções nos seguintes trechos de código em Arrow Functions:



// 1.1

const arr = [1, 2, 3, 4, 5];

arr.map(function(item) {
  return item + 10;
});

const array = (arr).map();




// 1.2

// Dica: Utilize uma constante pra function

const usuario = { nome: 'Diego', idade: 23 };


// FUNÇÃO NORMAL
function mostraIdade(usuario) {
  return usuario.idade;
}

mostraIdade(usuario);

// ARROW FUNCTION

const mostraIdade = (usuario) => (usuario.idade)

ou

const mostraIdade = (usuario) => {
  // Usar chaves quando o código tiver mais de uma linha
  return (usuario.idade)
}




// 1.3

// Dica: Utilize uma constante pra function

const nome = "Diego";
const idade = 23;

function mostraUsuario(nome = 'Diego', idade = 18) {
  return { nome, idade };
}

mostraUsuario(nome, idade);
mostraUsuario(nome);

ou

const mostraUsuario = (nome, idade) => (nome,idade);