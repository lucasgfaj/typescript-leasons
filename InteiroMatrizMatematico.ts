/*
Defina a classe InteiroMatematico. Objetos desta classe possuem, como principal atributo, um
número inteiro n, fornecido ao construtor. Esse atributo possui métodos tanto de acesso quanto de
modificação. Sempre, entretanto, se assume |n| para internalizá-lo ao objeto.
A implementação dos demais métodos é descrita na sequência. Os parâmetros e o retorno precisam
ser inferidos.
Não utilize classes externas para cumprir os exercícios. O foco deve ser o benefício didático de como
resolver.
*/


export default class InteiroMatrizMatematico {
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
 
    
    public getDivisores(): number[] {
        let divisores: number[] = [1];
        
        for (let i = 2; i <= this.n; i++) {
          if (this.n % i === 0) {
            divisores.push(i);
          }
        }
                                    
        return divisores;
      }
  
      public serieFibonacci(): number[] {
        if (this.n == 0)
          return [-1];
        
        let fibonacci: number[] = [1, 1];
      
        for (let i = 2; i < this.n; i++) {
          fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
        }
      
        return fibonacci;
      }
  
      public serieDeTribonacci(): number[] {
        if (this.n == 0)
          return [-1];
        
        let tribonacci: number[] = [1, 1, 2];
      
        for (let i = 3; i < this.n; i++) {
          let nextTerm = tribonacci[i - 1] + tribonacci[i - 2] + tribonacci[i - 3];
          tribonacci.push(nextTerm);
        }
      
        return tribonacci;
      }
      
      public getPrimos(): number[] {
        let primos: number[] = [];
      
        if (this.n >= 2) {
          primos.push(2);
        }
      
        for (let i = 3; i <= this.n; i += 2) {
          let isPrime = true;
          for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
              isPrime = false;
              break;
            }
          }
          if (isPrime) {
            primos.push(i);
          }
        }
      
        return primos;
      }
      
}  