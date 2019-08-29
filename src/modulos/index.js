/*
 * importa a biblioteca toda passando um alias
 * "*" carrega tudo da lib
 * (nome da função ou dentro de {}) serve para importar uma função só
 * as => alias para o metodo
 *
*/
// 1 - import * as R from 'ramda';
// 2 - import union from 'ramda';
import { union } from 'ramda';
import sum, { sub, mult, div } from './utils';

const arr1 = [1, 1, 1, 2, 2, 3, 4, 5, 6, 6];
const arr2 = [5, 6, 6, 6, 7, 7, 8, 9, 10, 1];

const arr3 = union(arr1, arr2);

console.log(sum(3, 5));
console.log(sub(3, 5));
console.log(mult(3, 5));
console.log(div(3, 5));
console.log(arr3);

