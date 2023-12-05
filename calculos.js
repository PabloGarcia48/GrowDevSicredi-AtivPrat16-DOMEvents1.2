/* Desenvolva aqui a rotina */
document.addEventListener("input", (e) => {
    calcularReceitas()
    calcularDescontos()
    calcularTotal()
})

// function calcular() {
//     calcularReceitas()
//     calcularDescontos()
//     calcularTotal()
// }


function calcularReceitas() {
    const valorBase = Number(document.querySelector('#valor_base').value)
    const ajudaTransporte = Number(document.querySelector('#valor_transporte').value)
    const ajudaAlimentacao = Number(document.querySelector('#valor_alimentacao').value)
    
    
    let receitaTotal = valorBase + ajudaTransporte + ajudaAlimentacao
    console.log(receitaTotal);

    let valorReceita = document.querySelector('#valor_receita')
    valorReceita.setAttribute('value', receitaTotal)
}

function calcularDescontos() {
    const descontoAutomovel = Number(document.querySelector('#valor_automovel').value)
    const faltas = Number(document.querySelector('#faltas').value)
    
    
    let descontoTotal = descontoAutomovel + faltas
    console.log(descontoTotal);

    let valorDesconto = document.querySelector('#valor_descontos')
    valorDesconto.setAttribute('value', descontoTotal)
}

function calcularTotal() {
    const receitaTotal = Number(document.querySelector('#valor_receita').value)
    const descontoTotal = Number(document.querySelector('#valor_descontos').value)

    let valorTotal = receitaTotal - descontoTotal
    

    let valorTotalCampo = document.querySelector('#valor_total')
    valorTotalCampo.setAttribute('value', valorTotal)
     console.log(valorTotal);
}