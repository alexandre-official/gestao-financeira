//adicionando evento no botao aplicar
window.document.querySelector('input[value="Simular investimento"]').addEventListener('click', aplicar)
//REMOVER DEPOIS 
let p = window.document.querySelectorAll('p')
//
let investimento_dono = 0
let investimento_socios = 0
let patrimonio = 0
function aplicar() {
    //pegando valor investido por Dono
    investimentoDono()
    function investimentoDono() {
        function verificarInputDono() {
            //pegando dados de input "Dono investiu quanto"
            let dono_investiu = Number(window.document.querySelector('input#dono-investiu-id').value)
            //validando valor investido por dono
            if(dono_investiu && dono_investiu > 0) {
                return dono_investiu
            } else {
                addAvisoErro('Adicione um valor para ser investido!')
                return 0
            }
        }
        investimento_dono = verificarInputDono()
    }
    investimentoSocios()
    //pegando valores investidos por Socios
    function investimentoSocios() {
        //let socios_investiram = [] PARA ATUALIZAR
        let socios_investiram = 0 
        verificarSeInputsSocioExiste()
        function verificarSeInputsSocioExiste() {
            //pegando dados
            let input_socios = window.document.querySelectorAll('#section-socios input[type="number"]')[0]
            //identifica se o input com socios existe
            if(input_socios != null && input_socios != undefined) {
                //chama verificador de valores
                verificarInputsSocios()
            } else {
                socios_investiram = 0
            }
        }
        function verificarInputsSocios() {
            //pega input socios
            let input_socios = window.document.querySelectorAll('#section-socios input[type="number"]')
            //verificar se tem valor nos inputs
            let value_true = 0
            for(let i = 0; input_socios.length > i; i++) {
                if(Number(input_socios[i].value) && Number(input_socios[i].value) > 0) {
                    value_true = value_true + 1
                } else {
                    addAvisoErro(`Adicione o valor investido pelo ${i+1}º sócio ou remova sócio!`)
                }
            }
            //verifica se todos valores foram verdadeiros
            if(value_true == input_socios.length) {
                addInvestimentoDosSocios()
            } else {
                socios_investiram = 0
            }
        }
        function addInvestimentoDosSocios() {
            //pegando dados
            input_socios = window.document.querySelectorAll('#section-socios input[type="number"]')
            for(let i = 0; input_socios.length > i; i++) {
                socios_investiram += Number(input_socios[i].value)
            }
        }    
        investimento_socios = socios_investiram
    }
    patrimonio = investimento_dono + investimento_socios
    if(patrimonio > 0) {
        resposta()
    }
}
//botao FIM
//adicionando mais socios
//adicionando evento no botao socio
window.document.querySelector('input[value="Adicionar sócios"]').addEventListener('click', addSocios)
//adicionando novos socios
function addSocios() {
    //criando div socios
    const add_div = window.document.createElement('div')
    add_div.classList.add("socios")
    window.document.querySelector('#section-socios').appendChild(add_div)
    //adicionando titulo
    let add_h1 = window.document.createElement('h1')
    //adicionando coisas na div
    add_div.appendChild(add_h1)
    //addInput()
    //adicionando input
    function addInput() {
        let add_input = window.document.createElement('input')
        add_input.type = 'number'
        add_input.placeholder = "Ex: R$ 1300"
        add_div.appendChild(add_input)
    }
    addInput()
    //atualiza o nome e id dos inputs com numero de socios
    function addNameAndIdNoInput() {
        let indice_input = window.document.querySelectorAll('div.socios input')
        for(let a = 0; a < indice_input.length; a++) {
            indice_input[a].id = `aporte-socio-${a+1}-id`
            indice_input[a].name = `aporte-socio-${a+1}`
        }
    }
    addNameAndIdNoInput()
    //criando botao remover socio
    function addBotaoRemoverSocio() {
        let botao_remover_socio = window.document.createElement('input')
        botao_remover_socio.type = 'button'
        botao_remover_socio.value = "Removendo"
        botao_remover_socio.addEventListener('click', removerSocio)
        //adicionando botao na div
        add_div.appendChild(botao_remover_socio)
        //chamando atualizacao de titulo
        addTitulosSocio()
    }
    addBotaoRemoverSocio()
    //adicionar botao remover socio
    function removerSocio(p) {
        let add_div = p.target.parentNode
        add_div.remove()
        addTitulosSocio()
    }
    //atualiza o titulo com numero de socios
    function addTitulosSocio(){
        let titulos = window.document.querySelectorAll('div.socios h1')
        for(let b = 0; b < titulos.length; b++) {
            titulos[b].textContent = `${b+1}º  sócio`
        }
        
    }
}
//adicionando respostas de investimento
//verificar se section ja foi criada
let sectionCriada = false
function resposta() {
    //criar section para respostas
    if(!sectionCriada) {
        //Selecionando article com ID "investindo"
        const article = window.document.querySelector('article#investindo')
        //Adicionando section apos o article
        const section_investimento = window.document.createElement('section')
        section_investimento.id = "saida-investimento"
        section_investimento.className = "saida"
        article.insertAdjacentElement('afterend', section_investimento)
        //Adicionando elementos dentro do section
        const titulo01 = window.document.createElement('h1')
        titulo01.textContent = "Investimento total"
        section_investimento.appendChild(titulo01)
        //adicionando paragrafo de resposta de investimento total
        const p_01 = window.document.createElement('p')
        p_01.id = "res-investimento-total"
        section_investimento.appendChild(p_01)
        //adicionando titulo
        const titulo02 = window.document.createElement('h1')
        titulo02.textContent = "Investimento"
        section_investimento.appendChild(titulo02)
        //Adicionando div
        const div_01 = window.document.createElement('div')
        section_investimento.appendChild(div_01)
        //Adicionando subtitulo "Dono"
        const subtitulo_01 = window.document.createElement('h2')
        subtitulo_01.textContent = "Dono"
        div_01.appendChild(subtitulo_01)
        //Adicionando paragrafo de resposta de investimento de "Dono"
        const p_02 = window.document.createElement('p')
        p_02.id = "res-investimento-dono"
        div_01.appendChild(p_02)
        //Adicionando div
        const div_02 = window.document.createElement('div')
        section_investimento.appendChild(div_02)
        //Adicionando subtitulo "Socios"
        const subtitulo_02 = window.document.createElement('h2')
        subtitulo_02.textContent = "Sócios"
        div_02.appendChild(subtitulo_02)
        //Adicionando paragrafo de resposta de investimento de "Socios"
        const p_03 = window.document.createElement('p')
        p_03.id = "res-investimento-socios"
        div_02.appendChild(p_03)
        //add titulo "Porcentagem"
        const titulo03 = window.document.createElement('h1')
        titulo03.textContent = "Porcentagem"
        section_investimento.appendChild(titulo03)
        //add divs
        const div_03 = window.document.createElement('div')
        section_investimento.appendChild(div_03)
        const div_04 = window.document.createElement('div')
        section_investimento.appendChild(div_04) 
        //add subtitulo Dono
        const subtitulo_03 = window.document.createElement('h2')
        subtitulo_03.textContent = "Dono"
        div_03.appendChild(subtitulo_03)
        //add subtitulo Socios
        const subtitulo_04 = window.document.createElement('h2')
        subtitulo_04.textContent = "Sócios"
        div_04.appendChild(subtitulo_04)
        //add paragrafos de resposta de porcentagem dono
        const p_04 = window.document.createElement('p')
        p_04.id = "res-porcentagem-dono"
        div_03.appendChild(p_04)
        //add paragrafos de resposta de porcentagem dono
        const p_05 = window.document.createElement('p')
        p_05.id = "res-porcentagem-socios"
        div_04.appendChild(p_05)
        //adicionando 1 em variavel de uso de funcao
        sectionCriada = true
    }
    //pegando elementos do section e colocando em variaveis
    addRespostasEmSection()
    function addRespostasEmSection() {
        //add investimento total
        window.document.querySelector('#res-investimento-total').innerHTML = converterPraMoeda(patrimonio)
        //add investimento do Dono
        window.document.querySelector('#res-investimento-dono').innerHTML = converterPraMoeda(investimento_dono)
        //add investimento dos Socios
        window.document.querySelector('#res-investimento-socios').innerHTML = converterPraMoeda(investimento_socios)
        //add porcentagem dono
        window.document.querySelector('#res-porcentagem-dono').innerHTML = converterPraPorcentagem(patrimonio, investimento_dono)
        //add porcentagem socios
        window.document.querySelector('#res-porcentagem-socios').innerHTML = converterPraPorcentagem(patrimonio, investimento_socios)
    }
}
//adicionando respostas de investimento FIM
//RETORNO
window.document.querySelector('input[value="Simular retorno"]').addEventListener('click', simularRetorno)
function simularRetorno() {
    p[0].innerHTML = "aaa1"
}

