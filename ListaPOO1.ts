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
Exercicios:

https://www.ic.unicamp.br/~santanch/classic/teaching/oop/2019-1/exercicios.html

Lista 1:

https://www.ic.unicamp.br/~santanch/classic/teaching/oop/2019-1/exercicios/poo-exercicios-02-classes-v01.pdf
*/
  
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
  convertOctal() {
    const binarioArray = this.convertBinario();
    let octal = '';

    while (binarioArray.length % 3 !== 0) {
      binarioArray.unshift(0);
    }

    for (let i = 0; i < binarioArray.length; i += 3){
      const grupo = binarioArray.slice(i, i + 3);
      const grupoDecimal = grupo.reduce((acc, bit, index) => acc + bit * Math.pow(2, 2 - index), 0);
      octal += grupoDecimal.toString();
    }
    return octal;
  }	
  convertHexadecimal() {
    const binarioArray = this.convertBinario();
    let hexadecimal = '';

    while (binarioArray.length % 4 !== 0) {
      binarioArray.unshift(0);
    }

    for (let i = 0; i < binarioArray.length; i += 4){
      const grupo = binarioArray.slice(i, i + 4);
      const grupoDecimal = grupo.reduce((acc, bit, index) => acc + bit * Math.pow(2, 3 - index), 0);
      hexadecimal += grupoDecimal.toString(16).toUpperCase();
    }
    return hexadecimal;
  }

}

/* 
Os números de Fibonacci formam uma sequência em que cada número é igual à soma dos dois
anteriores. Os dois primeiros números são, por definição igual a 1, segundo o exemplo abaixo:
Ex: 1 1 2 3 5 8 13 ...
Escreva um programa que carregue um carregue um número inteiro pelo teclado e indique se ele faz
parte da sequência de Fibonacci.
*/

export class testFibonnaci {
  private n: number;  

  constructor(n: number) {
    this.n = n;
  }

  public getN (): number{
    return this.n;
  }

  public setN (n: number): void{
    this.n = n;
  }

  public serieFibonacci(): number[] {
    if (this.n == 0) {
      return []; // Matriz unidimensional vazia
    }
  
    if (this.n == 1) {
      return [1];
    }
  
    let termos: number[] = [1, 1]; // Dois primeiros termos
  
    for (let i = 3; i < this.n; i++) { // Corrige o loop começando em 2
      termos.push(termos[i-2] + termos[i-3]);
    }
  
    return termos; // Retorna o array final
  }
}