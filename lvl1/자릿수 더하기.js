
function solution(n)
{
    const arr = n.toString().split('').map(Number)
    const answer =  arr.reduce((x,y)=>x+y)
    return answer
}

console.log(solution(123))