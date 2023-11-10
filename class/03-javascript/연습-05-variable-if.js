// 데이터 타입, 연산자 실습

1 + 1
// 2
1 + "만원"
// '1만원'
1 + "1"
// '11'
1 - "1"
// 0
"코드" + "캠프"
// '코드캠프'
"123" == 123
// true
"123" === 123
// false
true && true
// true
true && false
// false
false || true
// true
!false
// true
!true
// false

// 조건문 실습

if(1+1 === 2) {
    console.log("정답입니다")
}
else{
    console.log("틀렸습니다")
}
// VM827:2 정답입니다
undefined
if(true) {
    console.log("정답입니다")
}
else{
    console.log("틀렸습니다")
}
// VM842:2 정답입니다
undefined
if(!true) {
    console.log("정답입니다")
}
else{
    console.log("틀렸습니다")
}
// VM845:5 틀렸습니다
undefined
if(0) {
    console.log("정답입니다")
}
else{
    console.log("틀렸습니다")
}
// VM858:5 틀렸습니다
