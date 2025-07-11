function verificarNum(n, t) {
    if(Number(n)) {
        if(Number(n) > 0) {
            let num = String(n).split('.')
            /*split = dividir. Ele divide o numero a partir do '.' (ponto) e coloca num array e a parte antes do '.' fica no array[0] e a parte depois do '.' fica no array[1]*/
            if(num.length === 2) {
                if(num[1].length > 3) {
                    addErro('Números com mais de três casas decimais não são aceitos!')
                } else {
                    return true
                }
            } else {
                return true
            }
        } else {
            addErro('Números negátivos não são aceitos!')
            return false
        }
    } else {
        addErro(t)
        return false
    }
}
let erro_adicionado = false
function addErro(t) {
    if(!erro_adicionado) {
        erro_adicionado = true
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
                erro_adicionado = false
            }
        }
        addBotao()
    }
}
let bloco_de_resposta
function addBlocoDeResposta() {
    const div = window.document.createElement('div')
    div.id = 'bloco-de-resposta'
    window.document.body.appendChild(div)

    const input = window.document.createElement('input')
    input.value = 'Remover'
    input.type = 'button'
    input.classList.add('botao')
    div.appendChild(input)

    input.addEventListener('click', removerResposta)
    function removerResposta() {
        window.document.body.removeChild(div)
    }

    bloco_de_resposta = div
}
function addDiv(...e) {
    const div = window.document.createElement('div')
    bloco_de_resposta.appendChild(div)
    e.forEach(element => {
        div.appendChild(element)
    })
}
function addH1(t, call) {
    const h1 = window.document.createElement('h1')
    h1.innerHTML = t
    if(call && call === 'divCall') {
        return h1
    } else {
        bloco_de_resposta.appendChild(h1)
    }
}
function addH2(t, call) {
    const h2 = window.document.createElement('h2')
    h2.innerHTML = t
    if(call && call === 'divCall') {
        return h2
    } else {
        bloco_de_resposta.appendChild(h2)
    }
}
function addP(t, call) {
    const p = window.document.createElement('p')
    p.innerHTML = t
    if(call && call === 'divCall') {
        return p
    } else {
        bloco_de_resposta.appendChild(p)
    }
}
function virarMoeda(n) {
    return n.toLocaleString('PT-BR', {style: 'currency', currency: 'BRL'})
}
/*
const bloco_de_resposta = window.document.createElement('div')
bloco_de_resposta.id = 'bloco-de-resposta'

function addBlocoDeResposta() {
    window.document.body.appendChild(bloco_de_resposta)
}
function addBotaoRemover() {
    const input = window.document.createElement('input')
    input.type = 'button'
    input.value = 'Remover'
    input.classList.add('botao')
    bloco_de_resposta.appendChild(input)
    input.addEventListener('click', removerBloco)
    function removerBloco() {
        window.document.body.removeChild(bloco_de_resposta)
    }
}
function addDiv(...a) {
    const div = window.document.createElement('div')
    bloco_de_resposta.appendChild(div)
    a.forEach(element => {
        div.appendChild(element)
    })
}
function addH1(t, call) {
    const h1 = window.document.createElement('h1')
    h1.innerHTML = t
    if(call === 'divCall') {
        return h1
    } else {
        bloco_de_resposta.appendChild(h1)
    }
}
function addH2(t, call) {
    const h2 = window.document.createElement('h2')
    h2.innerHTML = t
    if(call === 'divCall') {
        return h2
    } else {
        bloco_de_resposta.appendChild(h2)
    }
}
function addP(t, call) {
    const p = window.document.createElement('p')
    p.innerHTML = t
    if(call === 'divCall') {
        return p
    } else {
        bloco_de_resposta.appendChild(p)
    }
}*/