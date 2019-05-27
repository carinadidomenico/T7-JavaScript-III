// Crie uma função que leia um valor e exiba se ele é par ou ímpar:

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