function solution(s){
    let arr = s.split('')
    let cnt = 0 
    if(arr[0]==')'){console.log('nope');return false}
    else{
        cnt ++
        for(let i =1; i<arr.length; i++){
            // arr[0]이 (
                if(arr[i]=='('){cnt ++}
                else if(arr[i]==')' && cnt>=0){cnt --}
        }
    }
    if(cnt == 0){console.log('트루');return true}
    else{console.log('폴스');return false}
}

solution("()))((()")