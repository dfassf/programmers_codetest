function solution(a, b) {
    let date = new Date(`2016-${a}-${b}`).toDateString()
    answer = date.substr(0,3)  
    return answer.toLocaleUpperCase()
}
