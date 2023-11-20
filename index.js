function realizarDivisao() {
    var numerador = document.getElementById("numerador").value;
    var denominador = document.getElementById("denominador").value;

    if (denominador !== "0") {
        var resultado = numerador / denominador;
        window.alert(`Resultado da divisão: ${resultado}`);
    } else {
        window.alert("Não é possível dividir por zero.");
    }

    window.location.reload();
}