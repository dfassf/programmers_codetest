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
        let first = sortRecords.pop()
        console.log(first.substr(6,5),sortRecords[i].substr(6,5))
        if(first.substr(6,5)==sortRecords[i].substr(6,5)){
            arr.push(sortRecords[i])
            sortRecords.splice(1,i)
        }
        console.log(arr)
        break
    }

}

solution([180, 5000, 10, 600],[
    "05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", 
    "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", 
    "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"])