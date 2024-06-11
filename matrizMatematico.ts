/*
Os exercícios seguintes devem ser resolvidos no nível tanto de modelagem quanto de
implementação. Assim, cabe-lhe abstrair do enunciado elementos como classes, atributos e métodos
para desenvolver os aplicativos pedidos. 
*/

// Matriz Unidimensional
export class matrizUni {
    readonly TAM: number = 15;
    private arr: number[];

    public constructor() {
        this.arr = [];

        for (let i = 0; i < this.TAM; i++) {
            this.arr[i] = Math.ceil(Math.random() * 5);
        }
    }

    public toString(): string {
        return this.arr.toString();
    }

    // Verifica se contém números inteiros no array;
    /*public verificaInteiro(): number[] {
        let inteiroArr: number[] = [];
        for (let i = 0; i < this.arr.length; i++) {
            if(Number.isInteger(this.arr[i])){
            inteiroArr.push(this.arr[i]);
            }
          } 
        return inteiroArr;
    }*/

    public verificaInteiro(n: number): boolean {
        for (let i = 0; i < this.TAM; i++)
            if (this.arr[i] == n)
                return true;

        return false;
    }

    public verificaOcorrencia(n: number): number {
        let ocorrencias: number = 0;

        for (let i = 0; i < this.TAM; i++) {
            if (this.arr[i] == n)
                ocorrencias++;
        }
        return ocorrencias;
    }

    public somaInteiros(): number {
        let sumInteger: number = 0;

        for (let i = 0; i < this.TAM; i++) {
            sumInteger += this.arr[i];
        }
        return sumInteger;
    }

    public listEvenOrOdd(): string {
        let result: string[] = [];

        for (let i = 0; i < this.TAM; i++) {

            if (this.arr[i] % 2 === 0)
                result.push(`${this.arr[i]} é par`);
            else
                result.push(`${this.arr[i]} é impar`);
        }
        return result.join("\n");
    }
}

// Matriz Jardim de Infância
export class matrizJardim {
    readonly TAM: number = 10;
    private arrAlunos: string[];

    public constructor(...alunosIniciais: string[]) {
        this.arrAlunos = [];

        for (let i = 0; i < alunosIniciais.length; i++) {
            this.adicionarAluno(alunosIniciais[i]);
        }
    }

    // Método Privado para Adicionar os Alunos no Array
    private adicionarAlunoInicial(nome: string): void {
        if (this.arrAlunos.length < this.TAM) {
            this.arrAlunos.push(nome); // Adiciona no Array [Luan, Pedro, José]
            this.arrAlunos.sort();// Ordena o Array 
        }
    }

    // Método Adicionar Aluno 
    public adicionarAluno(nome: string): boolean {
        if (this.arrAlunos.length >= this.TAM)
            return false;

        this.arrAlunos.push(nome);
        this.arrAlunos.sort();

        return true;
    }

    //Mostra Array
    public toString(): string {
        return this.arrAlunos.toString();
    }

    //Método Chamar pelo Número e Retornar Nome;
    public numeroAluno(numero: number): string {
        if (numero < 0 || numero >= this.TAM) {
            return "Este número não existe";
        }
        return this.arrAlunos[numero - 1];
    }

    //Método Encontrar Aluno pelo Nome e Retornar número da Chamada
    public nomeAluno(nome: string): number {
        for (let i = 0; i < this.arrAlunos.length; i++)
            if (this.arrAlunos[i].toLowerCase() === nome.toLowerCase())
                return (i + 1)

        return -1;
    }

    //Método Chamar todos os Alunos e mostrar seus números
    public listAlunos(): string {
        let list: string[] = [];

        for (let i = 0; i < this.TAM; i++) {
            list.push(`Número: ${i + 1} Nome: ${this.arrAlunos[i]}`);
        }
        return list.join("\n");
    }
}

// Definindo a classe matrizCarros
export class matrizCarros {
    readonly TAM: number = 10;
    private arrCarros: { modeloCarro: string; veloMax: number }[];

    public constructor() {
        this.arrCarros = [];
    }

    // Método para adicionar um carro à matriz
    public adicionarCarro(modeloCarro: string, veloMax: number): boolean {
        if (this.arrCarros.length < this.TAM) {
            this.arrCarros.push({ modeloCarro, veloMax });
            return true;
        } else {
            return false;
        }
    }

    // Método toString para retornar uma representação string da matriz
    public toString(): string {
        return this.arrCarros.map(carro => `Modelo: ${carro.modeloCarro}, Velocidade Max: ${carro.veloMax}`).join('\n');
    }

    public mediaAtingida(): number {
        let mediaAtigingida: number = 0;

        for (let i = 0; i < this.TAM; i++) {
            mediaAtigingida += this.arrCarros[i].veloMax;
        }
        return mediaAtigingida / this.TAM;
    }

    public superiorMediaAtingida(): string[] {
        let carrosMaiorQueMedia: string[] = []

        for (let i = 0; i < this.TAM; i++)
            if (this.arrCarros[i].veloMax > this.mediaAtingida())
                carrosMaiorQueMedia.push(this.arrCarros[i].modeloCarro);

        return carrosMaiorQueMedia;
    }

