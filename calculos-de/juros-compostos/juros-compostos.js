window.document.querySelector('input[value="Calcular"]').addEventListener('click', processarDados)
const p = window.document.querySelector('p')

function processarDados() {
    let valor_investido = Number(window.document.querySelector('input#valor-investido-id').value)

    let juros = Number(window.document.querySelector('input#juros-id').value)

    let tempo_investido = Number(window.document.querySelector('input#tempo-investido-id').value)

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
        /*
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
        addResposta()*/
    }
}