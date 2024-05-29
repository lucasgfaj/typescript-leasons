/*
Defina a classe PainelContador:
(a) Objetos desta classe possuem, como atributos, os limites inferior e superior (inteiros), de um
intervalo fechado de contagem;
(b) Os atributos são obrigatoriamente fornecidos ao construtor;
(c) Métodos acessadores e modificadores dos atributos devem ser implementados;
(d) Qualquer modificação nesses atributos precisa passar por um método privado de validação,
que troca os valores caso o limite superior seja menor do que o limite inferior;
(e) A implementação dos demais métodos é descrita na sequência;
(f) PainelContador é uma classe de interface. Portanto, imprime mensagens na tela.
*/

export default class Painel {
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
  
  
    public contagem(): void{
      let i: number = this.inferior;
  
      while (i <= this.superior){
        console.log(i);
        i++;
      }
    }
  
    public contagemDecrescente(): void{
      let i: number = this.superior;
  
      while (i >= this.inferior){
        console.log(i);
        i--;
      }
    }
  
    public contagemPares(): void{
      let i: number = this.inferior;
      
      if (i % 2 == 1)
        i++;
  
      while(i <= this.superior){
        console.log(i);
         i+= 2;
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
  
    public contagemPasso(): void{
      let passo = 3;
      let i: number = this.inferior;
      
      while(i <= this.superior){
        console.log(i);
         i+= passo;
         
      }
    }
    public contagemOmitindo(): void {
      let i: number = this.inferior;
  
      do {
        if(i % 3 == 0) {
          console.log('*');
        } else {
          console.log(i);
        }
        i++; 
      } while (i <= this.superior)
    }
  }