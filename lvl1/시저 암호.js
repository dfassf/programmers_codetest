function solution(s, n) {
    let arr = s.split('').map(x=>x.charCodeAt(0))
    let newArr = arr.map(x=>sort(x,n))
    console.log(newArr)
    return newArr.map(x=>String.fromCharCode(x)).join('')
}

function sort(x,n){
    if(x < 91 && x > 64){
        // 65~90
        let diff = x + n - 90
        if(diff>0){return 64 + diff} else {return x + n }
    } else if(x < 123 && x > 96){
        // 97~122
        let diff = x + n - 122
        if(diff>0){return 96 + diff} else { return x + n }
    } else {
        return 32
    }
}