//add eventos nos icones
let icones = window.document.querySelectorAll('div.icone-informacao')
icones.forEach(element => {
    element.addEventListener('mouseenter', addInformacao)
    element.addEventListener('mouseenter', mouseEnterNoIcone)
    element.addEventListener('mouseout', removerInformacao)
    element.addEventListener('mouseout', mouseOutNoIcone)
})

function mouseEnterNoIcone(a) {
    let icone_tocado = Array.from(icones).indexOf(a.target)
    mudarCorIconeDeInformacao("white", "white", "blueviolet", icone_tocado)
}
function mouseOutNoIcone(a) {
    let icone_tocado = Array.from(icones).indexOf(a.target)
    mudarCorIconeDeInformacao("white", "blueviolet", "white", icone_tocado)
}
let p = window.document.querySelector('p')

function addInformacao(a) {
    function icone_tocado() {
        return (Array.from(icones).indexOf(a.target))
    }
    function criarBlocoInformativo() {
        const div = window.document.createElement('div')
        div.id = 'informacao'
        const h1 = window.document.createElement('h1')
        div.appendChild(h1)
        const p = window.document.createElement('p')
        div.appendChild(p)
        icones[icone_tocado()].insertAdjacentElement('beforeend', div)
        addTextos()
    }
    criarBlocoInformativo()
    function addTextos() {
        let titulo = window.document.querySelector('div#informacao h1')
        let texto = window.document.querySelector('div#informacao p')
        switch(icone_tocado()) {
            case 0:
                titulo.innerHTML = "Investimento"
                texto.innerHTML = "Simule quanto seu dinheiro renderia investindo no seu próprio negócio!"
                break;
            case 1: 
                titulo.innerHTML = "Juros compostos"
                texto.innerHTML = "Simule quanto seu dinheiro renderia com juros sobre juros!"
                break
            case 2: 
                titulo.innerHTML = "Ainda desenvolvendo"
        }
    }
}
function removerInformacao(a) {
    function icone_tocado() {
        return Array.from(icones).indexOf(a.target)
    }
    let icone = window.document.querySelectorAll('div.icone-informacao')
    icone[icone_tocado()].removeChild(window.document.querySelector('div#informacao'))
}
let article = window.document.querySelectorAll('main a')
article.forEach(element => {
    element.addEventListener('mouseenter', mouseEnterNoArticle)
    element.addEventListener('mouseout', mouseOutNoArticle)
    element.addEventListener('mousedown', clickNoIcone)
})
function mouseEnterNoArticle(a) {
    let article_tocado = Array.from(article).indexOf(a.target)
    mudarCorIconeDeInformacao("white", "blueviolet", "white", article_tocado)
}
function mouseOutNoArticle(a) {
    article_tocado = Array.from(article).indexOf(a.target)
    mudarCorIconeDeInformacao("blueviolet", "white", "blueviolet", article_tocado)
}
function clickNoIcone(a) {
    let article_tocado = Array.from(article).indexOf(a.target)
    mudarCorIconeDeInformacao("blueviolet", "white", "blueviolet", article_tocado)
}
function mudarCorIconeDeInformacao(a, b, c, i) {
    let icones = window.document.querySelectorAll('div.icone-informacao')
    icones[i].style.borderColor = a
    icones[i].style.background = b
    icones[i].style.color = c
}
/*
tenho uma div e quero que ao clicar nela apareca um div vermelha, só que essa div tem que aparecer próxima da div que a disparou, porém tem que se ajustar ao conteudo, se for faltar espaço para que ela apareça ela aparece em outra parte que ela caiba
*/