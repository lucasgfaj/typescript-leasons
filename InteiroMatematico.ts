/*
Defina a classe InteiroMatematico. Objetos desta classe possuem, como principal atributo, um
número inteiro n, fornecido ao construtor. Esse atributo possui métodos tanto de acesso quanto de
modificação. Sempre, entretanto, se assume |n| para internalizá-lo ao objeto.
A implementação dos demais métodos é descrita na sequência. Os parâmetros e o retorno precisam
ser inferidos.
Não utilize classes externas para cumprir os exercícios. O foco deve ser o benefício didático de como
resolver.
*/

export default class InteiroMatematico{
    private n: number;
    
    public constructor(n: number){
      this.n = this.modulo(n);
    }
  
    public getN(): number{
      return this.n;
    }
  
    public setN(n: number): void{
      this.n = this.modulo(n);
    }
    
    public modulo(n: number): number {
      if (n < 0)
        n =-n;
  
      return n;
    }
  
    
  
    public tabuada(): string{
      let aux: string = "";
  
      for (let i = 0; i<= 10; i++)
        aux += this.n + " x "
                  + i + " = "
                  + (this.n * i) + "\n";
      return aux;
    }

    public numeroDivisores(): number{
        let aux: number = 0;
        for (let i = 1;  i <= this.n; i++)
            if(this.n % i == 0)
            aux++;
        
        aux++;
        return aux;
    }
   //Revisar Não Está de Acordo o Exercício;
    public produtoPelaSoma(m: number): number {
        let soma = 0;
        if (this.n < m)
        for (let i = 1; i <= this.n; i++ )
            soma += m;
        for (let i = 1; i <= m; i++)
          soma += this.n;

        return soma;
    }   
    
    public elevado(elevado: number): number{
      if (elevado <= 0)
      return this.n

      for(let i = 1; i <= this.n; i=i ==)
    }
    
   
  }