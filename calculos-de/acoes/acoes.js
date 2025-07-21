const p = window.document.querySelector('p')
window.document.querySelector('input[value="Calcular"]').addEventListener('click', processar)

function processar() {
    let investido_inicial = Number(window.document.querySelector('#investimento-inicial-id').value)

    let select_aporte = String(window.document.querySelector('#select-aporte-id').value)
    let aporte = Number(window.document.querySelector('#aporte-id').value)

    let select_juros = String(window.document.querySelector('#select-juros-id').value)
    let juros = Number(window.document.querySelector('#juros-id').value)

    let select_tempo_investido = String(window.document.querySelector('#select-tempo-investido-id').value)
    let tempo_investido = Number(window.document.querySelector('#tempo-investido-id').value)
    
    let patrimonio = 0
    let patrimonio_investido = 0

    function verificarInputs() {
        function verificarInvestimento() {
            if(investido_inicial || aporte) {
                return true
            } else {
                addErro('Informe o valor investido!')
                return false
            }
        }
        function verificarInvestimentoInicial() {
            if(investido_inicial) {
                return verificarNum(investido_inicial)
            } else {
                return true
            }
        }
        function verificarAporte() {
            if(aporte) {
                return verificarNum(aporte)
            } else {
                return true
            }
        }
        function verificarJuros() {
            if(juros) {
                return verificarNum(juros)
            } else {
                addErro('Adicione a porcentage, de juros correspondente ao rendimento do investimento!')
            }
        }
        function verificarTempoInvestido() {
            if(tempo_investido) {
                return verificarNum(tempo_investido)
            } else {
                addErro('Adicione o tempo investido!')
                return false
            }
        }
        if(verificarInvestimento() && verificarInvestimentoInicial() && verificarAporte() && verificarJuros() && verificarTempoInvestido()) {
            return true
        } else {
            return false
        }
    }
    if(verificarInputs()) {
        addResposta()
    } 

















    
    function calcular() {
        function verificarSelects() {
            if(select_aporte === 'anual') {
                aporte = (aporte / 12)
            }
            if(select_juros === 'anual') {
                juros = (juros / 12)
            }
            if(select_tempo_investido === 'anos') {
                tempo_investido = tempo_investido * 12
            }
        }
        verificarSelects()
        function patrimonioSemInvestir() {
            patrimonio = investido_inicial
            for(let i = 0; i < tempo_investido; i++) {
                patrimonio = patrimonio + aporte
            }
        }
        patrimonioSemInvestir()
        function aplicarJurosSobreJuros() {
            patrimonio_investido = investido_inicial
            for(let i = 0; tempo_investido > i; i++) {
                patrimonio_investido = patrimonio_investido + aporte
                
                patrimonio_investido = patrimonio_investido + (juros * (patrimonio_investido / 100))
            }
        }
        aplicarJurosSobreJuros()
    }
    function addResposta() {
        addBlocoDeResposta()
        addH1('Investimento')
        if(investido_inicial) {
            addDiv(
                addH2('Investido inicial', 'divCall'),
                addP(virarMoeda(investido_inicial), 'divCall')
            )
        }
        if(aporte) {
            addDiv(
                addH2(`Aporte ${select_aporte}`, 'divCall'),
                addP(virarMoeda(aporte), 'divCall')
            )
        }
        addDiv(
            addH2(`Juros ${select_juros}`, 'divCall'),
            addP(`${juros}%`, 'divCall')
        )
        addDiv(
            addH2(`Tempo investido em ${select_tempo_investido}`, 'divCall'),
            addP(`${tempo_investido} ${select_tempo_investido}`, 'divCall')
        )
        addH1('Rendimento')
        calcular()
        addDiv(
            addH2('Patrimonio sem investir', 'divCall'),
            addP(`${virarMoeda(patrimonio)}`,'divCall')
        )
        addDiv(
            addH2('Patrimonio investido', 'divCall'),
            addP(virarMoeda(patrimonio_investido),'divCall')
        )
        addDiv(
            addH2('Diferença de', 'divCall'),
            addP(`${virarMoeda(patrimonio_investido - patrimonio)}`, 'divCall')
        )
    }
}