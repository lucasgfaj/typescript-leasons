/*
Os exercícios seguintes devem ser resolvidos no nível tanto de modelagem quanto de
implementação. Assim, cabe-lhe abstrair do enunciado elementos como classes, atributos e métodos
para desenvolver os aplicativos pedidos. 
*/

// Matriz Unidimensional
export class matrizUni {
    readonly TAM: number = 15;
    private arr: number [];

    public constructor(){
        this.arr = [];

        for (let i = 0; i < this.TAM; i++){
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
        for(let i = 0; i < this.TAM; i++)
            if (this.arr[i] == n)
                return true;
            
            return false;
    }

    public verificaOcorrencia(n: number): number {
        let ocorrencias: number = 0;

        for(let i = 0; i < this.TAM; i++){
         if (this.arr[i] == n)
            ocorrencias++;
        }
            return ocorrencias;
    }

    public somaInteiros(): number {
        let sumInteger: number = 0;

        for(let i = 0; i < this.TAM; i++){
            sumInteger += this.arr[i];
        }
            return sumInteger;
    }
    
    public listEvenOrOdd (): string {
        let result: string[] = [];

        for (let i = 0; i < this.TAM; i++){
    
        if (this.arr[i] %  2 === 0) 
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
    private arrAlunos: string [];

    public constructor(...alunosIniciais: string[]){
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
    public adicionarAluno (nome: string): string {
        if(this.arrAlunos.length >= this.TAM)
            return "Turma excedeu o máximo de alunos"

        this.arrAlunos.push(nome);
        this.arrAlunos.sort();

        return `Aluno ${nome} adicionado com sucesso!`;
    }
    
    //Mostra Array
    public toString(): string {
        return this.arrAlunos.toString();
    }

    //Método Chamar pelo Número e Retornar Nome;
    public numeroAluno (numero: number): string{
        if (numero < 0 || numero >= this.TAM){
            return "Este número não existe"
        }
        return this.arrAlunos[numero];
    }

    //Método Encontrar Aluno pelo Nome e Retornar número da Chamada
    public nomeAluno (nome: string): string{
        for (let i = 0; i < this.arrAlunos.length; i++)
            if (this.arrAlunos[i] === nome) 
                return `Número do Aluno ${i + 1}`

        return `Aluno não encontrado.`
    }

    //Método Chamar todos os Alunos e mostrar seus números
    public listAlunos (): string {
        let list: string[] = [];

        for (let i = 0; i < this.TAM; i++){
            list.push(`Número: ${i + 1} Nome: ${this.arrAlunos[i]}`);
        }
        return list.join("\n");
      }
}

// Matriz Carros Superesportivos
export class matrizCarros {
    readonly TAM: number = 10;
    private arrCarros: number [];

    public constructor(){
        this.arrCarros = [];

        for (let i = 0; i < this.TAM; i++){
            this.arrCarros[i] = Math.ceil(Math.random() * 5);
        }
    }

    public toString(): string {
        return this.arrCarros.toString();
    }
}