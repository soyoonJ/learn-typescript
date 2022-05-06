// Promise를 이용한 API 함수 타입 정의
function fetchItems(): Promise<string[]> {
    let items: string[] = ['a', 'b', 'c'];
    return new Promise(function (resolve) {
        resolve(items);
    })
}
fetchItems();