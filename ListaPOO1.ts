/* Crie uma classe que possua a tabela ASCII no qual ele tenha um...
metodo que filtre 26 letras do alfabeto e conte os respectivas letras

Exemplo [A, B, C]


Número Informado: 2

Retorno [A, B];
*/

/*A tabela ASCII (American Standard Code for Information Interchange) especifica os caracteres 
(coluna c da tabela) associados aos números 0 a 127 (números Unicode U+0000 a U+007F). 
O conjunto de todos os caracteres da tabela constitui o alfabeto ASCII.*/

  
/*
Escreva um programa que carregue dois valores A e B pelo teclado e imprima todos os números
ímpares entre A e B.
*/
  export class NumerosInfSup {
    private inferior: number;
    private superior: number;
  
    public constructor(inferior: number, superior: number){
      this.inferior = inferior;
      this.superior = superior;
    }
    public getInferior(): number{
      return this.inferior;
    }
    public getSuperior(): number{
      return this.superior;
    }
    public setInferior(inferior: number): void{
      this.inferior = inferior;
      this.validaIntervalo();
    }
    public setSuperior(superior: number): void{
      this.superior = superior;
      this.validaIntervalo();
    }
  
    private validaIntervalo(): void{
      if (this.inferior > this.superior){
        let aux: number = this.inferior;
        this.inferior = this.superior;
        this.superior = aux
        }
      }

      public contagemImpares(): void{
        let i: number = this.inferior;  
        
    
        if (i % 2 == 0)
          i++;
            
        while(i <= this.superior){
          console.log(i);
           i+= 2;
        }
      }
    }

 /* 
Escreva um programa que leia o nome e salário atual de um funcionário. O programa deve calcular
seu novo salário (segundo a tabela abaixo) e mostrar o nome, o salário atual e o salário reajustado do
funcionário:

https://www.ic.unicamp.br/~santanch/classic/teaching/oop/2019-1/exercicios/poo-exercicios-01-estruturas-v01.pdf
*/

export class AumentaSalario {
  private salario: number;
  private funcionario: string;

  public constructor (salario: number, funcionario: string) {
    this.salario = salario;
    this.funcionario = funcionario;
  }

  public getFuncionario (): string {
    return this.funcionario
  }
  public setFuncionario (funcionario: string): void {
    this.funcionario = funcionario;
  }
  public getSalario(): number {
    return this.salario
  }
  public setSalario (salario: number): void {
    this.salario = salario;
  }
  
  public calculaAcrescimo (): number {
      if (this.salario <= 1500)
        return this.salario * 0.25;
  
      if (this.salario <= 3000)
        return this.salario * 0.20;

      if (this.salario <= 6000)
        return this.salario * 0.15;

    return this.salario * 0.10;
}

public salarioReajustado(): string {
  const acrescimo = this.calculaAcrescimo();
  const novoSalario = this.salario + acrescimo;

  return `Olá, ${this.funcionario}. Seu salário aumentou de R$${this.salario.toFixed(2)} para R$${novoSalario.toFixed(2)}, um acréscimo de R$${acrescimo.toFixed(2)}.`;
}
}

/*
Escreva um programa que leia um número inteiro e mostre a sua conversão em binário
*/

export class ConverorComputacional {
  private n: number;

  public constructor (n: number){
    this.n = n;
  }

  public getN (): number{
    return this.n;
  }

  public setN (n: number): void{
    this.n = n;
  }

  public convertBinario(): number[] {

    let binario: number [] = [];
    let number = this.n;

    if ( number === 0) {
      return [0];
    }

    while (number > 0) {
      binario.push(number % 2);
      number = Math.floor(number / 2); //Posso utilizar também Math.trun(number / 2);
    }

    binario.reverse();

    return binario;
  }

  public convertDecimal(): number {
    let decimal = 0;
    const binarioArray = this.convertBinario();

    for (let i = 0; i < binarioArray.length; i++) {

        const digito = binarioArray[binarioArray.length - 1 - i];
        
        decimal += digito * Math.pow(2, i);
    }

    return decimal;
}

  convertHexadecimal() {}

}