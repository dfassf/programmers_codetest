let n = 5
let info = [2,1,1,1,0,0,0,0,0,0,0]
let score = 0
// 10x2, 9x1, 8x1, 7x1

// 
let apeach = {0:false,1:false,2:false,3:false,4:false,5:false,6:false,7:false,8:false,9:false, 10:false}
let ryan = {0:false,1:false,2:false,3:false,4:false,5:false,6:false,7:false,8:false,9:false, 10:false}
info.map((x,k)=>{if(info[k]!==0){apeach[10-k]=true}})
// 어피치 점수
for(let i = 0; i<info.length; i++){
    let key = Object.keys(apeach)
    if(apeach[i] == true){
        score += Number(key[i])
    }
}

// 라이언 점수
for(let i = 0; i<n; i++){
    let point = 10-i
    ryan[point] = true
    if(score>=0){
        score -= point
    }
}
if(score>=0){
    console.log(ryan)
    console.log(-1)
} else{
    console.log(ryan)
}
console.log(score)

// 답
function solution(n, info) {
    let maxDiff = 0;
    let ryonInfo = Array(11).fill(0);
    
    const shot = (peachScore, ryonScore, count, idx, board) => {
      if(n < count) return
      if(idx > 10){
        let diff = ryonScore - peachScore;
        if(diff > maxDiff){
          board[10] = n - count;
          maxDiff = diff
          ryonInfo = board;
        }
        return;
      }
      if(n > count) {
        let board2 = [...board];
        board2[10 - idx] = info[10 - idx] + 1;
        shot(peachScore, ryonScore + idx, count + info[10 - idx] + 1, idx + 1, board2);
      }
      
      if(info[10 - idx] > 0){
        shot(peachScore + idx, ryonScore, count, idx + 1, board)
      } else {
        shot(peachScore, ryonScore, count, idx + 1, board)
      }
    }
    shot(0, 0, 0, 0, ryonInfo)
    
    if(maxDiff <= 0) return [-1];
    else return ryonInfo;
  }