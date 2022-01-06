function solution(s){
    let p = 0
    let y = 0
    let input = s.split('').map(x=>x.toLowerCase())
    for(let i = 0; i<input.length; i++){
        if(input[i] == 'p'){p++}
        if(input[i] == 'y'){y++}
    }
    if(p === y){return true} else{return false}
}