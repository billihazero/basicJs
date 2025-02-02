/**
 * 1. 동기 & 비동기
 * 동기 (synchronous): 앞선 작업이 완전히 끝난 후에 다음 작업이 실행되는 것
 * 비동기 (asynchronous) : 앞선 작업이 끝나지 않아도 다음 작업이 실행되는 것
 */

/**
 * 호출 스택과 이벤트 루프
 */

const timer = setTimeout(() => {
    console.log("0초 뒤 시작");
},0);
console.log("내가 먼저");

