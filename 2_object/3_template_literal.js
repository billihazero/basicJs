const kuri = {
    name: '하영',
    year: 1997,
    month: 4,
    date: 17,
};
console.log(kuri.date);
console.log(kuri['name']);

console.log('----------------');

const name = '조용';
const year = 2010;

// const yong = {
//     name: name,
//     year: year,
// }

const yong = {
    name, year
};

console.log(yong.name);
console.log(yong.year);

console.log('---------');

const zerocho = {
    name: {
        first: '현영',
        last: '조',
    },
    gender : 'm',
}

zerocho.name.last = '김';

console.log(zerocho);

/**
 * 함수를 인수로 받는 배열 메서드
 * 1) forEach(), map()
 */

//배열.forEach(함수);  = 함수를 반복해서 수행
const arr = [1, 5, 4, 2];
arr.forEach((number, index) => {
    console.log(number, index);
})

const array = [1, 3, 5, 7];
array.forEach((number, index) => {
    console.log(number, index);
})

console.log('------------');
//for문으로 바꾸기
const newArr = [1, 3, 5, 7]
for(let i = 0; i<newArr.length; i++){
    console.log(newArr[i], i);
}

const numbers = Array(5).fill(3).map((v,i) => i * 2 + 1);
console.log(numbers);