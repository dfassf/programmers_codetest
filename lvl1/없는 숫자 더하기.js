function solution(numbers) {
    let array = [0,1,2,3,4,5,6,7,8,9]
    let filtered = array.filter(x=>!numbers.includes(x))
    return filtered.reduce((a,b)=>a+b)
}