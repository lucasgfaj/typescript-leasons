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

    public ordenaIterativa(): void{

        for(let i = 0; i < this.arr.length - 1; i++){
            for(let j = 0; j < this.arr.length - 1 - i; j++){
                if(this.arr[j] > this.arr[j + 1]){
                    let temp = this.arr[j];
                    this.arr[j] = this.arr[j + 1];
                    this.arr[j + 1] = temp;
                }
            }
        }
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

    public somaCom(n: number[][]): number[][] {

        if (n.length != this.L)
            return [];

        if (n[0].length != this.C)
            return [];

        let resultado: number[][] = []

        for (let i = 0; i < this.L; i++) {
            resultado[i] = [];

            for (let j = 0; j < this.C; j++) {
                resultado[i][j] = this.m[i][j] + n[i][j];
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

    public isQuadrada(): boolean {
        return (this.L == this.C);
    }

    public diagonalPrincipal(): number[] {
        let diagonalPrincipal: number[] = [];


        if (this.isQuadrada())
            for (let i = 0; i < this.L; i++) {
                diagonalPrincipal.push(this.m[i][i]);
            }

        return diagonalPrincipal;
    }

    public diagonalSecundaria() {
        let diagonalSecundaria: number[] = [];

        if (this.isQuadrada()) {
            for (let i = 0; i < this.L; i++)
                diagonalSecundaria.push(this.m[i][this.C - 1 - i])
        }
        return diagonalSecundaria
    }

    public trianguloSuperiorPrincipal(): string {
        if (!this.isQuadrada())
            return "Não é uma matriz quadrada\n"; //Se não for uma matriz quadrada return isto

        let results: string = ""; // Criando variavel parece receber a matriz

        for (let i = 0; i < this.L; i++) { // For das Linhas
            for (let j = 0; j < this.C; j++) { // For das Colunas
                if (j > i)//Se Numero da Coluna Maior de Linha
                    results += this.m[i][j]; // Resultado recebe ele mais matriz[Linha][Coluna]
                else  //Senão
                    results += ".."; // recebe ele + ... paraca um espaço em branco

                results += "\t"; //Da um espaço // Tabulação
            }

            results += "\n"; //Pula linha
        }

        return results;
    }

    public trianguloInferiorPrincipal() {
        if (!this.isQuadrada())
            return "Não é uma matriz quadrada\n"; //Se não for uma matriz quadrada return isto

        let results: string = ""; // Criando variavel parece receber a matriz

        for (let i = 0; i < this.L; i++) { // For das Linhas
            for (let j = 0; j < this.C; j++) { // For das Colunas
                if (j < i)//Se Numero da Coluna Menor de Linha
                    results += this.m[i][j]; // Resultado recebe ele mais matriz[Linha][Coluna]
                else  //Senão
                    results += ".."; // recebe ele + ... paraca um espaço em branco

                results += "\t"; //Da um espaço // Tabulação
            }

            results += "\n"; //Pula linha
        }

        return results;
    }

    public trianguloSuperiorSecundaria() {
        if (!this.isQuadrada())
            return "Não é uma matriz quadrada\n"; //Se não for uma matriz quadrada return isto

        let results: string = ""; // Criando variavel parece receber a matriz

        for (let i = 0; i < this.L; i++) { // For das Linhas
            for (let j = 0; j < this.C; j++) { // For das Colunas
                if (j < (this.L - 1 - i))//Se Numero da Coluna Menor de Linha
                    results += this.m[i][j]; // Resultado recebe ele mais matriz[Linha][Coluna]
                else  //Senão
                    results += ".."; // recebe ele + ... paraca um espaço em branco

                results += "\t"; //Da um espaço // Tabulação
            }

            results += "\n"; //Pula linha
        }

        return results;
    }

    public trianguloInferiorSecundaria() {
        if (!this.isQuadrada())
            return "Não é uma matriz quadrada\n"; //Se não for uma matriz quadrada return isto

        let results: string = ""; // Criando variavel parece receber a matriz

        for (let i = 0; i < this.L; i++) { // For das Linhas
            for (let j = 0; j < this.C; j++) { // For das Colunas
                if (j > (this.L - 1 - i))//Se Numero da Coluna Menor de Linha
                    results += this.m[i][j]; // Resultado recebe ele mais matriz[Linha][Coluna]
                else  //Senão
                    results += ".."; // recebe ele + ... paraca um espaço em branco

                results += "\t"; //Da um espaço // Tabulação
            }

            results += "\n"; //Pula linha
        }

        return results;
    }

    // Resolução Minha
    // public transposta(): string {
    //     if (!this.isQuadrada()) {
    //         return "Não é uma matriz quadrada\n"
    //     }

    //     let results: string = "";

    //     for (let j = 0; j < this.C; j++) {
    //         for (let i = 0; i < this.L; i++) {
    //             results += this.m[i][j];
    //             results += "\t"
    //         }
    //         results += "\n"
    //     }
    //     return results
    // }

    public transposta(): number[][] {

        let results: number[][] = [];


        for (let j = 0; j < this.C; j++) {
            results[j] = [];
            for (let i = 0; i < this.L; i++) {
                results[j][i] = this.m[i][j];
            }
        }
        return results;
    }
    // Resolução Professor

    // Dificuldade compatível com a avaliação
    public transpostaProfessor(): number[][] {
        let aux: number[][] = [];

        for (let i = 0; i < this.L; i++) {
            aux[i] = [];

            for (let j = 0; j < this.C; j++)
                aux[i][j] = this.m[j][i];
        }

        return aux;
    }

    public multiplicaPorMatriz(n: number[][]): number[][] {

        if (this.C != n.length!)
            return [];

        let results: number[][] = [];

        let linhas: number = this.L,
            colunas: number = n[0].length;

        for (let i = 0; i < linhas; i++) {
            results[i] = [];

            for (let j = 0; j < colunas; j++) {
                results[i][j] = 0;
                for (let k = 0; k < this.C; k++)
                    results[i][j] += this.m[i][k] * n[k][j];
            }
        }
        return results;
    }

    public maiorElementoDaLinhaMenor(): number {
        let menorElemento = this.m[0][0];
        let linhaMenorElemento = 0;

        for (let i = 1; i < this.L; i++) {
            for (let j = 0; j < this.C; j++) {
                if (this.m[i][j] < menorElemento) {
                    menorElemento = this.m[i][j];
                    linhaMenorElemento = i;
                }
            }
        }

        let maiorElemento = this.m[linhaMenorElemento][0];
        for (let j = 1; j < this.C; j++) {
            if (this.m[linhaMenorElemento][j] > maiorElemento) {
                maiorElemento = this.m[linhaMenorElemento][j];
            }
        }

        return maiorElemento;
    }
}
