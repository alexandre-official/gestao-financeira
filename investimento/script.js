var button_iniciar = window.document.querySelector('input[type="button"]')
button_iniciar.addEventListener('click', iniciar)

function iniciar() {
    calculando();
}
function calculando() {
    var custo = Number(window.document.querySelector('input#custo-id').value)
    var preco = Number(window.document.querySelector('input#preco-id').value)
    var lucro = preco - custo
    var lucroPorcentagem = lucro / (custo / 100)
    p.innerHTML = `${lucroPorcentagem}%`
}
var p = window.document.getElementsByTagName('p')[1]

































/*var botao_calcular = window.document.querySelector('input[type="button"][value="Calcular"]')
botao_calcular.addEventListener('click', chamarFuncoes)

function chamarFuncoes() {
    calculando();
    criarblocoDeResposta();
}
function calculando() {
    var custo = Number(window.document.querySelector('input#custo-id').value)
    var preco = Number(window.document.querySelector('input#preco-id').value)
    criarblocoDeResposta();
    var p02 = window.document.querySelector('section p')
    var lucro = preco - custo/*
    lucro = lucro.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    p02.innerHTML = `Lucro de ${lucro} `
}
let executado = false
function criarblocoDeResposta() {
    if(executado == false) {
        const section = window.document.createElement("section")
        section.className = "bloco-resposta"

        const titulo = window.document.createElement("h1")
        titulo.textContent = "Lucro"
        section.appendChild(titulo)

        const paragrafo = window.document.createElement("p")
        paragrafo.textContent = "Adicione texto"
        section.appendChild(paragrafo)

        document.body.appendChild(section)
        executado = true
    }
}*/