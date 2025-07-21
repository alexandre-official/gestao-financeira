const p = window.document.querySelector('p')
window.document.querySelector('input[value="Calcular"]').addEventListener('click', processar)

function processar() {
    let investido_inicial = Number(window.document.querySelector('#investimento-inicial-id').value)

    let select_aporte = String(window.document.querySelector('#select-aporte-id').value)
    let aporte = Number(window.document.querySelector('#aporte-id').value)

    let juros = Number(window.document.querySelector('#juros-id').value)

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
        for(let i = 0; tempo_investido > i; i++) {
            patrimonio = patrimonio + aporte
        }
        p.innerHTML = patrimonio
    }
    function addResposta() {
        addBlocoDeResposta()
        if(investido_inicial) {
            addDiv(
                addH1('Investido inicial', 'divCall'),
                addH2(virarMoeda(investido_inicial), 'divCall')
            )
        }
        if(aporte) {
            addDiv(
                addH1(`Aporte ${select_aporte}`, 'divCall'),
                addH2(virarMoeda(aporte), 'divCall')
            )
        }
        addDiv(
            addH1('Juros por ano', 'divCall'),
            addH2(`${juros}%`, 'divCall')
        )
        addDiv(
            addH1('Tempo investido', 'divCall'),
            addH2(`${tempo_investido} anos`, 'divCall')
        )
        addDiv(
            addH1('Patrimonio sem investir', 'divCall'),
            addP(`${virarMoeda(patrimonio)}`,'divCall')
        )
        addDiv(
            addH1('Patrimonio investido', 'divCall'),
            addP(virarMoeda(patrimonio_investido),'divCall')
        )
        addDiv(
            addH1('Diferença de', 'divCall'),
            addP(`${virarMoeda(patrimonio_investido - patrimonio)}`, 'divCall')
        )
        /*
        addDiv(
            addH1(,'divCall'),
            addP(,'divCall')
        )*/
    }
}