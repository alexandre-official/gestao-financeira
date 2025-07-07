function verificarInputNum(n, t) {
    if(Number(n.value)) {
        if(Number(n.value) > 0) {
            return true
        } else {
            addErro('Números negátivos não são aceitos!')
            return false
        }
    } else {
        addErro(t)
        return false
    }
}
function addErro(t) {
    const bloco_de_erro = window.document.createElement('div')
    bloco_de_erro.classList.add('bloco-de-erro')
    window.document.body.appendChild(bloco_de_erro)
    //h1
    const h1 = window.document.createElement('h1')
    h1.innerHTML = 'Erro'
    bloco_de_erro.appendChild(h1)
    //p
    const p = window.document.createElement('p')
    p.innerHTML = t
    bloco_de_erro.appendChild(p)
    function addBotao() {
        const input = window.document.createElement('input')
        input.type = 'button'
        input.value = 'Entendi'
        input.classList.add('botao')
        input.classList.add('botao-escuro')
        bloco_de_erro.appendChild(input)
        function addEventoBotao() {
            input.addEventListener('click', removerBotao)
        }
        addEventoBotao()
        function removerBotao() {
            window.document.body.removeChild(bloco_de_erro)
        }
    }
    addBotao()
}
function addBlocoDeResposta() {
    const bloco_de_resposta = window.document.createElement('div')
    bloco_de_resposta.id = 'bloco-de-resposta'
    window.document.body.appendChild(bloco_de_resposta)
}
addBlocoDeResposta()