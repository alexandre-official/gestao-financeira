window.document.querySelector('input[value="Calcular"]').addEventListener('click', processarDados)
const p = window.document.querySelector('p')

function processarDados() {
    let valor_investido = Number(window.document.querySelector('input#valor-investido-id').value)

    let juros = Number(window.document.querySelector('input#juros-id').value)

    let tempo_investido = Number(window.document.querySelector('input#tempo-investido-id').value)

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
        let juros_option = window.document.querySelector('select#juros-option-id').value

        let tempo_investido_option = window.document.querySelector('select#tempo-investido-option-id').value
        
        let n = 0
        if(juros_option === 'ano') {
            n = 365
            juros = (juros / n).toFixed(6)
        } else if(juros_option === 'mes') {
            n = 30
            juros = (juros / n).toFixed(6)
        }
        p.innerHTML = `${juros}`
        p.innerHTML += `<br>${(juros * n).toFixed(3)}`
        let t = 0
        if(tempo_investido_option === 'ano') {
            t = 365
            tempo_investido = tempo_investido * t
        } else if(tempo_investido_option === 'mes') {
            t = 30
            tempo_investido = tempo_investido * t
        }
        p.innerHTML += `<br>${tempo_investido}`
        p.innerHTML += `<br>${tempo_investido / t}`

        let conta = valor_investido
        for(let c = 0; c < tempo_investido; c++) {
            conta = conta + (juros * (conta / 100))
        }
        p.innerHTML += `<br>Conta: ${conta.toFixed(3)}`
    }
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