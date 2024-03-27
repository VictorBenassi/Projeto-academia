document.querySelector("#tipo-plano").addEventListener("change", calcular)
document.querySelector("#personal_sim").addEventListener("change", calcular)
document.querySelector("#personal_nao").addEventListener("change", calcular)
document.querySelector("#prazo").addEventListener("input", function(){
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo").innerText = "Prazo "+ prazo
    calcular()
})

function calcular()
{
    const qtdeDePaginas = document.querySelector("#tipo-plano").value
    let valor = qtdeDePaginas * 1000
    const tipo = document.querySelector("#tipo").value
    if(tipo == 2) valor += 2000
    const prototipo = document.querySelector("#personal_sim").checked
    if(prototipo) valor *= 1.1
    document.querySelector("#valor").innerText = "R$ " + valor.toFixed(2);


    console.log(qtdeDePaginas)
    
}

