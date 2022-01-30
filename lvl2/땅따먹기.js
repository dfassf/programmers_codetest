function solution(land) {
    let score = 0
    let currentIndex = getMaxNum(land[0],0, true)[1]
    score += getMaxNum(land[0],0, true)[0]
    for(let i = 1; i<land.length; i++){
        let addNum = getMaxNum(land[i],currentIndex, false)[0]
        score += addNum
        currentIndex = getMaxNum(land[i],currentIndex, false)[1]
    }
    return score
}

function getMaxNum(arr, idx, isFirst){
    let maxNum = arr[0]
    let index = 0
    for(let i = 1; i<arr.length; i++){
        if(arr[i]>maxNum && i !== idx && isFirst == false){
            maxNum = arr[i]
            index = i
        } else if(arr[i]>maxNum && isFirst == true){
            maxNum = arr[i]
            index = i
        }
    }
    return [maxNum, index]
}

console.log(solution([[1,2,3,5],[5,6,7,8],[4,3,2,1]]))