let icones_minimizar = window.document.querySelectorAll('div.minimizar')
icones_minimizar.forEach(e => {
    e.addEventListener('click', minimizar)
})
function minimizar() {
    let elementoPai = this.parentElement;
    function addElementoMostrar() {
        let section = window.document.createElement('section')
        section.classList.add('entrada')
        section.textContent = 'daaaa'
        elementoPai.appendChild(section)
    }
    elementoPai.parentElement.style.display = 'none'
}






//adicionando avisos de de erro
let usouAvisoDeErro = 0
function addAvisoErro(texto) {
    //criando div de aviso
    const add_div = window.document.createElement('div')
    add_div.id = 'aviso'
    //criando topo do aviso
    const topo = window.document.createElement('p')
    topo.textContent = ". . ."
    add_div.appendChild(topo)
    //criando h1
    const add_h1 = window.document.createElement('h1')
    add_div.appendChild(add_h1)
    add_h1.innerHTML = "[ERRO]"
    //criando p
    const add_p = window.document.createElement('p')
    add_p.innerHTML = texto
    add_div.appendChild(add_p)
    //criando botao de remover aviso
    const add_input = window.document.createElement('input')
    add_input.type = 'button'
    add_input.value = 'Entendi'
    add_div.appendChild(add_input)
    add_input.addEventListener('click', removerAviso)
    //adicionando div aviso no documento
    if(usouAvisoDeErro == 0) {
        window.document.body.appendChild(add_div)
        usouAvisoDeErro = 1
    }
    function removerAviso() {
        window.document.body.removeChild(add_div)
        usouAvisoDeErro = 0
    }
}
//adicionando avisos de de erro FIM
function converterPraMoeda(valor) {
    return valor.toLocaleString('PT-BR', {style: "currency", currency: 'BRL'})
}
function converterPraPorcentagem(valor01, valor02) {
    return `${(valor02 / (valor01 / 100)).toFixed(2).replace('.', ',')}%`
}
let icones_info = window.document.querySelectorAll('div.icone-info')
icones_info.forEach(element => {
    element.addEventListener('mouseenter', toqueiEmQualIconeInfo)
    element.addEventListener('mouseout', removerInformacao)
});
function toqueiEmQualIconeInfo(a) {
    let icone_tocado = Array.from(icones_info).indexOf(a.target)
    addElementos()
    function addElementos() {
        //add div
        const div = window.document.createElement('div')
        div.id = "informacao"
        //add h1
        const titulo = window.document.createElement('h1')
        div.appendChild(titulo)
        //add paragrafo
        const p = window.document.createElement('p')
        div.appendChild(p)
        icones_info[icone_tocado].appendChild(div)
    }
    addInformacao()
    function addInformacao() {
        let titulo = window.document.querySelector('div#informacao h1')
        let p = window.document.querySelector('div#informacao p')
        switch(icone_tocado) {
            case 0:
                titulo.innerHTML = "Dono investiu quanto"
                p.innerHTML = "Coloque qual valor foi investido por quem é Dono(a) do negócio!"
                break;
            case 1:
                titulo.innerHTML = "Aportes"
                p.innerHTML = "Se tiver mais investidores no negócio clique em 'Adicionar sócio' e informe o valor aplicado!"
                break;
            case 2:
                titulo.innerHTML = "Retorno em anos"
                p.innerHTML = "Coloque a quantidade de anos que você deseja que o dinheiro investido retorne!"
                break;
            default:
                break;
        }
    }
}
function removerInformacao(a) {
    let icone_tocado = Array.from(icones_info).indexOf(a.target)
    window.document.querySelectorAll('div.icone-info')[icone_tocado].removeChild(window.document.querySelector('div#informacao'))
}