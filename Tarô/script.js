    let cartasTarot = [
    {
        carta: "A imperatriz",
        descricao: "Os cabelos da Imperatriz representam, na sua maioria, a sabedora e a experiência de vida. O seu vestido vermelho, simboliza a vitalidade que a Imperatriz preconiza. A Imperatriz é a inteligência no seu estado mais puro, mas que precisa ser trabalhada. É uma mulher bastante generosa, independente e com muita vitalidade. Serena e exige aprendizagem. Um dos grandes obstáculos é a preguiça. A Imperatriz traz bens materiais. Quando, num jogo de tarot, lhe sair a carta da Imperatriz, é sinal que as conquistas poderão começar a ser mais fáceis. Aproveite esta altura de sorte e arrisque novos projetos e desafios.",
        simbolismo: "Filhos, Elegância, Beleza e sensualidade.",
        imagem: "https://vid-fr.s3.amazonaws.com/repo/theempress.jpg"
    },
    {
        carta: "A sacerdotiza",
        descricao: "A tiara que a Sacerdotisa possui simboliza os três planos dominantes: Vitalidade, Ação e a Mente. O lado escuro da Sacerdotisa representa o poder negro que possui para parar todos os outros. Interpretações possíveis: Modéstia, Paciência e Fertilidade. A Sacerdotisa possui ainda poderes do oculto. É solitária, mas feliz. Por vezes simboliza as mulheres como objeto. Atuação exige-se.",
        simbolismo: "Intuição, Conhecimento, Equilíbrio e recetividade.",
        imagem: "https://vid-fr.s3.amazonaws.com/repo/thehighpriestress.jpg"
    },
    {
        carta: "O imperador",
        descricao: "A coroa que pode ver na carta do Imperador simboliza tudo aquilo que ele representa, e ele está acima de todas as influências. O manto vermelho que enverga simboliza as ações que faz com o poder de sua mente. Sua barba é indicativa de muita sabedoria, sendo um homem muito eloquente, solidário e bastante prático. Dependendo das cartas que saem junto dele, no lançamento das cartas de Tarot, pode ser terrível ou um poderoso protetor. Significa boas notícias e a concretização de planos e projetos antigos. Precisa de economia e disciplina, mas também necessita se esforçar para equilibrar o campo material.",
        simbolismo: "Masculinidade, Paternidade, Liderança e Conquista.",
        imagem: "https://vid-fr.s3.amazonaws.com/repo/theemperor.jpg"
    },
    {
        carta: "O papa",
        descricao: "O Papa é a experiência e todo o poder espiritual. Veste uma capa vermelha e azul e isso representa amor, reflexão e equilíbrio em todos os campos. Mas o Papa tem também seus pontos negativos, como a opressividade e a capacidade de ser demasiado dogmático. Uma das muitas interpretações desta carta é a capacidade de dar bons conselhos, ter um casamento feliz. Mas indica também que deve respeitar as rotinas e normas familiares e analisar racionalmente todos os fatos. O Papa representa também as pessoas com muitos valores morais e fortes convicções espirituais. Acredita fortemente no futuro e a sua forma de ser o protege contra todos os males. ",
        simbolismo: "Educação e Ensino, Ajuda Superior e Espiritualidade.",
        imagem: "https://vid-fr.s3.amazonaws.com/repo/thehierophant.jpg"
    },
    {
        carta: "O mago",
        descricao: "Mago representa os quatro elementos naturais, com as suas correspondências: Ar é representado pela faca, Água representado pela taça, Terra pelo pentáculo e a varinha a representar o Fogo. Quando sai a carta de Mago num jogo de Tarot poderá estar a falar-se de êxito no plano físico, espiritual e intelectual. É o sinal da recuperação, da regeneração e do reinício. O mago simboliza, em grande parte, ultrapassagem de obstáculos que a vida lhe coloque. É a carta certa para quem tem problemas difíceis de resolver.",
        simbolismo: "Poder, Comunicação, Divino, Força e Talento.",
        imagem: "https://vid-fr.s3.amazonaws.com/repo/themagician.jpg",
    },
    {
        carta: "Os enamorados",
        descricao: "Os cabelos loiros da carta dos Amantes simbolizam o mais puro ouro, inacessível aos que possuem algum tipo de contaminação. Quando olhamos para a carta, vemos que a pessoa do centro se encontra de pés assentes na terra e isso simboliza a saúde. Algumas das interpretações que podemos retirar desta carta de Tarot são: Grandes dificuldades para tomar decisões. Muitos desejos e excesso de caprichos. Muito perto da possessividade. A carta indica a necessidade de ter grande equilíbrio, quer ao nível físico, quer a nível emocional. Indica e representa casamento, união e necessidade de tomar decisões no trabalho. Pode também significar insatisfação sentimental, laboral e familiar. Use a intuição para o ajudar a tomar uma decisão breve.",
        simbolismo: "Grandes decisões a ser tomadas. Barreiras ultrapassadas.",
        imagem: "https://vid-fr.s3.amazonaws.com/repo/thelovers.jpg",
    },
    {
        carta: "O carro",
        descricao: "Olhando para a carta de Tarot «O carro» podemos ver um condutor puxado por um carro com dois cavalos que olham para a esquerda e que representam o capo material e espiritual. A couraça que possuem significa o poder sobre o material. Num jogo de tarot, pode significar viagens repentinas, transformações ou mudanças. Indica que necessita ter controlo sobre as emoções e os sentimentos. Pode significar início de um novo ciclo de trabalho ou de maiores responsabilidades. Os recursos financeiros, de conhecimento, espirituais e materiais não são suficientemente grandes para ser empreendedor porque há ainda muito para aprender. Um dos pontos negativos é ter demasiado entusiasmo.",
        simbolismo: "Talento, Diplomacia e Êxito.",
        imagem: "https://vid-fr.s3.amazonaws.com/repo/thechariot.jpg",
    },
    // {
    //     carta: "",
    //     descricao: "",
    //     simbolismo: "",
    //     imagem: "",
    // },
]

const mostrarCarta = (cartasTarot) => {
    return cartasTarot.map ((carta) =>{
        return (`<div class="cartas">
        <img src="${carta.imagem}" alt="Imagens">
        <h3>${carta.carta}</h3>
        <p>${carta.descricao}</p>
        <h4>Simbolismo:</h4>
        <p>${carta.simbolismo}</p>
    </div>`)
    }).join(" ")
}

document.querySelector ("#container").innerHTML += mostrarCarta(cartasTarot);