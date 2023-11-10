const children = ["철수", "영희", "훈이"]
undefined
for(let i = 0; i < 3; i++){
    console.log(children[i] + "입니다")
}
// VM352:2 철수입니다
// VM352:2 영희입니다
// VM352:2 훈이입니다
undefined
let person = [
    {name: "철수", age: 17},
    {name: "영희", age: 22},
    {name: "도우너", age: 5},
    {name: "그루트", age: 65},
    {name: "도비", age: 3}

]
undefined
for(let count = 0; count < person.length; count++) {

    if(person[count].age >= 19){
        console.log("성인입니다")
    }else{
        console.log("미성년자입니다")
    }
}
// VM759:6 미성년자입니다
// VM759:4 성인입니다
// VM759:6 미성년자입니다
// VM759:4 성인입니다
// VM759:6 미성년자입니다
undefined
for(let count = 0; count < person.length; count++) {

    if(person[count].age >= 19){
        console.log(person[count].name + "님은 성인입니다.")
    }else{
        console.log(person[count].name + "님은 미성년자입니다.")
    }
}
// VM980:6 철수님은 미성년자입니다.
// VM980:4 영희님은 성인입니다.
// VM980:6 도우너님은 미성년자입니다.
// VM980:4 그루트님은 성인입니다.
// VM980:6 도비님은 미성년자입니다.
undefined