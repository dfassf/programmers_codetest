function solution(n, t, m, p) {
    // p+m*t순서대로
    let string = ''
    for(let i = 0; i<=p+m*t; i++){
        string += i.toString(n).toUpperCase()
    }
    let splitString = string.split('')
    let answer = ''
    answer += splitString[p-1]
    for(let i = 1; i<t; i++){
        answer += splitString[p-1+m*i]
    }
    return answer
}