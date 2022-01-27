function solution(n){
    let cnt = 0
    let check = (input1, input2) => {
        let checkNum = input1
        let k = input2
        let number = 0
        let ganung = false
        while(number+k<=checkNum){
            if(k == checkNum){
                return true
            }
            number += k
            k++
            if(number+k==checkNum){
                number += k
                k++
                ganung = true
                return true
            } else if(number+k>checkNum){
                return false
            }
        }
    }
    for(let i = 1; i<=n; i++){
        console.log(check(n,i),i)
        if(check(n,i)==true){cnt++}
    }
    console.log(cnt)
}


solution(15)
// console.log(solution(15))


/*

function solution(n) {
    let cnt = 0
    for(let i = 1; i<=n; i++){
        if(figureNumber(n,i)==true){cnt++}
    }
    if (cnt == 0){cnt++}
    return cnt
}

function figureNumber(number1, number2){
    let num1 = number1 // 기본숫자
    let num2 = number2 // k역할
    while(num1!==num2){
        if(num1!==num2 && num1-num2<0){return false; break}
        num1 -= num2
        num2++
        if(num1==num2){
            return true
        } 
    }
}

*/