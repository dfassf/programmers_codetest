function solution(board, moves) {
    var answer = 0;
    let reBoard = []
    let stack = []
    let reMoves = moves.map(x=>x-1) 
    for(let i = 0; i< board.length; i++){
        let row = []
        for(let j = 0; j<board.length; j++){
            let element = board[j][i]
            row.push(element)
        }
        reBoard.push(row)
    }
    for(let i = 0; i<reMoves.length; i++){
        let index = reMoves[i]
        let j = 0
        while(j<reBoard[0].length){
            if(reBoard[index][j] !== 0){
                if(stack[stack.length-1] == reBoard[index][j]){
                    stack.pop()
                    reBoard[index][j] = 0
                    answer += 2
                    break
                } else{
                stack.push(reBoard[index][j])
                reBoard[index][j] = 0
                break
                }
            } else{j++ }
        }
    }

    return answer;
}

solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4])