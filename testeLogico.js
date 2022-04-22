/* 
1) Implemente um método que crie um novo array baseado nos valores passados.
Entradas do método (3,a), Resultado do método: ['a', 'a', 'a'] 
*/

function createNewArray(number, value) {
  const result = Array.from({ length: number }).fill(value);
  return result;
}

/* Exemplo de teste: createNewArray(3, 'a') */

/* 
2) Implemente um método que inverta um array, não utilize métodos nativos do array.
Entrada do método ([1,2,3,4]), Resultado do método: [4,3,2,1]
*/

function invertArray(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.unshift(arr[i]);
  }
  return newArr;
}

/* Exemplo de teste: invertArray([1, 2, 3, 4]) */

/*
3) Implemente um método que limpe os itens desnecessários de um array (false, undefined, strings vazias, zero, null).
Entrada do método ([1,2,'', undefined]), Resultado do método: [1,2]
*/

function clearArr(arr) {
  return arr.filter(Number);
}
/* Exemplo de teste: clearArr([1,2,'', undefined]) */

/*
4) Implemente um método que a partir de um array de arrays, converta em um objeto com chave e valor.
Entrada do método ([["c",2],["d",4]]), Resultado do métdodo: {c:2, d:4}
*/

function convertArrToObject(arr) {
  return (arr = Object.fromEntries(arr));
}
/* Exemplo de teste: convertArrToObject([["c",2],["d",4]]) */

/*
5) Implemente um método que retorne um array, sem os itens passados por parâmetro depois do array de entrada. 
Entrada do método ([5,4,3,2,5], 5,3), Resultado do método: [4,2]
*/

function removeFromArr(arr, ...rest) {
  return arr.filter((elem) => !rest.includes(elem));
}
/* Exemplo de teste: removeFromArr([5,4,3,2,5], 5,3) */

/*
6) Implemente um método que retorne um array, sem valores duplicados.
Entrada do método ([1,2,3,3,2,4,5,4,7,3]), Resultado do método: [1,2,3,4,5,7]
*/

function noDuplicateArr(arr) {
  return (arr = [...new Set(arr)]);
}
/* Exemplo de teste: noDuplicateArr([1,2,3,3,2,4,5,4,7,3]) */

/*
7) Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.
Entrada do método ([1,2,3,4],[1,2,3,4]), Resultado do método: true
*/

function equalArrays(firstArr, secondArr) {
  return firstArr.every((elem, value) => elem === secondArr[value]);
}

/* Exemplo de teste: equalArrays([1,2,3,4],[1,2,3,4])*/

/*
8) Implemente um método que remova os aninhamentos de um array de arrays para um array unico.
Entrada do método ([1, 2, [3], [4, 5]]), Resultado do método: [1, 2, 3, 4, 5]
*/
function flatArr(arr) {
  return arr.flat();
}
/* Exemplo de teste: flatArr([1, 2, [3], [4, 5]]) */

/*
9) Implemente um método divida um array por uma quantidade passada por parâmetro.
Entrada do método ([1, 2, 3, 4, 5], 2), Resultado do método: [[1, 2], [3, 4], [5]]
*/

function splitArr(arr, value) {
  let newArr = [];
  for (let i = 0; i < arr.length; i = i + value) {
    newArr.push(arr.slice(i, i + value));
  }

  return newArr;
}
/* Exemplo de teste: splitArr([1, 2, 3, 4, 5], 2) */

/*
10) Implemente um método que encontre os valores comuns entre dois arrays.
Entrada do método ([6, 8], [8, 9]), Resultado do método: [8]
*/

function commonElement(firstArr, secondArr) {
  let newArr = [];
  return (newArr = firstArr.filter((elem) => secondArr.includes(elem)));
}

/* Exemplo de teste: commonElement([6,8],[8,9]) */
