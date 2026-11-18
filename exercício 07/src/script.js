function areaRetangulo(base, altura) {
    return base * altura;
}

let base = parseFloat(prompt("Digite a base:"));
let altura = parseFloat(prompt("Digite a altura:"));

console.log("A área do retângulo é: " + areaRetangulo(base, altura));