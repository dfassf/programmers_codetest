function solution(fees, records) {
    const repeat = records.length
    let sortRecords = records.sort((a,b)=>{
        if(a.substr(6,5)>b.substr(6,5)) return 1
        if(a.substr(6,5)<b.substr(6,5)) return -1
        if(a.substr(6,5)===b.substr(6,5)) return 0
    })
    let bigArr = new Array
    let i = 0
    let arr = new Array

    while(true){
        let id = sortRecords[0].split('').splice(6,4).join('')
        let hour = Number(sortRecords[0].split('').splice(0,2).join(''))
        let min
        Number(sortRecords[0].split('').splice(3,2).join(''))==0 
        ? min = 60 
        : min = Number(sortRecords[0].split('').splice(3,2).join(''))
        let status = sortRecords[0].split('').splice(-1)
        let data = {id, hour, min, status}
        if(bigArr.length==0){
            arr.push(data)
            sortRecords.shift()
        }
        if(sortRecords.length>1){
            if(arr[0].id==sortRecords[0].substr(6,5)){
                arr.push(data)
                sortRecords.splice(0,1)
            } else{
                bigArr.push(arr)
                arr = []
                arr.push(data)
            }
            console.log('z')
        } else{
            arr.push(data)
            bigArr.push(arr)
            break
        }
    }
    // console.log(bigArr)

    // for(let i = 0; i<bigArr.length; i++){
    //     // 각 차번호에 대한 계산이 들어감
    //     let time = new Array
    //     for(let j = 0; j<bigArr[i].length; j++){
    //         let hour = 
    //         let min 

    //         time.push({hour, min})
            
    //     }
    //     console.log(time)
    // }
}

solution([180, 5000, 10, 600],[
    "05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", 
    "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", 
    "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"])