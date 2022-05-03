interface User {
    age: number;
    name: string;
}

// 변수에 인터페이스 활용
var seho: User = {
    age: 33,
    name: '세호'
}

// 함수에 인터페이스 활용
function getUser(user: User) {
    console.log(user)
}
const capt = {
    age: 100,
    name: '캡틴'
}
getUser(capt);

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
    (a: number, b: number): number;
}
var sum: SumFunction;
sum = function(a: number, b: number): number {
    return a + b;
}

// 인덱싱
interface StringArray {
    [index: number]: string;
}

var arr: StringArray = ['a', 'b', 'c'];
// number로 하면 오류 남
// arr[0] = 10
arr[0]; // 'a'

// 딕셔너리 패턴
// key가 string이고 value는 정규표현식
interface StringRegexDictionary {
 [key: string]: RegExp;
}

var obj: StringRegexDictionary = {
    // sth: /abc/,
    // 하단은 value가 RegExp로 나와야 하는데 String이기 때문에 잘못 됨
    // cssFile: 'css'
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}
// 하단 에러남
// obj['cssFile'] = 'a'
Object.keys(obj).forEach(function(value) {

})

// 인터페이스 확장
// interface Person {
//     name: string;
//     age: number;
// }

// interface Developer extends Person{
//     // extends Person을 쓰면 확장이 되기 때문에 밑에 name, age는 쓸 필요가 없음
//     // name: string;
//     // age: number;
//     language: string;
// }

// var captain: Developer = {
//     language: 'ts',
//     age: 100,
//     name: '캡틴'
// }