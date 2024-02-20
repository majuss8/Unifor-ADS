// **************** 01 ****************

// let num1 = parseFloat(prompt("Digite o valor 1: "));
// let num2 = parseFloat(prompt("Digite o valor 2: "));

// const soma = num1 + num2;

// alert(`${num1} + ${num2} = ${soma}`);

// **************** 02 ****************

// let valor = prompt("Digite um número: ");

// if (valor % 2 === 0) {
//     alert("O número informado é par")
// }
// else {
//     alert("O número informado é ímpar")
// }

// **************** 03 ****************

// let num1 = parseFloat(prompt("Digite o valor 1: "));
// let num2 = parseFloat(prompt("Digite o valor 2: "));
// let num3 = parseFloat(prompt("Digite o valor 3: "));

// if (num1 > num2 && num1 > num3) {
//     alert(`Maior valor: ${num1}`)
// } 
// else if (num2 > num1 && num2 > num3) {
//     alert(`Maior valor: ${num2}`)
// }
// else {
//     alert(`Maior valor: ${num3}`)
// }

// const arrayNumeros = [];
// arrayNumeros.push(num1);
// arrayNumeros.push(num2);
// arrayNumeros.push(num3);

// const maiorValor = Math.max.apply(null, arrayNumeros);
// alert(`${arrayNumeros}\nMaior valor: ${maiorValor}`);

// **************** 04 **************** 

// let num = parseFloat(prompt("Informe um número: "));

// if (num > 0) {
//     alert(`${num} é um número positivo`)
// }
// else if (num < 0) {
//     alert(`${num} é um número negativo`)
// }
// else {
//     alert(`${num} é um valor nulo`)
// }

// **************** 05 ****************

// let nota1 = parseFloat(prompt("Nota 1: "));
// let nota2 = parseFloat(prompt("Nota 2: "));
// let nota3 = parseFloat(prompt("Nota 3: "));

// const media = (nota1 + nota2 + nota3) / 3

// if (media >= 6 && media >= 9) {
//     alert(`Média: ${media.toFixed(2)}\nAprovado com Honra ao Mérito!`)
// }
// else if (media >= 6) {
//     alert(`Média: ${media.toFixed(2)}\nAprovado!`)
// } 
// else {
//     alert(`Média: ${media.toFixed(2)}\nReprovado!`)
// }

// **************** 06 ****************

// let num = parseFloat(prompt("Informe um número: "));

// if (num % 3 === 0 && num % 5 === 0) {
//     alert(`${num} é um número divisível por 3 e por 5`)
// }
// else if (num % 3 === 0) {
//     alert(`${num} é um número divisível por 3`)
// }
// else if (num % 5 === 0) {
//     alert(`${num} é um número divisível por 5`)
// }
// else {
//     alert(`${num} é um número não divisível nem por 3 nem por 5`)
// }

// **************** 07 ****************

// let idade = parseInt(prompt("Informe a idade: "));

// if (idade >= 0 && idade <= 12) {
//     alert(`${idade} anos \nÉ uma criança`)
// }
// else if (idade >= 13 && idade <= 17) {
//     alert(`${idade} anos \nÉ um(a) adolescente`)
// }
// else if (idade >= 18) {
//     alert(`${idade} anos \nÉ um(a) adulto(a)`)
// }
// else {
//     alert("Idade informada inválida")
// }

// **************** 08 ****************

// alert("Informe os valores dos lados do triângulo");
// let lado1 = parseFloat(prompt("Lado 1: "));
// let lado2 = parseFloat(prompt("Lado 2: "));
// let lado3 = parseFloat(prompt("Lado 3: "));

// if ((lado1 + lado2) > lado3 && 
//     (lado1 + lado3) > lado2 && 
//     (lado2 + lado1) > lado3 && 
//     (lado2 + lado3) > lado1 && 
//     (lado3 + lado1) > lado2 && 
//     (lado3 + lado2) > lado1) {
//     alert(`É possível formar um triângulo com as medidas informadas: \nLado 1: ${lado1} \nLado 2: ${lado2} \nLado 3: ${lado3}`)
// }
// else {
//     alert(`Não é possível formar um triângulo com as medidas informadas: \nLado 1: ${lado1} \nLado 2: ${lado2} \nLado 3: ${lado3}`)
// }

