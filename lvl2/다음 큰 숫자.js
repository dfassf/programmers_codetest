function solution(n){
    let k = n+1
    while(true){
        twoN = n.toString(2)
        twoK = k.toString(2)
        let numOfN = twoN.split('').filter(x=>x=='1').length
        let numOfK = twoK.split('').filter(x=>x=='1').length
    
        if(numOfN==numOfK){
            break
        } else{ k++}
    }
    return k
}

console.log(solution(15))