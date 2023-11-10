let classmate = ["철수", "영희", "훈이"]
    // undefined
classmate
    // (3) ['철수', '영희', '훈이']
classmate[0]
    // '철수'
classmate[1]
    // '영희'
classmate[2]
    // '훈이'
classmate.includes("훈이")
    // true
classmate.includes("맹구")
    // false
classmate.length
    // 3
classmate.push("맹구")
    // 4
classmate
    // (4) ['철수', '영희', '훈이', '맹구']
classmate.pop()
    // '맹구'
classmate.length
    // 3
classmate
    // (3) ['철수', '영희', '훈이']

let developer = ["실력", "욕구", "끈기", "소통", "노력"]
// undefined
developer
// (5) ['실력', '욕구', '끈기', '소통', '노력']
developer[0]
// '실력'
let dream = ["커리어점프", "성공", "할수있다"]
// undefined
dream
// (3) ['커리어점프', '성공', '할수있다']
developer.concat(dream)
// (8) ['실력', '욕구', '끈기', '소통', '노력', '커리어점프', '성공', '할수있다']
developer
// (5) ['실력', '욕구', '끈기', '소통', '노력']
let result = developer.concat(dream)
// undefined
result
// (8) ['실력', '욕구', '끈기', '소통', '노력', '커리어점프', '성공', '할수있다']