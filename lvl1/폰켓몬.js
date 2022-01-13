function solution(nums) {
    let rep = nums.length/2
    let arr = new Array
    for(let i = 0; i<nums.length;i++){
        if(arr.length<rep && arr.indexOf(nums[i]) == -1){
            arr.push(nums[i])
        }
    }
    return arr.length
}




function ShinwoosLoveAmount(SeohyesLoveAmount){
    const iLoveYouMore = 999;
    return SeohyesLoveAmount + iLoveYouMore;
}