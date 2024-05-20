/*
Defina a classe InteiroMatematico. Objetos desta classe possuem, como principal atributo, um
número inteiro n, fornecido ao construtor. Esse atributo possui métodos tanto de acesso quanto de
modificação. Sempre, entretanto, se assume |n| para internalizá-lo ao objeto.
A implementação dos demais métodos é descrita na sequência. Os parâmetros e o retorno precisam
ser inferidos.
Não utilize classes externas para cumprir os exercícios. O foco deve ser o benefício didático de como
resolver.
*/

export default class InteiroMatematico {
  private n: number;

  public constructor(n: number) {
    this.n = this.modulo(n);
  }

  public getN(): number {
    return this.n;
  }

  public setN(n: number): void {
    this.n = this.modulo(n);
  }

  public modulo(n: number): number {
    if (n < 0)
      n = -n;

    return n;
  }



  public tabuada(): string {
    let aux: string = "";

    for (let i = 0; i <= 10; i++)
      aux += this.n + " x "
        + i + " = "
        + (this.n * i) + "\n";
    return aux;
  }

  public numeroDivisores(): number {
    let aux: number = 1;
    for (let i = 2; i <= (this.n / 2); i++)
      if (this.n % i == 0)
        aux++;

    if (this.n != 1)
      aux++;

    return aux;
  }

  public produtoPelaSoma(m: number): number {

    if ((m == 0) || (this.n == 0))
      return 0;

    let n: number = this.n;
    m = this.modulo(m);
    if (n > m) {
      let aux: number = n;
      n = m;
      m = aux;
    }

    let resultado: number = m;
    for (let i = 2; i <= n; i++)
      resultado = resultado + m;

    return resultado;

  }

  public elevado(expoente: number): number {
    if ((this.n == 0) || (expoente <= 0))
      return 0;

    if (this.n == 1)
      return 1;

    let potencia: number = 1

    for (let i = 1; i <= expoente; i++)
      potencia = potencia * this.n;

    // while (expoente > 0) {
    //   potencia = potencia * this.n; // 1 * 2 = 2 
    //   expoente--;
    // }
    return potencia;

  }

  public fatorial(): number {
    let resultado: number = 1;

    for (let i = this.n; i >= 1; i--)
      resultado = resultado * i;

    return resultado;
  }

  public serieHarmonica() {
    let harmonica: number = 0;
    for (let i = 2; i <= this.n; i++)
      harmonica = harmonica + (1 / i);

    return harmonica;
  }


  public fibonacci() {
    let a: number = 1;
    let b: number = 1;
    let c: number = 0;

    if (this.n == 0)
      return c = -1;

    for (let i = 3; i <= this.n; i++) {
      c = a + b;
      a = b
      b = c
    }
    return c;
  }

  public tribonacci() {
    let a: number = 1;
    let b: number = 1;
    let c: number = 2;
    let d: number = 0;

    if (this.n == 0)
      return c = -1;

    for (let i = 4; i <= this.n; i++) {
      d = a + b + c;
      a = b;
      b = c;
      c = d;
    }
    return d;
  }

  public isTriangular(): boolean {

    for (let i = 1; (i * (i + 1)) <= (this.n * 2); i++) {
      if ((i * (i + 1) / 2) == this.n)
        return true
    }
    return false

  }

  public isSomaDosQuadrados(): boolean {
    let calc: number = 0

    if (this.n < 1000 || this.n > 9999)
      return false;

    calc = Math.trunc((this.n / 100) + (this.n % 100));
    calc = calc ** 2;

    if (calc == this.n)
      return true;

    return false;
  }

  public maiorDivisor(): number {
    let maiorDivisor: number = 1;

    for (let i = 1; i < this.n; i++)
      if (this.n % i === 0)
        maiorDivisor = i;


    return maiorDivisor;
  }

  public menorDivisor(): number {

    for (let i = 2; i <= this.n; i++)
      if (this.n % i == 0)
        return i;

    return this.n;
  }

  public mdc(m: number): number {
    let a = this.n;
    let b = m;

    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }

    return a;
  }

  public mdcEficiente(m: number): number {
    let a: number = this.n;
    let b: number = m;

    if (a == 0) {
      return b;
    }

    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }

    return a;

  }

  public mmc(m: number): number {
    if (this.n === 0 || m === 0) {
      return 0; // Se qualquer um dos números for zero, o MMC é zero.
    }
    return (m * this.n) / this.mdc(m);
  }

  public isPrimo(): boolean {
    for (let i = 1; i <= this.n; i++)
      if (this.n % 2 == 0)
        return true;

    return false;
  }

  public isPrimoEficiente(): boolean {

    if (this.n <= 1)
      return false;
    if (this.n === 2)
      return true;
    if (this.n % 2 == 0)
      return false;

    for (let i = 3; i < Math.sqrt(this.n); i += 2)
      if (this.n % i == 0)
        return false;

    return true;

  }

  public isPerfeito(): number {
    let sumOfDivisors = 0;

    for (let i = 1; i <= (this.n / 2); i++) {
      if (this.n % i === 0)
        sumOfDivisors += i;
    }

    if (sumOfDivisors === this.n)
      return 0;

    if (sumOfDivisors > this.n)
      return 1;

    return -1
  }

  public isRaizExata(): boolean {
    let odd: number = 1;
    let n = this.n;
    for (let i = 1; n > 0; i+=2) {
      n -= i;
    }

    return n === 0;
  }
  
  public tresN(): number {
    let iteracoes: number = 0;
    let n: number = this.n;

    while (n !== 1) {
      if (n % 2 === 0)
        n = n / 2;
      else 
        n = 3 * n + 1;
      
      iteracoes++;
    }
    return iteracoes;
  }


  public neperiano(): number {
    let neperiano = 1;
    let fatorial = 1;

    for (let i = 2; i <= this.n; i ++){
      neperiano = neperiano + 1 / fatorial;
      fatorial = fatorial * i;
    } 
    return neperiano;
    }

   public sen(): number {
     let seno: number = this.n;
     let sinal: number = -1;
     let potencia: number = this.n;
     let fatorial: number = 1;

     for (let i = 1; i < 5; i++){
       potencia *= this.n * this.n;
       fatorial *= (2 * i) * (2 * i + 1); 
       seno += sinal * potencia / fatorial;
       sinal *= -1;
     } 
   return Math.trunc(seno);
    }
}