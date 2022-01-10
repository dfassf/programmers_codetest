function solution(n) {
    let convertedN = n.toString(3)
    let tmpReversedN = convertedN.split('').reverse().join('')
    let len = convertedN.length-tmpReversedN.length
    console.log(len)
    let reversedN = '0'.repeat(len)+tmpReversedN
    return parseInt(reversedN,3)
}

solution(125)