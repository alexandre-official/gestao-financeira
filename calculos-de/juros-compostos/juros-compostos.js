window.document.querySelector('input[value="Calcular"]').addEventListener('click', processarDados)
const p = window.document.querySelector('p')

function processarDados() {
    const valor_investido = window.document.querySelector('input#valor-investido-id')

    const juros = window.document.querySelector('input#juros-id')

    const tempo_investido = window.document.querySelector('input#tempo-investido-id')

    if(verificarInputNum(valor_investido, 'Adicione o valor investido!')) {
        if(verificarInputNum(juros, 'Coloque a porcentagem de juros!')) {
            if(verificarInputNum(tempo_investido, 'Adicione o tempo investido!')) {
                calcular()
            }
        }
    }
    function calcular() {
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