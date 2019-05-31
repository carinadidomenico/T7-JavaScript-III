// Crie uma classe usuário que deve receber dois parâmetros no método construtor, e-mail e senha, e anotá-los em propriedades da classe.

// Crie uma classe com nome "Admin", essa classe deve extender uma segunda classe chamada "Usuario".

// A classe "Admin" por sua vez não recebe parâmetros próprios apenas e-mail e senha da classe pai (super). Deve ser criada uma propriedade interna this.admin = true em seu construtor.

// Agora com suas classes formatadas, adicione um método(função) na classe Usuario chamado isAdmin que retorna se o usuário é administrador ou não baseado na propriedade admin ser true ou não. (Realizando um if).

// const User1 = new Usuario('email@teste.com', 'senha123');
// const Adm1 = new Admin('email@teste.com', 'senha123');

// console.log(User1.isAdmin()) // false
// console.log(Adm1.isAdmin()) // true



// COM A FUNÇÃO isAdmin() DENTRO

class Usuario{
    constructor (email, senha) {
       this.email = email;
       this.senha = senha; 
    }
    isAdmin () {
        if (this.admin == true) {
            return ("O usuário é administrador")
        }
        else {
            return ("O usuário não é administrador")
        }   
    }
}

class Admin extends Usuario {
    constructor (email, senha) {
        super (email, senha);
        this.admin = true;
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true



// COM A FUNÇÃO isAdmin() FORA


class Usuario{
    constructor (email, senha) {
       this.email = email;
       this.senha = senha; 
    }
}

class Admin extends Usuario {
    constructor (email, senha) {
        super (email, senha);
        this.admin = true;
    }
}

Usuario.prototype.isAdmin = function () {
    
        if (this.admin == true) {
            return ("O usuário é administrador")
        }
        else {
            return ("O usuário não é administrador")
        }
}
