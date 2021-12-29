// 예전 풀이
function solution(num){
    let answer = 0;
    for(let i=0;i<500;i++){
        if(num!==1){
            if(num%2===0){
                num = num/2;
            } else{
                num = num*3+1;
            }
        } else{
            return answer = i;
        }

    }
        return answer = -1;
}
// 지금 풀이
function solution(num) {
    let cnt = 0;
    while(num !== 1){
        if(num%2 == 0){
            num = num / 2
            cnt++
        } else {
            num = num * 3 + 1
            cnt++
        }        
    }
    if(cnt<500){
        return cnt
    } else{
        return -1        
    }

}