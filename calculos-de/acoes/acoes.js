const p = window.document.querySelector('p')
window.document.querySelector('input[value="Calcular"]').addEventListener('click', processar)

function processar() {
    let valor_investido = Number(window.document.querySelector('#valor-investido-id').value)
    let aporte_anual = valor_investido
    let juros = Number(window.document.querySelector('#juros-id').value)
    let tempo_investido = Number(window.document.querySelector('#tempo-investido-id').value)
    let patrimonio = 0
    let patrimonio_investido = 0
    function verificarInputs() {
        if(verificarNum(valor_investido, 'Coloque o valor investido!')) {
            if(verificarNum(juros, 'Coloque a porcentagem de juros!')) {
                if(verificarNum(tempo_investido, 'Coloque o tempo investido!')) {
                    return true
                }
            }
        }
    }
    function calcular() {
        if(verificarInputs()) {
            for(let i = 0; i < tempo_investido; i++) {
                patrimonio_investido += aporte_anual 
                patrimonio_investido = patrimonio_investido + (juros * (patrimonio_investido / 100))
            }
            for(let a = 0; tempo_investido > a; a++) {
                patrimonio += aporte_anual
            }
            addResposta()
        }
    }
    calcular()
    function addResposta() {
        addBlocoDeResposta()
        addDiv(
            addH1('Valor investido por ano', 'divCall'),
            addH2(virarMoeda(valor_investido), 'divCall')
        )
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