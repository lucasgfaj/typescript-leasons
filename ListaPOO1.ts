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
