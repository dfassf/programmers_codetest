function solution(arr) {

    const greatest = (a, b) => {  
        if (b === 0) return a   
        return greatest(b, a % b)  
    }
    const least = (a,b) => (a*b) / greatest(a,b)
    let answer = 1
    
    for(let i = 0; i<arr.length; i++){
        answer = least(answer, arr[i])
    }
    return answer
}