function mediaPonderada(notas, pesos) {
    let somaNotasPonderadas = 0;
    let somaPesos = 0;
    for (let i = 0; i < notas.length; i++) {
        somaNotasPonderadas += notas[i] * pesos[i];
        somaPesos += pesos[i];
    }
    let media = somaNotasPonderadas / somaPesos;
    return media;
}

function calcularMediaEStatus(formulario) {
    const nota1 = parseFloat(formulario.nota1.value);
    const nota2 = parseFloat(formulario.nota2.value);
    const nota3 = parseFloat(formulario.nota3.value);
    const nota4 = parseFloat(formulario.nota4.value);
    
    const notas = [nota1, nota2, nota3, nota4];
    const pesos = [20, 30, 30, 20];
    const mediaPonderadaResult = mediaPonderada(notas, pesos);
    
    let situacao;
    if (mediaPonderadaResult >= 7) {
        situacao = 'Aprovado';
    } else if (mediaPonderadaResult >= 5) {
        situacao = 'Recuperação';
    } else {
        situacao = 'Reprovado';
    }
    return `A média ponderada é: ${mediaPonderadaResult.toFixed(2)}. Situação: ${situacao}.`;
}
document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    const resultado = calcularMediaEStatus(this);
    document.getElementById('resultado').textContent = resultado;
});

