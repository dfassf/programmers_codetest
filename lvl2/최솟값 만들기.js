function solution(A,B){
    A.sort((a,b)=>a-b)
    B.sort((a,b)=>a-b)
    var answer = 0;
    for(let i = 0; i<A.length; i++){
        let num = A[i]*B[A.length-i-1]
        answer += num
    }
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    return answer;
}
