function solution(nums) {
    var answer = []
    let cases = new Array
    for(let i = 0; i < nums.length ; i++){
        for(let j = i+1; j < nums.length ; j++){
            for(let k = j+1; k < nums.length ; k++){
                let sum = nums[i]+nums[j]+nums[k]
                if(cases.indexOf(sum) == -1){
                    cases.push(nums[i]+nums[j]+nums[k])
                    console.log(i,j,k)
                    console.log(nums[i],nums[j],nums[k])
                }
            }
        }
    }

    for(let i = 0; i < cases.length; i++){
        // 각 sum 에 대해 실행 flag은 cases[i]에 따라 변경
        let num = cases[i]
        let flag = true // 소수임
        for(let j = 2; j < num; j++){
            // 각 숫자에 대해 2부터 해당 숫자-1 까지 검증
            if(num == 2){ // 숫자 2는 소수
                flag = true
            }
            if(num !== 2 && num % j == 0){ //2는 아니지만 해당 숫자로 나누었을 때 나누어떨어짐
                flag = false
            }
        }
        console.log(num)
        if(flag == true && answer.indexOf(num) == -1){
            answer.push(num)
        }
    }
    console.log(answer)
    return answer.length;
}

solution([1,2,7,6,121])