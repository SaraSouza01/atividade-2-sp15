function calcularDesconto(preco, percentual) {
    return preco - (preco * percentual / 100);
}

let preco = parseFloat(prompt("Digite o preço do produto:"));
let percentual = parseFloat(prompt("Digite o percentual de desconto:"));

console.log("Preço com desconto: R$ " + calcularDesconto(preco, percentual));