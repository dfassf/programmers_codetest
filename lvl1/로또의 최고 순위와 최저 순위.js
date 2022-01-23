function solution(lottos, win_nums) {
    let sortLottos = sort(lottos)
    let sortWinNums = sort(win_nums)

    let cnt = 0
    let zeroCnt = 0
    let minNum
    let maxNum

    for(let i = 0; i<sortLottos.length; i++){
        for(let j = 0; j<sortLottos.length; j++){
            if(sortLottos[i] == sortWinNums[j]){
                cnt++
            }
        }
        if(sortLottos[i] == 0){
            zeroCnt++
        }
    }

    cnt<2 ? minNum = 6 : minNum = 7-cnt
    cnt+zeroCnt<2 ? maxNum = 6 : maxNum = 7-cnt-zeroCnt
    return [minNum, maxNum]

}

function sort(input){
    let output = input.sort((x,y)=>{
        if(x < y) return -1
        if(x > y) return 1
        if(x === y) return 0
    })
    return output
}

solution([45, 4, 35, 20, 3, 9],[20, 9, 3, 45, 4, 35])