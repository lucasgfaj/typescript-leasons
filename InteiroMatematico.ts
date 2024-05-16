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
        let aux: number = 1;
        for (let i = 2;  i <= (this.n/2); i++)
            if(this.n % i == 0)
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
      if (n > m){
        let aux: number = n;
        n = m;
        m = aux;
      }

      let resultado: number = m;
      for (let i = 2; i <= n; i++)
        resultado = resultado +  m;

      return resultado;
  
     }   
    
    public elevado(expoente: number): number{
      if((this.n == 0) || (expoente <=0))
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

    public fatorial (): number {
      let resultado: number = 1;

      for (let i = this.n; i >= 1; i--)
        resultado = resultado * i;

      return resultado;
    }

    public serieHarmonica(){
      let harmonica: number = 0;
      for(let i = 2; i <= this.n; i ++)
        harmonica = harmonica +( 1 / i);

      return harmonica;
    }


    public fibonacci(){
      let a: number = 1;
      let b: number = 1;
      let c: number = 0;

      if (this.n == 0)
        return c = -1;

      for (let i = 3; i <= this.n; i++){
       c = a + b;
       a = b
       b = c
      }
      return c;
    }

    public tribonacci(){
      let a: number = 1;
      let b: number = 1;
      let c: number = 2;
      let d: number = 0;

      if (this.n == 0)
        return c = -1;

      for (let i = 4; i <= this.n; i++){
       d = a + b + c;
       a = b;
       b = c;
       c = d;
      }
      return d;
    }

    public isTriangular(): boolean {

      for (let i = 1; (i*(i+1))<=(this.n * 2); i++){
        if((i* (i + 1) /2 ) == this.n)
        return true
      }
      return false

    }

    public isSomaDosQuadrados(): boolean{
      let calc: number = 0
      
      if (this.n < 1000 || this.n > 9999)
        return false;

        calc = Math.trunc((this.n / 100) + (this.n % 100));
        calc = calc ** 2;

        if ( calc == this.n)
          return true;
          
      return false;
    }

    public maiorDivisor(): number{
      let maiorDivisor: number = 1;

      for (let i = 1; i < this.n; i++)
        if (this.n % i === 0)
         maiorDivisor = i; 
      

      return maiorDivisor;
    } 

    //Resolução para Terminar
    public menorDivisor(){
      let menorDivisor: number = 2;

      for (let i = 2; i < this.n; i++)
        if (this.n % i === 0)
         menorDivisor = i; 

      return menorDivisor;
    } 



    public mdc(){

    }

    public mdcEficiente(){

    }

    public mmc(){

    }
    
    public isPrimo(){

    }

    public isPrimoEficiente(){

    }

    public isPerfeito(){

    }

    public isRaizExata(){

    }

    public tresN(){

    }

    public neperiano(){

    }

    public neperianoEficiente(){

    }

    

  }