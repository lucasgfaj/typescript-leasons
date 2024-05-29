/*
Os exercícios seguintes devem ser resolvidos no nível tanto de modelagem quanto de
implementação. Assim, cabe-lhe abstrair do enunciado elementos como classes, atributos e métodos
para desenvolver os aplicativos pedidos. 
*/

export default class matrizMatematico {
    readonly TAM: number = 15;
    private arr: number [];

    public constructor(){
        this.arr = [];

        for (let i = 0; i < this.TAM; i++){
            this.arr[i] = Math.ceil(Math.random() * 5);
        }
    }

    public toString(): string {
        return this.arr.toString();
    }

    // Verifica se contém números inteiros no array;
    /*public verificaInteiro(): number[] {
        let inteiroArr: number[] = [];
        for (let i = 0; i < this.arr.length; i++) {
            if(Number.isInteger(this.arr[i])){
            inteiroArr.push(this.arr[i]);
            }
          } 
        return inteiroArr;
    }*/

    public verificaInteiro(n: number): boolean {
        for(let i = 0; i < this.TAM; i++)
            if (this.arr[i] == n)
                return true;
            
            return false;
    }

    public verificaOcorrencia(n: number): number {
        let ocorrencias: number = 0;

        for(let i = 0; i < this.TAM; i++){
         if (this.arr[i] == n)
            ocorrencias++;
        }
            return ocorrencias;
    }

    public somaInteiros(): number {
        let sumInteger: number = 0;

        for(let i = 0; i < this.TAM; i++){
            sumInteger += this.arr[i];
        }
            return sumInteger;
    }
    
    public listEvenOrOdd (): string {
        let result: string[] = [];

        for (let i = 0; i < this.TAM; i++){
        
            let numberArr = this.arr[i];

        if (numberArr %  2 === 0) 
            result.push(`${numberArr} é par`);
        else 
        result.push(`${numberArr} é impar`);
        }
        return result.join("\n");
      }
}