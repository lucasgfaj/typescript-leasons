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

  public constructor(inferior: number, superior: number) {
    this.inferior = inferior;
    this.superior = superior;
  }
  public getInferior(): number {
    return this.inferior;
  }
  public getSuperior(): number {
    return this.superior;
  }
  public setInferior(inferior: number): void {
    this.inferior = inferior;
    this.validaIntervalo();
  }
  public setSuperior(superior: number): void {
    this.superior = superior;
    this.validaIntervalo();
  }

  private validaIntervalo(): void {
    if (this.inferior > this.superior) {
      let aux: number = this.inferior;
      this.inferior = this.superior;
      this.superior = aux;
    }
  }

  public contagemImpares(): void {
    let i: number = this.inferior;

    if (i % 2 == 0) i++;

    while (i <= this.superior) {
      console.log(i);
      i += 2;
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

  public constructor(salario: number, funcionario: string) {
    this.salario = salario;
    this.funcionario = funcionario;
  }

  public getFuncionario(): string {
    return this.funcionario;
  }
  public setFuncionario(funcionario: string): void {
    this.funcionario = funcionario;
  }
  public getSalario(): number {
    return this.salario;
  }
  public setSalario(salario: number): void {
    this.salario = salario;
  }

  public calculaAcrescimo(): number {
    if (this.salario <= 1500) return this.salario * 0.25;

    if (this.salario <= 3000) return this.salario * 0.2;

    if (this.salario <= 6000) return this.salario * 0.15;

    return this.salario * 0.1;
  }

  public salarioReajustado(): string {
    const acrescimo = this.calculaAcrescimo();
    const novoSalario = this.salario + acrescimo;

    return `Olá, ${
      this.funcionario
    }. Seu salário aumentou de R$${this.salario.toFixed(
      2
    )} para R$${novoSalario.toFixed(2)}, um acréscimo de R$${acrescimo.toFixed(
      2
    )}.`;
  }
}

/*
Escreva um programa que leia um número inteiro e mostre a sua conversão em binário
*/

export class ConverorComputacional {
  private n: number;

  public constructor(n: number) {
    this.n = n;
  }

  public getN(): number {
    return this.n;
  }

  public setN(n: number): void {
    this.n = n;
  }

  public convertBinario(): number[] {
    let binario: number[] = [];
    let number = this.n;

    if (number === 0) {
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
    let octal = "";

    while (binarioArray.length % 3 !== 0) {
      binarioArray.unshift(0);
    }

    for (let i = 0; i < binarioArray.length; i += 3) {
      const grupo = binarioArray.slice(i, i + 3);
      const grupoDecimal = grupo.reduce(
        (acc, bit, index) => acc + bit * Math.pow(2, 2 - index),
        0
      );
      octal += grupoDecimal.toString();
    }
    return octal;
  }
  convertHexadecimal() {
    const binarioArray = this.convertBinario();
    let hexadecimal = "";

    while (binarioArray.length % 4 !== 0) {
      binarioArray.unshift(0);
    }

    for (let i = 0; i < binarioArray.length; i += 4) {
      const grupo = binarioArray.slice(i, i + 4);
      const grupoDecimal = grupo.reduce(
        (acc, bit, index) => acc + bit * Math.pow(2, 3 - index),
        0
      );
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

  public getN(): number {
    return this.n;
  }

  public setN(n: number): void {
    this.n = n;
  }

  public serieFibonacci(): number[] {
    if (this.n == 0) {
      return []; // Matriz unidimensional vazia
    }

    let termos: number[] = [1, 1]; // Dois primeiros termos

    for (let i = 2; i < this.n; i++) {
      // Corrige o loop começando em 2
      termos.push(termos[i - 1] + termos[i - 2]);
    }

    return termos; // Retorna o array final
  }

  public isInFibonacciSequence(): boolean {
    if (this.n <= 0) return false;

    let a = 1,
      b = 1;
    while (b < this.n) {
      let temp = b;
      b = a + b;
      a = temp;
    }
    return b === this.n || a === this.n;
  }
}

/*
Um banco realiza empréstimos nas seguintes condições:

* são tomados “P” reais emprestados;
* “A” reais serão pagos cada mês até que o empréstimo seja quitado;
* parte do pagamento mensal serão juros, calculados como "i" por cento do saldo corrente;
* o restante será aplicado no pagamento da dívida.
Escreva um programa que leia estes três valores: P, A, i e determine:

* Para cada mês:

a) valor em dinheiro dos juros pagos;
b) valor em dinheiro aplicada no pagamento da dívida;
c) valor acumulado de juros já pagos;
d) valor ainda por pagar do empréstimo no fim de cada mês;

* No final do programa:
e) número de meses necessários para pagar o empréstimo;
f) quantidade da última prestação.
*/

export class BankLoan {
  private p: number; // Valor do empréstimo (principal)
  private a: number; // Pagamento mensal 
  private i: number; // Taxa de juros (%) ao mês
  private totalInterestPaid: number; // Total de juros pagos acumulados
  private months: number; // Número de meses necessários para pagar o empréstimo

  public constructor(p: number, a: number, i: number) {
    this.p = p;
    this.a = a;
    this.i = i / 100; // Transformar a taxa de juros em valor decimal
    this.totalInterestPaid = 0;
    this.months = 0;
  }

  // Getters
  public getP(): number {
    return this.p;
  }

  public getA(): number {
    return this.a;
  }

  public getI(): number {
    return this.i * 100; // Retorna a taxa de juros como porcentagem
  }

  public getTotalInterestPaid(): number {
    return this.totalInterestPaid;
  }

  public getMonths(): number {
    return this.months;
  }

  // Setters
  public setP(p: number): void {
    this.p = p;
  }

  public setA(a: number): void {
    this.a = a;
  }

  public setI(i: number): void {
    this.i = i / 100; // Define a taxa de juros como decimal
  }

  // Método para calcular os juros de um determinado mês
  private interestCalc(): number {
    return this.p * this.i; // Juros são calculados sobre o saldo devedor atual
  }

  // Método para calcular o valor aplicado ao pagamento da dívida (excluindo os juros)
  private amountOfDebtPayment(interest: number): number {
    return this.a - interest;
  }

  // Método principal para simular o pagamento do empréstimo mês a mês
  public simulateLoan(): void {
    let remainingLoan = this.p;

    while (remainingLoan > 0) {
      this.months++;

      // Calcular os juros do mês atual
      const interest = this.interestCalc();
      const debtPayment = this.amountOfDebtPayment(interest);

      // Atualizar saldo devedor
      remainingLoan -= debtPayment;

      // Acumular os juros pagos
      this.totalInterestPaid += interest;

      // Exibir os detalhes de cada mês
      console.log(`Mês ${this.months}:`);
      console.log(`  Juros pagos: R$ ${interest.toFixed(2)}`);
      console.log(`  Valor aplicado na dívida: R$ ${debtPayment.toFixed(2)}`);
      console.log(`  Total de juros pagos até agora: R$ ${this.totalInterestPaid.toFixed(2)}`);
      console.log(`  Saldo devedor: R$ ${remainingLoan > 0 ? remainingLoan.toFixed(2) : '0.00'}\n`);

      // Se o saldo devedor for menor que o pagamento mensal, realizar o pagamento final
      if (remainingLoan < this.a && remainingLoan > 0) {
        console.log(`Último pagamento de R$ ${remainingLoan.toFixed(2)} será efetuado no mês ${this.months + 1}.`);
        this.totalInterestPaid += this.interestCalc();
        break;
      }
    }

    // Exibir o resumo final
    console.log(`\nEmpréstimo quitado em ${this.months} meses.`);
    console.log(`Total de juros pagos: R$ ${this.totalInterestPaid.toFixed(2)}.`);
  }
}