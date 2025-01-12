/**
 * 객체 Object - 다양한 값을 모아둔 다른 값
 * 1) 배열 Array
 * 2) 함수 function
 * 3) 배열이나 함수가 아닌 객체
 * 
 */

/**
 * array
 */

const apple = '사과';
const orange = '오렌지';
const pear = '배';

const fruits = ['사과', '오렌지', '배'];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

/**
 * 배열 안의 값의 자료형이 모두 같지 않아도 된다.
 */

const arrayOfArray = [[1,2,3],[4,5]];
console.log(arrayOfArray[0]);

const a = 10;
const variableArray = [a, 30];
console.log(variableArray[0]);

/**
 * 배열 이름 뒤에 .length를 붙이면 배열의 요소의 개수를 구할 수 있다.
 */
console.log(variableArray.length);

const find = ['a', 'b', 'c', 'd', 'e'];
console.log(find[find.length-1]);

console.log('--------------');
/**
 * 배열에 요소 추가하기
 */

const target = ['a', 'b', 'c', 'd', 'e'];
target[5] = 'f';
console.log(target);

/**
 * 배열 맨 앞, 맨 뒤에 요소를 추가하는 방법
 * 앞에 추가: 배열 이름 뒤에 .unshift()를 붙이면 배열 맨 앞에 요소를 추가할 수 있다.
 * 뒤에 추가: 배열 이름 뒤에 .push()를 붙이면 배열 맨 뒤에 요소를 추가할 수 있다.
 */

const plusArray = ['나', '다', '라', '마'];
plusArray.unshift('가');
console.log(plusArray);

plusArray.push('바');
console.log(plusArray);
console.log('-------------');
/**
 * 배열 선언을 const로 하였음에도 배열에 새 값을 추가하거나 수정할 수 있다.
 * 배열에 값을 추가, 수정, 삭제를 할 수는 있지만, 새로운 배열 객체를 대입할 수는 없다.
 * target = ['e', 'g'] 로 새로 선언하는 것이 불가능
 */

/**
 * 
 * 배열에서 요소 삭제하기
 * 맨 뒤 요소 삭제: 배열 이름 뒤에 .pop()을 사용
 * 맨 앞 요소 삭제: 배열 이름 뒤에 .shift()를 사용
 */

const line = [ '가', '나', '다', '라', '마' ];
line.pop();
console.log(line);

line.shift();
console.log(line);