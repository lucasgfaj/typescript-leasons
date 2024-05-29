import matrizMatematico from "./matrizMatematico"

const matriz = new matrizMatematico();
console.log("Matriz Original - toString");
console.log(matriz.toString());
console.log();

console.log("VerificaInteiro")
console.log(matriz.verificaInteiro(6));
console.log();

console.log("verificaOcorrência")
console.log(matriz.verificaOcorrencia(5));
console.log();

console.log("somaInteiro")
console.log(matriz.somaInteiros());
console.log();

