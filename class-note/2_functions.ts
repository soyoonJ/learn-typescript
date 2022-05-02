// 함수의 파라미터에 타입을 정의하는 방식
// function sum(a:number, b:number) {
//     return a+b;
// }
// sum(10, 20);

// 함수의 반환 값에 타입을 정의하는 방식
function add(): number {
    return 10;
}

// 함수에 타입을 정의하는 방식
function sum(a: number, b: number): number {
    return a + b;
}
// 2개 인자보다 더 적거나 많은 걸 넣었을 때 오류 남
// sum(10, 20, 30, 40);

// 함수의 옵셔널 파라미터
// 특정 인자를 선택적으로 사용하고 싶을 때!
function log(a: string, b?: string) {

}
log('hello world');
log('hello ts', 'abc');