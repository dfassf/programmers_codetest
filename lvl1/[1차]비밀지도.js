function solution(n, arr1, arr2) {
    let oneArr = new Array
    let twoArr = new Array
    let threeArr = new Array
    
    arr1.map(x=>{
        let a = '0'.repeat(n-x.toString(2).length)+x.toString(2)
        oneArr.push(a)
    })
    arr2.map(x=>{
            let a = '0'.repeat(n-x.toString(2).length)+x.toString(2)
            twoArr.push(a)
    })
    for(let i = 0; i<n; i++){
        let num = ''
        for(let j = 0; j<n; j++){
            if(oneArr[i][j] == '1' || twoArr[i][j] == '1'){
                num = `${num}#`
            } else if(oneArr[i][j] == '0' && twoArr[i][j] == '0'){ num = `${num} `}
        }
        threeArr.push(num)
    }
    console.log(threeArr)
    return threeArr
}

solution(5,	[9, 20, 28, 18, 11],[30, 1, 21, 17, 28])