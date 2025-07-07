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
        p.innerHTML = 'Calculando...'
    }
}