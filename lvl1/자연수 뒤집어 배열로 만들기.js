function solution(n) {
    const arr = n.toString().split('').map(Number)
    let rra = new Array
    for(let i = 0; i<arr.length; i++){
        rra.push(arr[arr.length-i-1])
    }
    return rra
}

//인터넷답

function solutionA(n) {
    const arr = n.toString().split('').map(Number).reverse()
    return arr
}

console.log(solutionA(12345))