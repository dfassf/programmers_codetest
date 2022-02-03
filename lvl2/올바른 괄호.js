function solution(s){
    let arr = s.split('')
    let leftCnt = 0 // (
    let rightCnt = 0 // )
    if(arr[0]==')'){console.log('nope');return false}
    else{
        leftCnt ++
        for(let i =1; i<arr.length; i++){
            // arr[0]이 (
                if(arr[i]=='('){leftCnt ++}
                if(arr[i]==')'){rightCnt ++}
        }
    }
    if(leftCnt== rightCnt){return true}
    else{return false}
}

solution("(()(")