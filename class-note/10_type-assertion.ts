// 타입 단언(type assertion)
var a;
a = 20;
a = 'a';
// 개발자가 정의한 대로 타입 지정
// a가 처음에 타입 any를 가지고 있고, 중간에 바뀌었으나 반영 X
// 개발자가 확인했을 때는 딱 string이 되었다는 것을 알 수 있음
// as string으로 해주면 b에 string값이 할당됨
var b = a as string;

// DOM API 조작
// <div id="app">hi</div>

var div = document.querySelector('div');
if (div) {
    div.innerText
}