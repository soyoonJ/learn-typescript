// interface Person {
//     name: string;
//     age: number;
// }

type Person = {
    name: string;
    age: number;
}

// interface를 사용했을 경우 Person에 갖다댔을 때 interface: Person이라 나옴
// type 사용했을 때는 type 내용 전체가 나옴 (name, age 내용 다 포함)
var seho: Person = {
    name: '세호',
    age: 30
}

type MyString = string;
var str: MyString = 'hello';

type Todo = { id: string; title: string; done: boolean};
function getTodo(todo: Todo) {

}

// type은 확장이 되지 않음
// 좋은 소프트웨어는 언제나 확장이 용이해야 한다는 원칙
// 때문에 가능한 한 interface를 우선적으로 사용하는 것이 좋음

// interface Developer extends Person{
    // extends Person을 쓰면 확장이 되기 때문에 밑에 name, age는 쓸 필요가 없음
    // name: string;
    // age: number;
    // language: string;
// }