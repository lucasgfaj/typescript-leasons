import { matrizUni, matrizJardim, matrizCarros, MatrizAleatoria, Autodromo, CarroCorrida } from "./matrizMatematico";

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
const turma = new matrizJardim();

// "Luan", "Antonella", "José", "Lucas", "Pedro", 
// "Antonio", "João", "Eleandro", "Josué"

console.log("AdicionarAluno")
console.log(turma.adicionarAluno("Moisés"));
console.log(turma.adicionarAluno("Lucas"));
console.log(turma.adicionarAluno("Eleandro"));
console.log(turma.adicionarAluno("João"));
console.log(turma.adicionarAluno("Laira"));
console.log(turma.adicionarAluno("Lucas"));
console.log(turma.adicionarAluno("Guilherme"));
console.log(turma.adicionarAluno("Antônio"));
console.log(turma.adicionarAluno("Isabeli"));
console.log(turma.adicionarAluno("Pedro"));

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

// Criando a instância da classe matrizCarros
const matrizCar = new matrizCarros();

console.log();
console.log("Adicionar Carro");
matrizCar.adicionarCarro("Ford Ka", 20);
matrizCar.adicionarCarro("Fusca", 70);
matrizCar.adicionarCarro("Chevette", 200);
matrizCar.adicionarCarro("Opala", 190);
matrizCar.adicionarCarro("Astra", 150);
matrizCar.adicionarCarro("Gol", 100);
matrizCar.adicionarCarro("Caravan", 130);
matrizCar.adicionarCarro("HB20", 110);
matrizCar.adicionarCarro("Versa", 139);
matrizCar.adicionarCarro("Corolla", 120);
console.log();

// Exibindo a matriz de carros
console.log(matrizCar.toString());
console.log();

//MetodoMedia
console.log("Soma de Velocidades")
console.log(matrizCar.mediaAtingida());
console.log();

//SuperiorMedia
console.log("Superior Média Atingida")
console.log(matrizCar.superiorMediaAtingida());
console.log();

//Maior Velocidade
console.log("Maior Velocidade")
console.log(matrizCar.maiorVelocidadeTeste());
console.log();

// Testando o Autódromo
const autodromoTeste = new Autodromo();

autodromoTeste.adicionaCarroAutodromo(new CarroCorrida("Porsche 911", 311.5));
autodromoTeste.adicionaCarroAutodromo(new CarroCorrida("Ferrari Enzo", 350));
autodromoTeste.adicionaCarroAutodromo(new CarroCorrida("Lamborghini Aventador", 355));
autodromoTeste.adicionaCarroAutodromo(new CarroCorrida("Bugatti Veyron", 407));
autodromoTeste.adicionaCarroAutodromo(new CarroCorrida("McLaren P1", 350));
autodromoTeste.adicionaCarroAutodromo(new CarroCorrida("Koenigsegg Agera", 447));
autodromoTeste.adicionaCarroAutodromo(new CarroCorrida("Pagani Huayra", 383));
autodromoTeste.adicionaCarroAutodromo(new CarroCorrida("Ford GT", 348));
autodromoTeste.adicionaCarroAutodromo(new CarroCorrida("Chevrolet Corvette", 330));
autodromoTeste.adicionaCarroAutodromo(new CarroCorrida("Nissan GT-R", 315));

console.log("Carros no Autódromo:");
console.log(autodromoTeste.getListagem());
console.log();

console.log("Media Atingida no Autódromo:");
console.log(autodromoTeste.mediaAtingidaAutodromo());
console.log();

console.log("Carros Superior a Media Atingida no Autódromo:");
console.log(autodromoTeste.superiorMediaAutodromo());
console.log();

console.log("Carro com a mairo velocidade no Autódromo:");
console.log(autodromoTeste.maiorVelocidadeAutodromo());
console.log();

//Matriz Aleatoria
const aleatoria = new MatrizAleatoria(3, 3);

console.log("toString - Matriz Aleatoria")
console.log(aleatoria.toString());

// console.log("somaLinhaColuna")
// console.log(aleatoria.somaLinhaColuna());

// console.log("toString - somaLinhaColuna")
// console.log(aleatoria.toString());


// console.log("multiplicaPor")
// console.log(aleatoria.multiplicaPor(2));

// console.log("toString - MultiplicaPor")
// console.log(aleatoria.toString());

// Crie outra matriz aleatória de 3x3
// const outraMatriz = new MatrizAleatoria(2, 2);
// console.log("somaCom");
// console.log(aleatoria.somaCom(outraMatriz));

// console.log("Binaria")
// console.log(aleatoria.binaria());

// console.log("Diagonal Principal");
// console.log(aleatoria.diagonalPrincipal());

// console.log("Diagonal Secundaria");
// console.log(aleatoria.diagonalSecundaria());

// console.log("Triangulo Superior Principal");
// console.log(aleatoria.trianguloSuperiorPrincipal());

// console.log("Triangulo Inferior Principal");
// console.log(aleatoria.trianguloInferiorPrincipal());

// console.log("Triangulo Superior Secundario");
// console.log(aleatoria.trianguloSuperiorSecundaria());

// console.log("Triangulo Inferior Secundario");
// console.log(aleatoria.trianguloInferiorSecundaria());

// console.log("Transposta");
// console.log(aleatoria.transposta());

// console.log("TranspostaProfessor");
// console.log(aleatoria.transpostaProfessor());

// console.log("Criando a matriz O de ordem 3 x 4\n");
// let o: number[][] = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
// ];

// console.log("Criando uma matriz aleatória M de ordem 4 x 3\n");
// let umaMatriz: MatrizAleatoria = new MatrizAleatoria(4, 3);

// console.log("Multiplicando a matrix M (4x3) pela matriz O (3x4):");
// console.log(umaMatriz.multiplicaPorMatriz(o));
// console.log();

console.log("Simulado 1");
console.log(aleatoria.maiorElementoDaLinhaMenor());
console.log();





