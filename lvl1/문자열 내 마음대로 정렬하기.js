function solution(strings, n) {
    let answer = strings.sort((x, y) => {
       if(x[n] > y[n]) return 1;
        if(x[n] < y[n]) return -1;
        if(x[n] === y[n]){
            if(x>y) return 1;
            if(x<y) return -1;
            return 0;
        }
    });
    
    return answer;
}