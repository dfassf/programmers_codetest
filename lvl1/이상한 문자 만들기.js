function solution(s) {
    let arr = new Array
    s.split(' ').map(x=>{
        let oneWord = new Array
        x.split('').map((y,k)=>{
            if(k%2 == 0){
                oneWord.push(y.toUpperCase())
            } else{ 
                oneWord.push(y.toLowerCase())
            }
        })
        arr.push(oneWord.join(""))
    })
    return arr.join(" ")
}
console.log(solution("try hello world"))