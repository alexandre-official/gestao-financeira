window.document.querySelector('input[value="Calcular"]').addEventListener('click', processarDados)
const p = window.document.querySelector('p')

function processarDados() {
    const valor_investido = window.document.querySelector('input#valor-investido-id')

    const juros = window.document.querySelector('input#juros-id')

    if(verificarInputNum(valor_investido, 'Adicione o valor investido!')) {
        if(verificarInputNum(juros, 'Coloque a porcentagem de juros!')) {
            calcular()
        }
    }
    function calcular() {
    }
    const juros_AMD = window.document.querySelector('#juros-AMD-id')
}