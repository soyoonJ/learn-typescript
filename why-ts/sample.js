// function sum(a, b) {
//   return a + b;
// }
// sum(10, "20"); //1020
// var result = sum(10, 20);
// result

// 하단 코드를 입력하면 js에서도 에러 표시 해줌
// @ts-check

/**
 *
 * @param {number} a 첫번째 숫자
 * @param {number} b 두번째 숫자
 */
function sum(a, b) {
  return a + b;
}
sum(10, 20);
// 숫자 대신 문자 넣었을 때, js에서는 에러처리 따로 되지 않음
// @ts-check 입력하면 가능
// sum(10, "20");
