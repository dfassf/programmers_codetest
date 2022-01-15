function solution(absolutes, signs) {
    // let absolutes = []
    // let signs = []

for(let i = 0; i<absolutes.length; i++){
    if(signs[i] == false){
        absolutes[i] = Number(`-${absolutes[i]}`)
    }
}
const result = absolutes.reduce(function add(sum, currValue) {
    return sum + currValue;
}, 0);
return result
}