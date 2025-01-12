/**
 * Hoisting
 */

console.log('Hello');
console.log('World');

// console.log(name);
// var name = '팩토리';
// console.log(name);

/**
 * Hoisting은 무엇인가?
 * 
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상
 */
// var name;
// console.log(name);
// name = '팩토리';
// console.log(name);


/**
 * let과 const도 hoisting이 된다.
 * hoisting 관련 에러가 발생한다. -> initialization
 * 만약 hoisting이 안된다면, name is nod defined 에러가 발생하며,
 * 정의가 안되었다는 에러가 발생한다.
 */
console.log(name);
const name = '팩토리';