function solution(board)
{
    // 1이 연속해서 있는 길이
    // 각 행에 대해 시행
    let arr = []
    for(let i = 0; i < board.length; i++){
        let lengthArr = []
        let lengthObj = {start: 0, end: 0}
        let cnt = 0
        for(let j = 0; j<board[i].length; j++){
            if(board[i][j] == 0 && cnt == 0){
                cnt = 0
            } else if(board[i][j] == 0 && cnt !== 0){
                
            } else{ cnt ++}
        }
        arr.push(cnt)
    }
    console.log(arr)
}

// let input = [[0,1,1,1],[1,1,1,1],[1,1,1,1],[0,0,1,0]]
let input = [[0,0,1,1],[1,1,1,1]]
solution(input)