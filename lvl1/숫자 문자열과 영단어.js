function solution(s) {
    let alphabet = ["zero","one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    let num = [0,1,2,3,4,5,6,7,8,9]
    while(isNaN(s)){
        for(let i = 0; i<alphabet.length;i++){
            s = s.replace(alphabet[i],num[i])
        }
    }
    var answer = Number(s);
    console.log(answer)
    return answer;
}