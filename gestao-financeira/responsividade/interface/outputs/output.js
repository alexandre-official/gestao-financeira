let bloco_de_resposta
function addBlocoDeResposta() {
    function criarBloco() {
        const bloco = window.document.createElement('article')
        bloco.id = 'bloco-de-resposta'
        window.document.body.appendChild(bloco)
        bloco_de_resposta = bloco
    }
    criarBloco()
}
function addDiv(...a) {
    const div = window.document.createElement('div')
    bloco_de_resposta.appendChild(div)
    a.forEach(element => {
        div.appendChild(element)
    })
}
function addH1(a, b) {
    const h1 = window.document.createElement('h1')
    h1.innerHTML = a
    if(!b) {
        bloco_de_resposta.appendChild(h1)
    } else {
        return h1
    }
}
function addH2(a, b) {
    const h2 = window.document.createElement('h2')
    h2.innerHTML = a
    if(!b) {
        bloco_de_resposta.appendChild(h2)
    } else {
        return h2
    }
}
function addP(a, b) {
    const p = window.document.createElement('p')
    p.innerHTML = a
    if(!b) {
        bloco_de_resposta.appendChild(p)
    } else {
        return p
    }
}
function converterPraMoeda(num) {
    return num.toLocaleString('PT-BR', {style: 'currency', currency: 'BRL'})
}
function addQuebraLinha() {
    const br = window.document.createElement('br')
    bloco_de_resposta.appendChild(br)
}
function addBotaoVoltar() {
    function criarBotao() {
        const input = window.document.createElement('input')
        input.type = 'button'
        input.value = 'Voltar'
        input.classList.add('botao-contraste')
        input.classList.add('botao-padrao')
        input.addEventListener('click', removerBloco)
        bloco_de_resposta.appendChild(input)
        function removerBloco() {
            window.document.body.removeChild(bloco_de_resposta)
        }
    }
    criarBotao()
}