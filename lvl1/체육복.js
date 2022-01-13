function solution(n, lost, reserve) {
    const arr = new Array
    for(let i = 0; i < n; i++){
        let data = {"idx":i+1, "yn": 1}      
        arr.push(data)
        for(let j = 0; j < lost.length; j++){
            if(arr[i].idx == lost[j]){
                arr[lost[j]-1].yn -= 1
            }
        }
        for(let k = 0; k < reserve.length; k++){
            if(arr[i].idx == reserve[k]){
                arr[reserve[k]-1].yn += 1
            }
        }
    }

    for(let i = 0; i < n; i++){
        if(arr[i-1] !== undefined){
            if(arr[i-1].yn == 0 && arr[i].yn == 2){
                arr[i-1].yn += 1 
                arr[i].yn -= 1
            }
        }
        if(arr[i+1] !== undefined){
            if(arr[i+1].yn == 0 && arr[i].yn == 2){
                arr[i+1].yn += 1 
                arr[i].yn -= 1
            }
        }
    }

    console.log(arr.filter(x=>x.yn !== 0).length)
}

solution(5, [2,5,6], [2, 4, 6])