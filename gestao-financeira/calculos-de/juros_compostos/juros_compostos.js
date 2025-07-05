window.document.querySelector('input[value="Calcular"]').addEventListener('click', comecar)
const para = window.document.querySelector('p')
function comecar() {
    let investimento_mensal = Number(window.document.querySelector('#investimento-id').value)
    let juros_anual = Number(window.document.querySelector('#juros-id').value)
    let tempo_investido = Number(window.document.querySelector('#tempo-investido-id').value)
    let inputs_verdadeiros = false
    function validandoInputs() {
        function inputInvestimento() {
            if(investimento_mensal) {
                if(investimento_mensal > 0) {
                    inputJuros()
                } else {
                    addErro('Números negativos não são aceitos!')
                    inputs_verdadeiros = false
                }
            } else {
                addErro('Coloque o valor investido mensalmente!')
                inputs_verdadeiros = false
            }
        }
        inputInvestimento()
        function inputJuros() {
            if(juros_anual) {
                if(juros_anual > 0) {
                    inputTempoInvestido()
                } else {
                    addErro('Números negativos não são aceitos!')
                    inputs_verdadeiros = false
                }
            } else {
                addErro('Coloque a porcentagem de juros que o investimento rende!')
                inputs_verdadeiros = false
            }
        }
        function inputTempoInvestido() {
            if(tempo_investido) {
                if(tempo_investido > 0) {
                    inputs_verdadeiros = true
                } else {
                    addErro('Números negativos não são aceitos!')
                    inputs_verdadeiros = false
                }
            } else {
                addErro('Adicione quantos meses está investindo!')
                inputs_verdadeiros = false
            }
        }
    }
    validandoInputs()
    function calcular() {
        let investimento_total = 0
        for(let t = 0; t < tempo_investido; t++) {
            investimento_total += investimento_mensal
        }
        let juros_mensal = (juros_anual / 12)
        let investimento_mais_juros = 0
        for(let t = 0; t < tempo_investido; t++) { 
            investimento_mais_juros += (investimento_mensal + ( juros_mensal * (investimento_mais_juros / 100)))
        }
        addBlocoDeResposta()
        addH2('Investimento mensal')
        addP(converterPraMoeda(investimento_mensal))
        addH2('Investimento total sem juros')
        addP(converterPraMoeda(investimento_total))
        addH2('Investimento total com Juros')
        addP(converterPraMoeda(investimento_mais_juros))
    }
    if(inputs_verdadeiros) {
        calcular()
    }
}
/*

    
    function calcular() {
    
        let investimento_total
        function investimentoTotal() {
            for(let t = 0; t < tempo_investido; t++) {
                investimento_total += investimento_mensal
            }
        }
        investimentoTotal()
    }
    if(validandoInputs()) {
        calcular()
        
    }
    
    addBlocoDeResposta()
    function addRespostas() {
        addH1('Juros Compostos')
        addH2('Investimento inicial')
        addP(converterPraMoeda(100))
        addDiv(
            addH2('Porcentagem', 1),
            addP(`${75}%`, 1)
        )
        addDiv(
            addH2('Porcentagem', 1),
            addP(`${75}%`, 1)
        )
        addQuebraLinha()
        addDiv(
            addH2('Porcentagem', 1),
            addP(`${75}%`, 1)
        )
        addDiv(
            addH2('Porcentagem', 1),
            addP(`${75}%`, 1)
        )
    }
    addRespostas()
    addBotaoVoltar()
}*/