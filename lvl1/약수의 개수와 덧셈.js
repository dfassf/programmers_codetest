function solution(left, right) {
    let arr = new Array
    for(let i = left; i<=right; i++){
        let num = 0
        for(let j = 1; j<= i; j++){
            if(i%j == 0){
                num ++
            }
        }
        arr.push({num,i})
    }
    let newArr = arr.map(x=>
        x.num%2 == 0 ? x.i = x.i : x.i = -x.i
    )
    return newArr.reduce((x,y)=>x+y)
}