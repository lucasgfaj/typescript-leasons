import { MatrizAlfabetica } from "./matrizCalc";


const matriz = new MatrizAlfabetica();
const resultado = matriz.getFirstNLetters(32);
console.log(resultado); // [ 'A', 'B' ]