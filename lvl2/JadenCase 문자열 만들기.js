function solution(s) {

    let words = s.split(' ')
    let sentence = []
    for(let i = 0; i<words.length; i++){
        //각 문장을 쪼개야 함
        let letters = words[i].split('')
        for(let j = 0; j<letters.length; j++){
            // console.log(words[i]) // 각 단어
            // 각 단어를 쪼개야 함
            let tempFirstLetter = letters[0]
            let tempLetter = letters[j]
            letters[j] = tempLetter.toLowerCase()
            // // 첫자가 숫자가 아니면 대문자로
            if(isNaN(letters[0])!==false){
                letters[0] = tempFirstLetter.toUpperCase()
            }
        }
        let newWord = letters.join('')
        sentence.push(newWord)
    }
    return sentence.join(' ')

}

solution("3people unFollowed me")