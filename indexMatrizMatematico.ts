import { matrizUni, matrizJardim, matrizCarros, MatrizAleatoria, Autodromo, CarrosCorrida } from "./matrizMatematico";

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

autodromoTeste.adicionaCarroAutodromo(new CarrosCorrida("Porsche 911", 311.5));
autodromoTeste.adicionaCarroAutodromo(new CarrosCorrida("Ferrari Enzo", 350));
autodromoTeste.adicionaCarroAutodromo(new CarrosCorrida("Lamborghini Aventador", 355));
autodromoTeste.adicionaCarroAutodromo(new CarrosCorrida("Bugatti Veyron", 407));
autodromoTeste.adicionaCarroAutodromo(new CarrosCorrida("McLaren P1", 350));
autodromoTeste.adicionaCarroAutodromo(new CarrosCorrida("Koenigsegg Agera", 447));
autodromoTeste.adicionaCarroAutodromo(new CarrosCorrida("Pagani Huayra", 383));
autodromoTeste.adicionaCarroAutodromo(new CarrosCorrida("Ford GT", 348));
autodromoTeste.adicionaCarroAutodromo(new CarrosCorrida("Chevrolet Corvette", 330));
autodromoTeste.adicionaCarroAutodromo(new CarrosCorrida("Nissan GT-R", 315));

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
const aleatoria = new MatrizAleatoria();

