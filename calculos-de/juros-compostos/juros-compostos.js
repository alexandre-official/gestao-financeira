window.document.querySelector('input[value="Calcular"]').addEventListener('click', processarDados)
const p = window.document.querySelector('p')

let valor_investido
let juros
let tempo_investido
let juros_option
let tempo_investido_option
function processarDados() {
    valor_investido = Number(window.document.querySelector('input#valor-investido-id').value)

    juros = Number(window.document.querySelector('input#juros-id').value)

    tempo_investido = Number(window.document.querySelector('input#tempo-investido-id').value)

    function verificarInputs() {
        if(verificarNum(valor_investido, 'Coloque o valor investido!')) {
            if(verificarNum(juros, 'Coloque a porcentagem de juros!')) {
                if(verificarNum(tempo_investido, 'Coloque o tempo investido!')) {
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
            juros = (juros / 365).toFixed(6)
        } else if(juros_option === 'mes') {
            juros = (juros / 30).toFixed(6)
        }
        if(tempo_investido_option === 'ano') {
            tempo_investido = tempo_investido * 365
        } else if(tempo_investido_option === 'mes') {
            tempo_investido = tempo_investido * 30
        }
        let patrimonio = valor_investido
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
    addH1('Tempo investido')
    addP(`${tempo_investido} dias`)
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