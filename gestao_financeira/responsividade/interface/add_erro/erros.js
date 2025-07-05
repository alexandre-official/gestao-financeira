let erro_adicionado = false
function addErro(a) {
    if(!erro_adicionado) {
        function criarBloco() {
            const div = window.document.createElement('div')
            div.id = 'mensagem-de-erro'
            const h1 = window.document.createElement('h1')
            h1.textContent = 'Erro'
            div.appendChild(h1)
            const p = window.document.createElement('p')
            p.innerHTML = a
            div.appendChild(p)
            window.document.body.appendChild(div)
            erro_adicionado = true
        }
        criarBloco()
        let bloco = window.document.querySelector('#mensagem-de-erro')
        function addBotao() {
            function criarBotao() {
                const input = window.document.createElement('input')
                input.type = 'button'
                input.value = 'Entendi'
                input.classList.add('botao-padrao')
                bloco.appendChild(input)
            }
            criarBotao()
            function removerMensagemDeErro() {
                window.document.body.removeChild(bloco)
                erro_adicionado = false
            }
            window.document.querySelector('#mensagem-de-erro input').addEventListener('click', removerMensagemDeErro)
        }
        addBotao()
    }
}