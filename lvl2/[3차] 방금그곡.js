function solution(m, musicinfos) {
    const eachInfo = musicinfos.map(x=>x.split(','))
    let musicArr = []
    let lengths = []

    for(let i  = 0; i<eachInfo.length; i++){
        let musicString = []
        for(let j = 0; j<eachInfo[i][3].length; j++){
            if(eachInfo[i][3][j+1] == '#'){
                musicString.push(`${eachInfo[i][3][j]}#`)
                j++ 
            } else{
                musicString.push(eachInfo[i][3][j])
            }
        }
        let finalMusicString = ''
        for(let j = 0; j<calcTime(eachInfo[i][0],eachInfo[i][1]); j++){

            finalMusicString += musicString[j%musicString.length]
        }

        let data = {data:calcTime(eachInfo[i][0],eachInfo[i][1]),index: i}
        lengths.push(data)
        musicArr.push(finalMusicString)
    }

    let answer = []
    for(let i = 0; i<musicArr.length; i++){
        let flag = false
        let data = {index: i, length: lengths[i].data, data: eachInfo[i][2]}
        for(let j = 0; j<musicArr[i].length; j++){
            let splitSong = musicArr[i].substring(j)
            let index = splitSong.indexOf(m)
            if(splitSong.indexOf(m)!==-1 && splitSong[index+m.length] !== '#'){
                flag = true
            }
        }
        if(flag == true){
            answer.push(data)
        }
    }
    if(answer.length == 1){
        return answer[0].data
    } else if(answer.length == 0){
        return '(None)'
    } else{
        answer.sort((a,b)=>{
            if(a.length>b.length)return -1
            if(a.length===b.length)return 0
            if(a.length<b.length)return 1
        })
        return answer[0].data
    }
}

function calcTime(a,b){
    let hrForA = `${a[0]}${a[1]}`
    let hrForB = `${b[0]}${b[1]}`
    let minForA = `${a[3]}${a[4]}`
    let minForB = `${b[3]}${b[4]}`
    let returnValue
    if(hrForA == hrForB){
        returnValue = Number(minForB - minForA)
    }
    if(hrForA !== hrForB){
        returnValue = Number(minForB - minForA) + 60 * Number(hrForB-hrForA)
    }
    return returnValue
}