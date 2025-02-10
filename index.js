// 2️⃣ Calculadora de partidas Rankeadas

const readline = require("readline-sync");
const vitorias = parseInt(readline.question("Quantidade de vitórias: 50"));
const derrotas = parseInt(readline.question("Quantidade de derrotas: 14"));

function calcularNivel(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    saldoVitorias = 50 - 14;
    let nivel;

    if (saldoVitorias < 10) {
        nivel = "Ferro";
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return `O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}`;
}

// Output
console.log(calcularNivel(vitorias, derrotas));
