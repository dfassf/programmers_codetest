function solution(sizes){
    let garo = sizes[0][0]
    let sero = sizes[0][1]
    for(let i = 0; i<sizes.length-1; i++){
        if(sizes[i][0]<sizes[i+1][0]){
            garo = sizes[i+1][0]
        }
        if(sizes[i][1]<sizes[i+1][1]){
            sero = sizes[i+1][1]
        }
    }
    return garo*sero
}

console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]))