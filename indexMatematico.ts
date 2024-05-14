import InteiroMatematico from "./InteiroMatematico";

let inteiro = new InteiroMatematico(10);

console.log("Tabuada");
console.log(inteiro.tabuada());
console.log();

console.log("Divisão");
console.log(inteiro.numeroDivisores());
console.log();

console.log("Produto pela Soma");
console.log(inteiro.produtoPelaSoma(2));
console.log()

console.log("Elevado");
console.log(inteiro.elevado(2));
console.log()