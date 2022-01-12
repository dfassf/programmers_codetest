function solution(answers) {
    let arr = []
    let one = first(answers.length)
    let two = second(answers.length)
    let three = third(answers.length)
    let a = one.filter((x,k)=>x == answers[k])
    let b = two.filter((x,k)=>x == answers[k])
    let c = three.filter((x,k)=>x == answers[k])
    let max = Math.max(a.length, b.length, c.length)
    if(a.length == max){arr.push(1)}
    if(b.length == max){arr.push(2)}
    if(c.length == max){arr.push(3)}
    return arr.sort()
}

console.log(solution([0, 0, 0, 0, 0, 0, 2]))

function first(n){
    let arr = []
    let i = 1
    while(arr.length<n){
        if(i == 6){i = 1}
        arr.push(i)
        i++
    }
    return arr
}

function second(n){
    let arr = []
    let num = [1,3,4]
    let i = 0
    let k = 0
    while(arr.length<n){
        if(i%2 == 0){
            arr.push(2)
        } else{
            if(k ==3){k=1}
            arr.push(num[k])
            k++
        }
        i++
    }
    return arr
}

function third(n){
    let arr = []
    let num = [3,1,2,4,5]
    let i = 0
    while(arr.length<n){
        if(i == 5){i = 0}
        arr.push(num[i])
        arr.push(num[i])
        i++
    }
    return arr
}


