function solution(numbers) {
    let arr = new Array
    for(let i = 0; i<numbers.length-1; i++){
        for(let j = i+1; j<numbers.length; j++){
            arr.push(numbers[i]+numbers[j])
            
        }

    }
    arr.sort((a,b)=>{
        if(a>b) return 1
        if(a<b) return -1
        if(a=b) return 0
    })
    let set = new Set(arr)
    return [...set]
}