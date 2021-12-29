// 옛날거
function solution(n, m) {
    for(let i=1;i<=n;i++){
        for(let j=1;j<=m;j++){
            let answer = [];
            let n_yak = [];
            if(n%i===0){
                n_yak.push(i);
            } 
            let m_yak=[];
            if(m%j===0){
                m_yak.push(j);
            } 
            if(n[i]===m[j]){
                answer.push(n[i])
            }
            return answer;
        }
    }
}

// 지금거
function solutiont(n,m){
    let a, b
    let max = 2
    let minArr = []
    if(n>=m){a = n; b = m}
    else{a = m; b = n}
    // 최대공약수
    for(let i = 1; i<=b; i++){
        if(a%i == 0){
            max = i
        } 
    }
    // 최소공배수
    for(let i = 1; i<= b; i++){
        // a가 i에 의해 나누어지면 i 넣기

    }
    let min = 2
    let aTemp = a
    while(true){
        if(aTemp%min == 0){
            aTemp = aTemp/min
            console.log(aTemp)
            minArr.push(min)
        } else{min++;}
        if(min>=aTemp){minArr.push(aTemp); break}
    }
    if(aTemp == b){
        min = a
    } else{
        min = minArr[0]*b
    }
    return [max, min]
}

console.log(solutiont(3,12))
// solutiont(3,12)