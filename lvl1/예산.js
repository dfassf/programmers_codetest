function solution(d, budget) {
    var answer = 0;
    let tmpBudget = budget
    let tmpD = d.sort((a,b)=>{
            if(a>b) return 1
            if(a<b) return -1
            if(a=b) return 0
    })
    let i =0
    while(tmpBudget-d[i]>0){
        tmpBudget -= d[i]
        i++
            answer ++
    }
    return answer;
}
