function maiorDeDois(a, b) {
    return Math.max(a, b);
}

let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));

console.log("O maior número é: " + maiorDeDois(num1, num2));