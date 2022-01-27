function solution(s) {
    var answer = '';
    let splitS = s.split(' ').map(Number)
    splitS.sort((a,b)=>a-b)
    answer = `${splitS[0]} ${splitS[splitS.length-1]}`
    return answer;
}