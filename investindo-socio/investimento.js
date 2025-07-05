window.document.querySelectorAll('input[type="button"]')[0].addEventListener('click', aplicar)
//adicionar aviso
const divAviso = window.document.createElement('div')
divAviso.id = 'aviso'
const h1 = window.document.createElement('h1')
h1.textContent = '[ERRO]'
divAviso.appendChild(h1)
const paragrafo = window.document.createElement('p')
divAviso.appendChild(paragrafo)
//adicionar botao de remover aviso
const botaoRemoveAviso = window.document.createElement('input')
botaoRemoveAviso.type = 'button'
botaoRemoveAviso.addEventListener('click', removerAviso)
botaoRemoveAviso.value = 'Entendi'
divAviso.appendChild(botaoRemoveAviso)
//criar aviso
//criarAviso
function addAviso(t) {
    paragrafo.textContent = t
    window.document.body.appendChild(divAviso)
}
//remover o aviso
function removerAviso() {
    divAviso?.remove()
}
//comecar programa
function aplicar() {
    //pegar dados
    let investimento = Number(window.document.querySelector('input#investimento-id').value)
    let aporte = Number(window.document.querySelector('input#aporte-id').value)
    let patrimonio = (investimento + aporte)
    let retorno = Number(window.document.querySelector('input#retorno-anos-id').value)
    //validacao investimento
    if(!investimento) {
        addAviso("Adicione um valor para ser investido!")
    } else {
        //saida investimento
        saidaTexto(converterPraMoeda(patrimonio), 0)
        saidaTexto(converterPraMoeda(porcentagem(patrimonio, investimento)), 1)
        saidaTexto(converterPraMoeda(porcentagem(patrimonio, aporte)), 2)
        
        //saida retorno
        if(!retorno) {
            saidaH1('Observação', 3)
            saidaH2("", 2)
            saidaTexto(`Esta área está <strong>vazia</strong> porque você não preencheu <strong>'Retorno em anos'</strong>` ,3)
            saidaTexto('', 4)
            saidaTexto('', 5)
        } else {
            let anos = "anos"
            if(retorno < 2) {
                anos = "ano"
            }
            saidaH1(`Retorno em ${retorno} ${anos}`, 3)
            //adicionando texto com informacao
            const textoComInfo = window.document.createElement('div')
            saidaTexto(`${roe(patrimonio, retorno)[0]} <strong>OU</strong>  ${roePorcentagem()[0]}% por ano`, 3)
            saidaTexto(`${roe(patrimonio, retorno)[1]} <strong>OU</strong> ${roePorcentagem()[1]}% por mês`, 4)
            saidaTexto(`${roe(patrimonio, retorno)[2]} <strong>OU</strong> ${roePorcentagem()[2]}% por dia`, 5)
        }
    }
}
function saidaTexto(t, i) { //texto, indice
    let p = window.document.querySelectorAll('p')
    return p[i].innerHTML = t
}
function saidaH1(t, i) {//titulo, indice
    let h1_ = window.document.querySelectorAll('h1')
    return h1_[i].innerHTML = t
}
function saidaH2(t, indice) {//titulo, indice
    let h2_ = window.document.querySelectorAll('h2')
    return h2_[indice].innerHTML = t
}
function porcentagem(valor01, valor02) {
    let porcentagem = valor02 / (valor01 / 100)
    return (porcentagem.toFixed(2)) + "%"
}
function converterPraMoeda(v) {
    let valor = v.toLocaleString('PT-BR', {style: "currency", currency: 'BRL'})
    return valor
}
function roe(p, a) { //patrimonio , anos
    let porAno = p / a
    let porMes = porAno / 12
    let porDia = porMes / 30
    return [converterPraMoeda(porAno), converterPraMoeda(porMes), converterPraMoeda(porDia)]
}
function roePorcentagem() {
    let anos = Number(window.document.querySelector('input#retorno-anos-id').value)
    let porAno = 100 / anos
    let porMes = porAno / 12
    let porDia = porMes / 30
    return [porAno.toFixed(2), porMes.toFixed(2), porDia.toFixed(2)]
}


//criando evento no icone de informacao
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
            tituloAdicionado("Preço")
            textoAdicionado("Coloque o preço que o produto está sendo vendido!")
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
    //validando dados de input--------------
    if(!custo) {
        //validando input custo
        addAviso('Informe o custo do seu produto!')
    } else if(preco == 0 || preco == null || preco == undefined || preco == '') {
        //validando input preco
        addAviso('Informe o preço do seu produto!')
    } else if(!vendasPorSemana) {
        //validando input quantidade de vezes por semana que o negocio funciona
        addAviso("Informe quantas vezes na semana você vende!")
    } else if(!quantidadeVendasPorDia) {
        //validando input de vendas por dia
        addAviso("Informe a quantidade vendida por dia!")
    } else if(!lucroAno) {
        //validando input de lucro
        addAviso("Informe o lucro anual!")
    } else {
        let p = window.document.querySelectorAll('p')
        //calculando
        let lucroPorProduto = preco - custo
        let porcentagemLucro = lucroPorProduto / (custo / 100)
        p[6].innerHTML = `${lucroPorProduto}`
        p[6].innerHTML += `<br>${porcentagem(custo, lucroPorProduto)}`
    }
}