/**
 * 함수 선언하기
 * 1) function 예약어 사용
 * 2) 화살표 기호 사용
 * 
 * 익명함수 : 함수에는 기본적으로 이름이 없으므로 다른 곳에서 사용할 수 없다. 이런 이름이 없는 함수를 익명함수라고 한다.
 * 
 * function() {};
 * () => {}
 */

/**
 * 이름을 붙이면 다른 곳에서 사용할 수 있다.
 * function a() {}
 * const b = function() {};
 * const c = () => {};
 */

function a() {
    console.log('hello');
    console.log('world');
};

a();

function b() {
    return 10;
}
b();
console.log(b());

/**
 * return의 역할
 * 1) 반환값 전달
 * 2) 함수의 실행을 중간에 멈추는 역할 : return이 실행되면 그 아래 코드는 아예 실행되지 않는다.
 */

function c(){
    console.log('Hello');
    return;
    console.log('Return');
}
c();

/**
 * 매개변수와 인수 사용하기
 */

//parameter: 매개변수 , 함수를 선언할 때 사용한 변수
//매개변수사용: 인수, 함수를 호출할 때 넣은 값
function d(parameter){
    console.log(parameter);
}
d('매개변수사용');

/**
 * 매개변수에 대응되는 인수가 없을 때에는 자동으로 undefined 값이 대인된다.
 */

function a(w, x, y, z){
    console.log(w, x, y, z);
    console.log(arguments); // 인수의 개수를 구할 수 있음.
};
a('A', 'B', 'C', );
// A B C undefined 

/**
 * 매개변수 x, y, z로 인수를 받아 곱한 값을 반환하는 multiply() 함수 만들기
 */

const multiply = (x, y, z) => {
    console.log( x * y * z);
}
multiply(1, 2, 3);