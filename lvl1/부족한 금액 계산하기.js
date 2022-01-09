function solution(price, money, count) {
    let spent = 0
    for(let i = 1; i<=count; i++){
        spent += price * i
    }
    if(money - spent > 0){return 0} else{return spent - money}
}