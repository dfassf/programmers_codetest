function solution(a, b) {
    let answer = 0
    let x = a
    let y = b 
    if(a>b){x = b; y = a}
    for(let i = x; i<= y; i++){
        answer += i
    }
    return answer
}