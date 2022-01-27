function solution(n, k) {
    let convertedNumber = n.toString(k).split('0').map(Number)
    let z = convertedNumber.filter(x=> x>0 && isPrime(x))

    return z.length
}
function isPrime(num) {
    if(num === 1) {
        return false
    }
    if(num === 2) {
      return true
    }
    for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
      if(num % i === 0){
        return false
      }
    }
    return true
  }