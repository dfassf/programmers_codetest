function solution(array, commands) {
    let answer = []
    commands.forEach(([x,y,z])=>{
        let newArr = [...array]
        let arr = newArr.slice(x-1,y).sort((a,b)=>{
            if(a>b) return 1
            if(a<b) return -1
            if(a===b) return 0
        })

        answer.push(arr[z-1])
    })
    return answer
}