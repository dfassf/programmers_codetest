function solution(land) {
    let score = 0
    let currentIndex = getMaxNum(land[0],-1)[1]
    for(let i = 0; i<land.length; i++){
        score += getMaxNum(land[i],currentIndex)[0]
    }
    return score
}

function getMaxNum(arr, idx){
    let maxNum = arr[0]
    let index = 0
    for(let i = 1; i<arr.length; i++){
        if(arr[i]>maxNum && i !== idx){
            maxNum = arr[i]
            index = i
        }
    }
    return [maxNum, index]
}

// console.log(solution([[1,2,3,5],[5,6,7,8],[4,3,2,1]]))