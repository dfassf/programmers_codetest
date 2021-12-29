// 옛날거
function solution(x) {
    const string = x.toString().split('')
    let b=0;
    for(let i=0;i<string.length;i++){
        b += string[i]*1
    }
    let alm=x/b
    if(x%b==0){
        return true;
    }else{
        return false;
    }
}

// 지금거
function solution(x) {
    const xToString = x.toString().split('')
    let number = 0
    for(let i = 0; i<xToString.length; i++){
        number += Number(xToString[i])
    }
    if(x%number == 0){
        return true
    } else {return false}
}