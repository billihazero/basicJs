/**
 * 
 * 연산자
 */

/**
 * 
 * 1) 덧셈
 * 2) 뺄셈
 * 3) 곱셈
 * 4) 나눗셈
 * 5) 나머지
 * 
 */

console.log(10+10);
console.log(10-10);
console.log(10*10);
console.log(10/10);
console.log(10%10);
console.log(10%3);

console.log('---------');

console.log(10 * (10 + 10));

/**
 * 
 * 증가와 감소
*/

let num = 1;
num ++;
console.log(num);

num --;
console.log(num);
console.log('---------');

/**
 * 연산자의 위치
 */
let result = 1 ;
console.log(result);

result = num ++;
console.log(result, num);

result = num -- ;
console.log(result, num);

result = -- num ;
console.log(result, num);

console.log('-----------');
/**
 * 숫자 타입이 아닌 타입에 +, - 사용하면 어떻게 될까 ?
 * +, - 를 붙이면 number로 타입이 바뀌게 되고, 값은 그대로 유지되지만, 붙이지 않으면 원래 타입으로 유지된다.
 * 그러나, boolean타입은 true는 1, false는 0 으로 출력이 된다.
 * 
 */

let sample = '99';
console.log(+sample);
console.log(typeof +sample);

console.log(sample);
console.log(typeof sample);

sample = true;
console.log(+sample);
console.log(typeof +sample);

sample = '팩토리';
console.log(+sample);

console.log('-----------');
//NaN = Not a number

/**
 * 할당 연산자 (assignment operator)
 */

number = 100;
console.log(number);

number += 10;
console.log(number);

number -= 10;
console.log(number);

number *= 10;
console.log(number);

number %= 10;
console.log(number);

console.log('--------------');

/**
 * 비교연산자
 * 
 * 1) 값의 비교
 * 2) 값과 타입의 비교
 */

console.log(5 == 5);

console.log(5 == '5');
console.log(0 =='');

console.log(true == 1);
console.log(false == 0);
console.log(true == '1');

// === 연산자는 갑과 타입까지 비교하여 결과를 알려준다.
console.log(5 === 5);
console.log(5 === '5');

console.log(true === 1);
console.log(false === 0);
console.log(true === '1');

console.log('----------');

console.log(5 != '5');
console.log(0 !='');

console.log(true != 1);
console.log(false != 0);
console.log(true != '1');

console.log('----------');
console.log(true !== 1);
console.log(false !== 0);
console.log(true !== '1');

console.log('----------');
/**
 * 
 * 대소 관계 비교 연산자
 */

console.log(100 > 1 );
console.log(100 < 1);
console.log(100 >= 1 );
console.log(100 <= 1);

/**
 * 삼항 조건 연산자 (ternary operator)
 */

console.log(10 > 0 ? '10이 0보다 크다' : '10이 0보다 작다');

/**
 * 논리 연산자
 * 
 * 1) &&
 * 2) ||
 */

console.log('--------------');
// && 조건은 모두 true 여야 true를 반환한다.
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log('--------------');

// ||는 하나만 true 여도 true를 반환한다.
console.log(true || true);
console.log(true || false); 

console.log(false || false);

console.log(10 < 1 && 20 > 2);

console.log('-----------');
/**
 * 단축평가 (short circuit evaluation)
 * 
 * &&를 사용했을 때 좌측이 true면 우측 값 반환
 * &&를 사용했을 때 좌측이 false면 좌측 값 반환
 * 
 * ||를 사용했을 때 좌측이 true면 좌측 값 반환
 * ||를 사용했을 때 좌측이 false면 우측 값 반환
 */

console.log(true || '팩토리');
console.log(false || '팩토리');
console.log(false && '팩토리');
console.log(true && '팩토리');

console.log(true && true && '팩토리');
console.log(true && false && '팩토리');

console.log('-----------');

/**
 * 지수 연산자
 */
console.log(2 ** 2);
console.log(10 ** 3);

/**
 * null 연산자
 */

let name;
console.log(name);

// ?? 연산자는 name이 undefined라면 '코드팩토리'를 대입
name = name ?? '코드팩토리';
console.log(name);

//이미 name 변수는 undefined가 아닌 '팩토리'가 대입되어 있기 때문에 아이브가 대입되지 않음.
name = name ?? '아이브';
console.log(name);