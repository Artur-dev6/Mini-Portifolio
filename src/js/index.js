const abas = document.querySelectorAll(".aba");
abas.forEach(aba => {
    aba.addEventListener("click", function() {

        if(aba.classList.contains("selecionado")){
            return;
        }

        selecionarAba(aba)
        mostrarInformacoesDaAba(aba)
    });
});

function selecionarAba(aba){
    const abaselecionada = document.querySelector(".aba.selecionado");
        abaselecionada.classList.remove("selecionado");

        aba.classList.add("selecionado");
}

function mostrarInformacoesDaAba(aba){
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
        informacaoSelecionada.classList.remove("selecionado");

        const idDoElementoDeInformacoes = `informacao-${aba.id}`

        const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoes)
        informacaoASerMostrada.classList.add("selecionado")
}