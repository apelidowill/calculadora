// Funções para realizar operações matemáticas
function adicao(x, y) {
    return x + y;
}

function subtracao(x, y) {
    return x - y;
}

function multiplicacao(x, y) {
    return x * y;
}

function divisao(x, y) {
    if (y !== 0) {
        return x / y;
    } else {
        return "Erro: divisão por zero.";
    }
}

// Função para realizar cálculos com base na operação escolhida
function calcular() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operacao = document.getElementById("operacao").value;
    var resultado;

    switch (operacao) {
        case "+":
            resultado = adicao(num1, num2);
            break;
        case "-":
            resultado = subtracao(num1, num2);
            break;
        case "*":
            resultado = multiplicacao(num1, num2);
            break;
        case "/":
            resultado = divisao(num1, num2);
            break;
        default:
            resultado = "Operação inválida.";
            break;
    }

    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}