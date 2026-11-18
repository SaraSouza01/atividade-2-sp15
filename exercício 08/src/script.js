function celsiusParaFahrenheit(c) {
    return c * 1.8 + 32;
}

let celsius = parseFloat(prompt("Digite a temperatura em Celsius:"));

console.log("Temperatura em Fahrenheit: " + celsiusParaFahrenheit(celsius));