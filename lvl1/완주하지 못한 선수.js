// function solution(participant, completion) {
//     var answer = '';
//     for(let i = 0; i<completion.length; i++){
//         console.log(participant.indexOf(completion[i]))
//         let indicator = participant.indexOf(completion[i])
//         participant.splice(indicator,1)
//     }
//     return answer;
// }
//  시간초과 뜸

function solution(participant, completion) {
    var answer = '';
    participant.sort()
    completion.sort()
    let i = 0;
    while(i<participant.length){
        if(participant[i] !== completion[i]){
            answer = participant[i]
            break
        } else{
            i++
        }
    }

    console.log(answer)
    return answer;
}

solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])