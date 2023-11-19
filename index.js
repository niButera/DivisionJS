var numerador = prompt("Escolha um numerador:");
var denominador = prompt("Agora escolha um denominador");

function realizarDivisao(numerador, denominador) {
    if (denominador !== "0") {
        var resultado = numerador / denominador;
        window.alert(`Resultado da divisão: ${resultado}`);
    } else {
        window.alert("Não é possível dividir por zero.");
    }

    // Recarrega a página ao clicar em OK
    window.location.reload();
}

realizarDivisao(numerador, denominador);

