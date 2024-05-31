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
const turma = new matrizJardim("Luan", "Antonella", "José", "Lucas", "Pedro", 
"Antonio", "João", "Eleandro", "Josué");

console.log("AdicionarAluno")
console.log(turma.adicionarAluno("Moisés" ));
// console.log(turma.adicionarAluno("Lucas"));
//console.log(turma.adicionarAluno("Pedro"));
console.log();

console.log("toString");
console.log(turma.toString());
console.log();

console.log("numeroAluno");
console.log(turma.numeroAluno(5));
console.log();


console.log("nomeAluno");
console.log(turma.nomeAluno("Luan"));
console.log();

console.log("nomeAluno");
console.log(turma.listAlunos());
console.log();





//Matriz Carros Superesportivos
const matrizCar = new matrizCarros();