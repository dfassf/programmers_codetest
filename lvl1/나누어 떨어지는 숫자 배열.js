function solution(arr, divisor) {
    var answer = [];
    arr.map(x=>{
        if(x%divisor == 0){
            answer.push(x)
        }
    })
    if(answer.length == 0){
        answer.push(-1)
        return answer
    } else{
        return answer.sort((a,b)=>{
            if(a>b) return 1
            if(a<b) return -1
            if(a===b) return 0
        })  
    }
}