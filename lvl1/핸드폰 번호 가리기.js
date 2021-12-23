function solution(phone_number) {
    let pl=phone_number.length;
    let mask_num=phone_number.length-4
    let mask='';
    for(let i=0;i<pl-4;i++){
        mask += '*';
    }


    var answer = mask+phone_number.toString().substring(pl-4,pl)
    return answer;
}