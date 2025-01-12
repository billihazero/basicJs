/**
 * 
 * Data Types
 * 여섯개의 Primitive Type과
 * 한개의 Object Type이 있다.
 * 
 * 1) Number (숫자)
 * 2) String (문자열)
 * 3) Boolean (불리언)
 * 4) undefined (언디파인드)
 * 5) null (널)
 * 6) Symbol (심볼)
 * 
 * 7) Object (객체)
 *     Function
 *     Array
 *    
 */

const age = 32;
const temparature = -10;
const pi = 3.14;

console.log(typeof age);
console.log(typeof temparature);
console.log(typeof pi);

const infinity = Infinity;
const nInfinity = -Infinity;

console.log(typeof infinity);
console.log(typeof nInfinity);
console.log("--------------------");

/**
 * 
 * String type
*/

const codeFactory = '코드팩토리';
console.log(typeof codeFactory);
  
/**
 * Template Literal
 * 
 * Escaping Character
 * 1) new Line -> \n
 * 2) tab -> \t
 * 3) 백슬래시를 스트링으로 표현하고 싶다면 두 번 입력하기
 */

const iveYujin = '아이브\n유진';
console.log(iveYujin);

const iveWonyoung = '아이브\t원영';
console.log(iveWonyoung); 

const groupName = '아이브';
console.log(groupName + ' 안유진') //아이브 안유진
console.log(`${groupName} 안유진`); //아이브 안유진
// 백틱 안에 ${}표시를 하면 변수명으로 인식한다.


/**
 * Undefined
 * 
 * 사용자가 직접 값을 초기화하지 않았을 때 지정되는 값
 * 
 * 직접 undefined로 값을 초기화하는 것은 지양해야한다.
 *
 */

let noInit;
console.log(noInit);
console.log(typeof noInit);

/**
 * null 타입
 * 
 * undefined와 마찬가지로 값이 없다는 뜻이나
 * JS에서는 개발자가 명시적으로 없는 값으로 선언한 것이다.
 * 
 */

let init = null;
console.log(init);
console.log(typeof init);

/**
 * Symbol 타입
 * 
 * 유일무이한 값을 생성할 때 사용된다.
 * 다른 프리미티브 값들과 다르게 symbol 함수를 호출해서 사용한다.
 */

const test1 = '1';
const test2 = '1';

console.log(test1 === test2);

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');

console.log(symbol1 === symbol2);

/**
 * Object 타입
 * 
 * Map
 * key:value  쌍으로 이루어져 있다.
 * 
 */

const dictionary = {
    red: '빨간색',
    orange: '주황색',
    yellow: '노란색',
};

console.log(dictionary);
console.log(dictionary.red);
console.log(dictionary['red']);

/**
 * Array 타입
 * 
 * 값을 리스트로 나열할 수 있는 타입이다.
 */

const iveMemberArray = [
    '안유진',
    '장원영', 
    '가을', 
    '레이', 
    '리즈', 
    '이서'
];

console.log(iveMemberArray);

/**
 * 
 * static typing -> 변수를 선언할 때 어떤 타입의 변수를 선언할지 명시를 한다.
 *                  C
 * dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입을 '추론'한다.
 * JS -> dynamic typing
 */