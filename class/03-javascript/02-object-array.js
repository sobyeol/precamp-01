const fruits = [
    {number: 1, title: "레드향"},
    {number: 2, title: "샤인머스캣"},
    {number: 3, title: "산청딸기"},
    {number: 4, title: "한라봉"},
    {number: 5, title: "사과"},
    {number: 6, title: "애플망고"},
    {number: 7, title: "딸기"},
    {number: 8, title: "천혜향"},
    {number: 9, title: "과일선물세트"},
    {number: 10, title: "귤"},
]
undefined
fruits
fruits[0].number + " " + fruits[0].title
'1 레드향'
fruits[0].number + " " + fruits[0].title
'1 레드향'

// const fruits = [
//     {number: 1, title: "레드향"},
//     {number: 2, title: "샤인머스캣"},
//     {number: 3, title: "산청딸기"},
//     {number: 4, title: "한라봉"},
//     {number: 5, title: "사과"},
//     {number: 6, title: "애플망고"},
//     {number: 7, title: "딸기"},
//     {number: 8, title: "천혜향"},
//     {number: 9, title: "과일선물세트"},
//     {number: 10, title: "귤"},
// ]
// undefined
// fruits.length
// 10
// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i].number + " " + fruits[i].title)
// }
// VM1352:2 1 레드향
// VM1352:2 2 샤인머스캣
// VM1352:2 3 산청딸기
// VM1352:2 4 한라봉
// VM1352:2 5 사과
// VM1352:2 6 애플망고
// VM1352:2 7 딸기
// VM1352:2 8 천혜향
// VM1352:2 9 과일선물세트
// VM1352:2 10 귤
// undefined
// for(let i = 0; i < fruits.length; i++){
//     console.log('${fruits[i].number} ${fruits[i].title}')
// }
// 10VM1436:2 ${fruits[i].number} ${fruits[i].title}
// undefined
// for(let i = 0; i < fruits.length; i++){
//     console.log(₩${fruits[i].number} ${fruits[i].title}₩)
// }
// VM1451:2 Uncaught SyntaxError: Invalid or unexpected token
// for(let i = 0; i < fruits.length; i++){
//     console.log(`${fruits[i].number} ${fruits[i].title}`)
// }
// VM1475:2 1 레드향
// VM1475:2 2 샤인머스캣
// VM1475:2 3 산청딸기
// VM1475:2 4 한라봉
// VM1475:2 5 사과
// VM1475:2 6 애플망고
// VM1475:2 7 딸기
// VM1475:2 8 천혜향
// VM1475:2 9 과일선물세트
// VM1475:2 10 귤
// undefined
// for(let i = 0; i < fruits.length; i++){
//     console.log(`과일 차트 ${fruits[i].number}위는 ${fruits[i].title}입니다`)
// }
// VM1501:2 과일 차트 1위는 레드향입니다
// VM1501:2 과일 차트 2위는 샤인머스캣입니다
// VM1501:2 과일 차트 3위는 산청딸기입니다
// VM1501:2 과일 차트 4위는 한라봉입니다
// VM1501:2 과일 차트 5위는 사과입니다
// VM1501:2 과일 차트 6위는 애플망고입니다
// VM1501:2 과일 차트 7위는 딸기입니다
// VM1501:2 과일 차트 8위는 천혜향입니다
// VM1501:2 과일 차트 9위는 과일선물세트입니다
// VM1501:2 과일 차트 10위는 귤입니다
// undefined

Math.floor( Math.random() * 1000000 )
624217
String(Math.floor( Math.random() * 1000000 ))
'372195'
String(Math.floor( Math.random() * 1000000 ))
'411797'
String(Math.floor( Math.random() * 1000000 )).padStart(6,"0")
'620446'
String(Math.floor( Math.random() * 1000000 )).padStart(6,"0")
'917861'
String(Math.floor( Math.random() * 1000000 )).padStart(6,"0")
'021461'
let result = String(Math.floor( Math.random() * 1000000 )).padStart(6,"0")
undefined
result
'622811'