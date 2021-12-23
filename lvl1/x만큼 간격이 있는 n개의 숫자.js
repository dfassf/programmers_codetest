function solution(x, n) {
    var answer = [];
    var temp=x
    for(let i=0;i<n;i++){
        answer.push(x)
        x+=temp;
    }
    return answer;
}