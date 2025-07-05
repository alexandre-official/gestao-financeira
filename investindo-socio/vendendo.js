//criando evento no icone de informacao
/*
const icone_info = window.document.querySelectorAll('div.icone-info')

icone_info.forEach(addEvento => {
    addEvento.addEventListener('mouseenter', addInformacao)
    addEvento.addEventListener('mouseout', removerInformacao)
});
//criando elementos 
//criando div de informacao
const div_informacao = window.document.createElement('div')
div_informacao.id = 'informacao'
//criando h1
const titulo = window.document.createElement('h1')
function tituloAdicionado(t) { 
    titulo.textContent = t
    div_informacao.appendChild(titulo)
}
//criando paragrafo
const texto = window.document.createElement('p')
function textoAdicionado(p) {
    texto.textContent = p
    div_informacao.appendChild(texto)
}
//colocando a div no documento
let indice_icone 
function addInformacao(evento) {
    indice_icone = Array.from(icone_info).indexOf(evento.target)
    switch(indice_icone) {
        case 0: 
            //informacao do valor investido
            tituloAdicionado("Valor investido")
            textoAdicionado('Coloque o valor que foi investido!')
            icone_info[indice_icone].appendChild(div_informacao)
            break;
        case 1:
            //informacao do aporte
            tituloAdicionado("Aporte")
            textoAdicionado("Caso tenha mais um investidor, coloque aqui o valor investido por ele!")
            icone_info[indice_icone].appendChild(div_informacao)
            break;
        case 2:
            //informacao do retorno
            tituloAdicionado("Retorno em anos")
            textoAdicionado("Coloque quantos anos deseja que o dinheiro investido retorne!")
            icone_info[indice_icone].appendChild(div_informacao)
            break;
        case 3:
            tituloAdicionado("Custo")
            textoAdicionado("Coloque quanto custa para fazer o produto que está vendendo!")
            icone_info[indice_icone].appendChild(div_informacao)
            break;
        case 4: 
            tituloAdicionado("Vender por")
            textoAdicionado("Coloque o preço que está vendendo o produto!")
            icone_info[indice_icone].appendChild(div_informacao)
            break;
        case 5: 
            tituloAdicionado("Vender quantas vezes na semana")
            textoAdicionado("Coloque quantas vezes na semana você vende esse produto!")
            icone_info[indice_icone].appendChild(div_informacao)
            break;
        case 6:
            tituloAdicionado("Quantidade vendida por dia")
            textoAdicionado("Coloque quantos produtos você vende por dia!")
            icone_info[indice_icone].appendChild(div_informacao)
            break;
        case 7: 
            tituloAdicionado("Lucro por ano")
            textoAdicionado("Coloque quantos porcento (%) você lucra por ano!")
            icone_info[indice_icone].appendChild(div_informacao)
        default: 
        break;
    }
}

function removerInformacao() {
    icone_info[indice_icone].removeChild(div_informacao)
}
//botao lucro
window.document.querySelector('input[value="Calcular"]').addEventListener('click', calcular)

function calcular() {
    //pegando dados de input
        //input custo
        let custo = Number(window.document.querySelector('input#custo-id').value)
        //input vender por
        let preco = Number(window.document.querySelector('input#preco-id').value)
        //input vender quantas vezes na semana
        let vendasPorSemana = Number(window.document.querySelector('input#vendas-por-semana-id').value)
        //input quantidade vendida por dia
        let quantidadeVendasPorDia = Number(window.document.querySelector('input#quantidade-vendas-por-dia-id').value)
        //input lucro por ano
        let lucroAno = Number(window.document.querySelector('input#lucro-ano-id').value)
    //validando dados de input
    //calculando
    
        let p = window.document.querySelectorAll('p')
        p[6].innerHTML = `a ${lucroAno}`
}*/