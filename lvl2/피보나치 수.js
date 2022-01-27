function solution(n) {
    let arr = [0,1]
    for(let i = 0; i<n; i++){
        let num = arr[i]%1234567+arr[i+1]%1234567
        arr.push(num)
    }
    return arr[n]%1234567
}

// 자료형에 주의(A+B)/C = A/C + B/C