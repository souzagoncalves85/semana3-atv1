//Algoritmo 1
//cria um array e adiciona uma lista de numeros
const numeros = [1,2,3,4,5];
//cria uma função 'calcularDobro', onde retorna o dobro do valor
function calcularDobro(numero)
{
  return numero*2;  
}
//cria uma contante numerosDobro onde recebe o metodo map(calcularDobro)
const numerosDobro = numeros.map(calcularDobro);
//imprime o numero dobrado
console.log(numerosDobro);
