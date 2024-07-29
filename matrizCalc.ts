/* Crie uma classe que possua a tabela ASCII no qual ele tenha um...
metodo que filtre 26 letras do alfabeto e conte os respectivas letras

Exemplo [A, B, C]


Número Informado: 2

Retorno [A, B];
*/

/*A tabela ASCII (American Standard Code for Information Interchange) especifica os caracteres 
(coluna c da tabela) associados aos números 0 a 127 (números Unicode U+0000 a U+007F). 
O conjunto de todos os caracteres da tabela constitui o alfabeto ASCII.*/

export class MatrizAlfabetica {
    private asciiTable: string[] = [];
  
    constructor() {
      this.generateAsciiTable();
    }
  
    // Gera a tabela ASCII com caracteres do código 0 ao 127
    private generateAsciiTable(): void {
      for (let i = 0; i < 128; i++) {
        this.asciiTable.push(String.fromCharCode(i));
      }
    }
  
    // Filtra as letras do alfabeto (A-Z, a-z)
    private filterAlphabet(): string[] {
      return this.asciiTable.filter(char => /[A-Za-z]/.test(char));
    }
  
    // Retorna as primeiras n letras do alfabeto
    public getFirstNLetters(n: number): string[] {
      const alphabet = this.filterAlphabet();
      if (n > 26) {
        throw new Error('O número informado deve ser menor ou igual a 26.');
      }
      return alphabet.slice(0, n);
    }
  }
  