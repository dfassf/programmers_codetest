function solution(n) {
    var answer = 1;
    for(let i = 1; i<=n; i++){
        if(n%answer == 1){
               return answer; 
        }else{answer++}
    }
}