    public maiorVelocidadeTeste(): string {

        let maiorVelocidade = 0;
        let modeloCarro = '';

        for (let i = 0; i < this.TAM; i++) {
            if (this.arrCarros[i].veloMax > maiorVelocidade)
                maiorVelocidade = this.arrCarros[i].veloMax
            modeloCarro = this.arrCarros[i].modeloCarro;
        }
        return modeloCarro;
    }
}



// Carros Superesportivos 
export class CarroCorrida {
    private modeloCarro: string;
    private maxVelocidade: number;

    public constructor(modeloCarro: string, maxVelocidade: number) {
        this.modeloCarro = modeloCarro;
        this.maxVelocidade = maxVelocidade;
    }

    public setModelo(modeloCarro: string): void {
        this.modeloCarro = modeloCarro;
    }

    public setVelocidade(maxVelocidade: number): void {
        this.maxVelocidade = maxVelocidade;
    }

    public getModelo(): string {
        return this.modeloCarro;
    }

    public getVelocidade(): number {
        return this.maxVelocidade;
    }

    public toString(): string {
        return `${this.modeloCarro} (${this.maxVelocidade} km/h)`;
    }
}

// Autódromo
export class Autodromo {
    readonly TAM: number = 10;
    private carros: CarroCorrida[] = [];

    constructor(carros: CarroCorrida[] = []) {
        this.carros = carros;
    }

    public adicionaCarroAutodromo(carro: CarroCorrida): void {
        if (this.carros.length < this.TAM) {
            this.carros.push(carro);
        } else {
            console.log("O autódromo está cheio.");
        }
    }

    public getListagem(): string {
        let list: string[] = [];

        for (let i = 0; i < this.TAM; i++) {
            list.push(`${i + 1}. ${this.carros[i]}`);
        }
        return list.join("\n");
    }

    public mediaAtingidaAutodromo(): number {
        let sum: number = 0;

        for (let i = 0; i < this.carros.length; i++) {
            sum = sum + this.carros[i].getVelocidade();
        }
        return sum / this.carros.length;


    }

    public superiorMediaAutodromo(): string[] {
        let arrSuperiorCarro: string[] = [];
        for (let i = 0; i < this.carros.length; i++) {
            if (this.carros[i].getVelocidade() > this.mediaAtingidaAutodromo())
                arrSuperiorCarro.push(this.carros[i].getModelo())
        }
        return arrSuperiorCarro;
    }

    public maiorVelocidadeAutodromo(): CarroCorrida | number {
        if (this.carros.length === 0)
            return 0;

        let carroMaisVeloz: CarroCorrida = this.carros[0];
        for (let i = 1; i < this.carros.length; i++) {
            if (this.carros[i].getVelocidade() > carroMaisVeloz.getVelocidade()) {
                carroMaisVeloz = this.carros[i];
            }
        }
        return carroMaisVeloz;
    }
}

// export class MatrizAleatoria {
//     matriz: number[][]; // Declaração do atributo matriz, que é uma matriz de números inteiros

//     constructor(l: number, c: number) { // Definição do construtor, que recebe o número de linhas (l) e colunas (c)
//         this.matriz = this.criarMatrizAleatoria(l, c); // Inicialização da matriz chamando o método criarMatrizAleatoria
//     }

//     private criarMatrizAleatoria(l: number, c: number): number[][] { // Definição do método privado criarMatrizAleatoria
//         const matriz: number[][] = []; // Declaração de uma matriz vazia
//         for (let i = 0; i < l; i++) { // Loop para percorrer as linhas da matriz
//             matriz[i] = []; // Inicializa cada linha como um array vazio
//             for (let j = 0; j < c; j++) { // Loop para percorrer as colunas da matriz
//                 matriz[i][j] = Math.floor(Math.random() * 100); // Gera um número aleatório entre 0 e 99 e atribui à posição (i, j) da matriz
//             }
//         }
//         return matriz; // Retorna a matriz preenchida com números aleatórios
//     }

//     listMatriz(): string { // Definição do método toString que retorna uma string representando a matriz
//         let result = ""; // Inicializa uma string vazia para armazenar a representação da matriz
//         for (let i = 0; i < this.matriz.length; i++) { // Loop para percorrer as linhas da matriz
//             for (let j = 0; j < this.matriz[i].length; j++) { // Loop para percorrer as colunas da matriz
//                 result += this.matriz[i][j] + "\t"; // Adiciona o elemento da posição (i, j) seguido de uma tabulação ("\t") à string result
//             }
//             result += "\n"; // Adiciona uma quebra de linha ("\n") ao final de cada linha da matriz
//         }
//         return result; // Retorna a string representando a matriz
//     }
// }

export class MatrizAleatoria {
    public readonly L: number;
    public readonly C: number;
    private m: number[][];

    public constructor(l: number, c: number) {
        this.L = l;
        this.C = c;
        this.m = [];

        for (let i = 0; i < this.L; i++) {
            this.m[i] = [];

            for (let j = 0; j < this.C; j++) {
                this.m[i][j] = Math.ceil(Math.random() * 100);
            }
        }
    }

