function solution(n) {
    let skrrt = Math.sqrt(n)
    let skrrt2 = Math.floor(skrrt)
    
    if(skrrt == skrrt2){return (skrrt+1)**2} else{return -1}
}