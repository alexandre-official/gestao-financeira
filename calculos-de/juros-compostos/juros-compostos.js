window.document.querySelector('input[value="Calcular"]').addEventListener('click', processarDados)
const p = window.document.querySelector('p')

let valor_investido
let juros_input
let juros_option
let juros
let tempo_investido_input
let tempo_investido_option
let tempo_investido
let patrimonio
function processarDados() {
    valor_investido = Number(window.document.querySelector('input#valor-investido-id').value)

    juros = Number(window.document.querySelector('input#juros-id').value)

    tempo_investido_input = Number(window.document.querySelector('input#tempo-investido-id').value)

    function verificarInputs() {
        if(verificarNum(valor_investido, 'Coloque o valor investido!')) {
            if(verificarNum(juros, 'Coloque a porcentagem de juros!')) {
                if(verificarNum(tempo_investido_input, 'Coloque o tempo investido!')) {
                    calcular()
                }
            }
        }
    }
    verificarInputs()
    function calcular() {
        juros_option = window.document.querySelector('select#juros-option-id').value

        tempo_investido_option = window.document.querySelector('select#tempo-investido-option-id').value

        if(juros_option === 'ano') {
            juros_input = (juros / 365).toFixed(6)
        } else if(juros_option === 'mes') {
            juros_input = (juros / 30).toFixed(6)
        }
        if(tempo_investido_option === 'ano') {
            tempo_investido = tempo_investido_input * 365
        } else if(tempo_investido_option === 'mes') {
            tempo_investido = tempo_investido_input * 30
        } else {
            tempo_investido = tempo_investido_input
        }
        patrimonio = valor_investido
        for(let c = 0; c < tempo_investido; c++) {
            patrimonio = patrimonio + (juros * (patrimonio / 100))
        }
        saida()
    }
}

function saida() {
    addBlocoDeResposta()
    addH1('Valor investido')
    addP(virarMoeda(valor_investido))
    //DMA dia mes ano
    let juros_DMA = juros_option
    if(juros_DMA === 'mes') {
        juros_DMA = 'mês'
    }
    addDiv(
        addH1(`Juros por ${juros_DMA}`, 'divCall'), 
        addP(juros, 'divCall')
    )
    //DMA dia mes ano
    let tempo_DMA = tempo_investido_option
    if(tempo_DMA == 'mes') {
        if(tempo_investido_input > 1) {
            tempo_DMA = 'meses'
        } else {
            tempo_DMA = 'mês'
        }
    } else {
        if(tempo_investido_input > 1) {
            tempo_DMA = `${tempo_DMA}s`
        }
    }
    let msg_personalizada
    if(tempo_investido_option === 'dia') {
        msg_personalizada = ''
    } else {
        msg_personalizada = `ou ${tempo_investido_input} ${tempo_DMA}`
    }
    addDiv(
        addH1('Tempo investido', 'divCall'), 
        addP(`${tempo_investido} dias ${msg_personalizada}`, 'divCall')
    )
    addDiv(
        addP(patrimonio, 'divCall')
    )
}
/*

    if(verificarInputNum(valor_investido, 'Adicione o valor investido!')) {
        if(verificarInputNum(juros, 'Coloque a porcentagem de juros!')) {
            if(verificarInputNum(tempo_investido, 'Adicione o tempo investido!')) {
                calcular()
            }
        }
    }
    function calcular() {
        p.innerHTML = `R$${valor_investido}, ${juros}%, ${tempo_investido}`
        
        
        
        let juros_option = (window.document.querySelector('select#juros-option-id').value)
        let tempo_investido_option = (window.document.querySelector('select#tempo-investido-option-id').value)
        p.innerHTML += `<br>${juros_option} ${tempo_investido_option}`

        if(tempo_investido_option === 'ano') {
            tempo_investido = tempo_investido * 365
        } else if(tempo_investido_option === 'mes') {
            tempo_investido = tempo_investido * 30
        }
        p.innerHTML += `<br>tempo investido: ${tempo_investido}`
        if(juros_option === 'ano') {
            juros = (juros / 365).toFixed(5)
        } else if(juros_option === 'mes') {
            juros = (juros / 30).toFixed(5)
        }
        p.innerHTML += `<br>juros: ${juros}`
        p.innerHTML += `<br>juros: ${(juros*365).toFixed(2)}`
        
        addBlocoDeResposta()
        function addResposta() {
            addH1('Texto alternativo Aleatorio')
            addH2('Texto alternativo Aleatorio')
            addP('Texto alternativo Aleatorio')
            addDiv(
                addH2('Texto alternativo', 'divCall'),
                addH2('Texto Aleatorio', 'divCall'),
                addP('Texto Aleatorio', 'divCall')
            )
            addDiv(
                addH2('Texto Aleatorio', 'divCall'),
                addH2('Texto Aleatorio', 'divCall'),
                addP('Texto Aleatorio', 'divCall')
            )
            addP('Paragrafo teste')
            addDiv(
                addH2('Porcentagem', 'divCall'),
                addP('50%', 'divCall')
            )
            addDiv(
                addH2('Porcentagem', 'divCall'),
                addP('50%', 'divCall')
            )
        }
        addResposta()
    }
}
*/