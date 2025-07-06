function addErro(t) {
    const bloco_de_erro = window.document.createElement('div')
    bloco_de_erro.classList.add('bloco-de-erro')
    window.document.body.appendChild(bloco_de_erro)
    //h1
    const h1 = criarH1('Erro')
    bloco_de_erro.appendChild(h1)
    //p
    const p = criarP(t)
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
function criarH1(s) {
    const h1 = window.document.createElement('h1')
    h1.innerHTML = s
    return h1
}
function criarP(s) {
    const p = window.document.createElement('p')
    p.innerHTML = s
    return p
}