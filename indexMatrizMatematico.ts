import { matrizUni, matrizJardim, matrizCarros } from "./matrizMatematico";

//Matriz Unidimensional

const matriz = new matrizUni();
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

console.log("listEvenOrOdd")
console.log(matriz.listEvenOrOdd());
console.log();

//Matriz Jardim de Infância
const matrizJ = new matrizJardim();

//Matriz Carros Superesportivos
const matrizCar = new matrizCarros();