    public toString(): string {
        let aux: string = "";

        for (let i = 0; i < this.L; i++) {
            for (let j = 0; j < this.C; j++)
                aux += this.m[i][j] + "\t";
            //tabulação

            aux += "\n"
        }
        return aux;
    }

    public somaLinhaColuna(): void {
        for (let i = 0; i < this.L; i++) {
            for (let j = 0; j < this.C; j++)
                this.m[i][j] = i + j;
        }
    }

    public multiplicaPor(n: number): void {
        for (let i = 0; i < this.L; i++) {
            for (let j = 0; j < this.C; j++)
                this.m[i][j] = this.m[i][j] * n;
        }
    }

    public somaCom(n: number): number[][] {
        let resultado: number[][] = []

        for (let i = 0; i < this.L; i++) {
            resultado[i] = [];

            for (let j = 0; j < this.C; j++) {
                resultado[i][j] = this.m[i][j] + n;
            }
        }

        return resultado;
    }

    public binaria(): number[][] {
        let resultado: number[][] = [];
        for (let i = 0; i < this.L; i++) {
            resultado[i] = [];
            for (let j = 0; j < this.C; j++) {
                resultado[i][j] = this.m[i][j] % 2;
            }
        }
        return resultado;
    }

    public diagonalPrincipal(): number[] {
        let diagonalPrincipal: number[] = [];

        if (this.L !== this.C) {
            return diagonalPrincipal;
        }

        for (let i = 0; i < this.L; i++) {
            diagonalPrincipal.push(this.m[i][i]);
        }

        return diagonalPrincipal;
    }

    public diagonalSecundaria(): number[] {
        let diagonalSecundaria: number[] = [];

        // Verifica se a matriz é quadrada para garantir que tenha uma diagonal principal
        if (this.L !== this.C) {
            return diagonalSecundaria;
        }

        for (let i = 0; i < this.L; i++) {
            diagonalSecundaria.push(this.m[i][this.C - 1 - i]);
        }

        return diagonalSecundaria;
    }

    public trianguloSuperiorPrincipal(): number[] {
        let trianguloSuperiorPrincipal: number[] = []
        for (let i = 0; i < this.L; i++) {
            for (let j = i + 1; j < this.C; j++)
                trianguloSuperiorPrincipal.push(this.m[i][j])
        }
        return trianguloSuperiorPrincipal;
    }

    public trianguloInferiorPrincipal(): number[] {
        let trianguloInferiorPrincipal: number[] = []
        for (let i = 0; i < this.L; i++) {
            for (let j = 0; j < i; j++)
                trianguloInferiorPrincipal.push(this.m[i][j])
        }
        return trianguloInferiorPrincipal;
    }


    //Estudar
    public trianguloSuperiorSecundaria(): number[] {
        let trianguloSuperiorSecundaria: number[] = []
        for (let i = 0; i < this.L; i++) {
            for (let j = 0; j < this.C - 1 - i; j++)
                trianguloSuperiorSecundaria.push(this.m[i][j])
        }
        return trianguloSuperiorSecundaria;
    }

    //Estudar
    public trianguloInferiorSecundaria(): number[] {
        let trianguloInferiorSecundaria: number[] = []
        for (let i = 0; i < this.L; i++) {
            for (let j = 0; j > this.L - 1 - i; j++)
                trianguloInferiorSecundaria.push(this.m[i][j])
        }
        return trianguloInferiorSecundaria;
    }


    //Estudar e refazer
    public transposta(): number[][] {
        // Matriz para armazenar a transposta
        let transpostaMatrix: number[][] = [];

        // Verifica se a matriz não está vazia
        if (this.m.length === 0 || this.m[0].length === 0) {
            return transpostaMatrix;
        }

        // Itera sobre as colunas da matriz original
        for (let j = 0; j < this.m[0].length; j++) {
            // Cria uma nova linha na matriz transposta
            transpostaMatrix[j] = [];

            // Itera sobre as linhas da matriz original
            for (let i = 0; i < this.m.length; i++) {
                // Adiciona o elemento correspondente da matriz original na posição transposta
                transpostaMatrix[j][i] = this.m[i][j];
            }
        }

        return transpostaMatrix;
    }


    //Estudar
    public multiplicaPorEvoluido(N: number[][]): number[][] | string {
        // Verificar se as matrizes podem ser multiplicadas
        if (this.m[0].length !== N.length) {
            return "Erro: As matrizes não podem ser multiplicadas.";
        }

        // Criar uma matriz para armazenar o resultado da multiplicação
        let resultado: number[][] = [];

        // Iterar sobre as linhas de M
        for (let i = 0; i < this.m.length; i++) {
            resultado[i] = [];

            // Iterar sobre as colunas de N
            for (let j = 0; j < N[0].length; j++) {
                let sum = 0;

                // Iterar sobre os elementos das linhas de M e colunas de N
                for (let k = 0; k < this.m[i].length; k++) {
                    sum += this.m[i][k] * N[k][j];
                }

                resultado[i][j] = sum;
            }
        }

        return resultado;
    }



}
