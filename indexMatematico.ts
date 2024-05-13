import InteiroMatematico from "./InteiroMatematico";

let inteiro = new InteiroMatematico(2);

console.log("Tabuada");
console.log(inteiro.tabuada());
console.log();

console.log("Divisão");
console.log(inteiro.numeroDivisores());
console.log();

console.log("Produto pela Soma");
console.log(inteiro.produtoPelaSoma(10));
console.log()

console.log("Elevado");
console.log(inteiro.elevado(2));
console.log()