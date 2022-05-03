// function logMessage(value: any) {
//     console.log(value);
// }
// logMessage('hello');
// logMessage(100);

// Union Type 유니온 타입
// 하나의 타입 이상을 쓸 수 있도록 함
function logMessage(value: string | number) {
    if(typeof value === 'number') {
        value.toLocaleString();
    }
    if (typeof value === 'string') {
        value.toString();
    }
    throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(100);

interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

// union type이랑 인터섹션 타입 중에서는 union type을 실무에서 더 많이 쓰긴 함

// function askSomeone(someone: Developer | Person) {
//     // name, skill, age를 다 줄 거라고 생각하지만 union type임에도 name만 가능함
//     // 따로따로 주고 싶으면 위에처럼 if (typeof someone==='Developer') 이런식으로 써줘야 함
//     // someone.name
// }
// 두 타입 중에 하나만 작성해서 넘겨도 됨
// askSomeone({name: '디벨로퍼', skill: '웹 개발'});
// askSomeone({name: '캡틴', age: 100});

function askSomeone(someone: Developer & Person) {
    // 인터섹션 타입 & 은 에러 따로 안남
    someone.name;
    someone.skill;
    someone.age;
}
// 둘 중에 하나만 쓰는 게 아니라 셋 다 모두 넘겨야 함
askSomeone({name: '디벨로퍼', skill: '웹 개발', age:34});
// var seho: string | number | boolean;
// var capt: string & number & boolean;