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
addErro('Adicione um valor!')
addErro("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam eum consectetur deleniti soluta dolores, ipsam repellat accusamus. Ratione officia tempore voluptate quasi fugit eos cupiditate reprehenderit! Exercitationem saepe neque laboreLorem ipsum dolor sit amet consectetur adipisicing elit Numquam eum consecte")