function solution(n) {
    if(n == 0){ return 0}
    let arr = new Array
    for(let i = 1; i<=n; i++){
        if(n%i == 0){
            arr.push(i)
        }
    }
    return arr.reduce((x,y)=>x+y)
}