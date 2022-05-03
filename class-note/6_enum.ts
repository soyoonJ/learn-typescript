enum Shoes {
    // 아무것도 지정해주지 않으면 0, 1, 2 이런식으로 값 넣음
    // Nike,
    // Adidas
    Nike = '나이키',
    Adidas = '아디다스'
}

var myShoes = Shoes.Nike;
// console.log(myShoes); // 0
console.log(myShoes); // "나이키"

// 예제
enum Answer {
    Yes = "Y",
    No = "N",
}
function askQuestion(answer: Answer) {
    if (answer === Answer.Yes) {
        console.log('정답입니다');
    }
    if (answer === Answer.No) {
        console.log('오답입니다');
    }
}
askQuestion(Answer.Yes);