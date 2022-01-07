function solution(s) {
	let arr = new Array(s+1).fill(true).fill(false,0,2)
	for(let i = 2; i*i <= s; i++){
			 for(let j = i*i; j <= s; j+= i ){
				arr[j] = false
			 }
	}
	return arr.filter(x => x).length
}