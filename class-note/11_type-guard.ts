interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

// 유니온 타입은 공통된 속성만 접근할 수 있음 - 직접 명시해줘도 안됨
function introduce(): Developer | Person {
    return { name: 'Tony', age: 33, skill: 'Iron Making' }
}
var tony = introduce();
// console.log(tony.skill);


// 타입 단언만 사용했을 때의 문제점 - 코드 계속해서 반복
if ((tony as Developer).skill) {
    var skill = console.log(((tony as Developer).skill));
    console.log(skill);
} else if ((tony as Person).age) {
    var age = console.log(((tony as Person).age));
    console.log(age);
}


// 타입 가드 정의
// 타입가드 함수 is타입변수
function isDeveloper(target: Developer | Person): target is Developer {
    return (target as Developer).skill !== undefined;
}

if (isDeveloper(tony)) {
    console.log(tony.skill)
} else {
    console.log(tony.age)
}