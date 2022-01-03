function solution(s) {
    let arr = new Array
    let inputBySpace = s.split(' ')
    inputBySpace.map(x=>{
        let oneWord = new Array
        let eachLetter = x.split('').map((y,k)=>{
            if(k%2 == 0){
                oneWord.push(y.toUpperCase())
            } else{ 
                oneWord.push(y.toLowerCase())
            }
        })
        arr.push(oneWord.join(""))
    })
    console.log(arr)
    return arr.join(" ")
}
solution("try hello world")
console.log(solution("try hello world"))