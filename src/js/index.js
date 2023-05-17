//Obj 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body para que os estilos do modo escuro sejam aplicados e mudar a imagem para lua 

//passo 1: pegar mo JS o elemento HTML correspondente ao botão de troca de tema
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

// passo 2 - dar um jeito de pegar no JS o elemento HTML correspondente ao body
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

//passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
botaoAlterarTema.addEventListener("click", () => {
    ;

    //- passo 4 - verificar se o body já tem a calsse modo- escuro
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro")

    // Obj 2 - quando clicar no botão de troca de tema, caso o body já tenha a classe modo-escuro, remover a classe para mudar para o modo claro e mudar imagem para o sol
    body.classList.toggle("modo-escuro");
    if (modoEscuroEstaAtivo) {
        //- passo 6 trocar a imagem do botão de alterar tema para o sol
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png")
    } else {
       // - passo 8 - trocar a imagem do botão de alterar tema pra lua
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")

    }

})

