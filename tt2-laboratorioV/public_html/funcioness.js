// Calculadora simple
function calculadora() {
    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let operador = prompt("Ingrese el operador (+, -, *, /):");
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));
    let resultado;

    switch (operador) {
        case "+": resultado = num1 + num2; break;
        case "-": resultado = num1 - num2; break;
        case "*": resultado = num1 * num2; break;
        case "/": resultado = num2 !== 0 ? num1 / num2 : "Error: división por cero"; break;
        default: resultado = "Operador inválido";
    }

    alert(`La operación: ${num1} ${operador} ${num2} = ${resultado}`);
}

// Dibujo de cuadrado
function dibujarCuadrado() {
    let tamaño = parseInt(prompt("Ingrese el tamaño del cuadrado:"));
    let simbolo = prompt("Ingrese el símbolo a usar:");
    let pantalla = window.innerWidth / 10;

    if (tamaño > pantalla) {
        alert("El tamaño es demasiado grande para la pantalla.");
        return;
    }

    let resultado = "";
    for (let i = 0; i < tamaño; i++) {
        resultado += simbolo.repeat(tamaño) + "\n";
    }
    alert(resultado);
}

// Patrón de # y espacios
function patronSimple() {
    let resultado = "";
    for (let fila = 1; fila <= 5; fila++) {
        let linea = "";
        for (let col = 1; col <= 5; col++) {
            linea += (fila % 2 === 0 ? " " : "#") + " ";
        }
        resultado += linea + "\n";
    }
    alert(resultado);
}

// Patrón personalizado
function patronPersonalizado() {
    let filas = parseInt(prompt("Ingrese cantidad de filas:"));
    let columnas = parseInt(prompt("Ingrese cantidad de columnas:"));
    let simbolo = prompt("Ingrese el símbolo a utilizar:");

    let resultado = "";
    for (let i = 0; i < filas; i++) {
        let linea = "";
        for (let j = 0; j < columnas; j++) {
            linea += simbolo + " ";
        }
        resultado += linea + "\n";
    }
    alert(resultado);
}
