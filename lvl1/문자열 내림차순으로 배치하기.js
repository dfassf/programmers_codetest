function solution(s) {
    return s.split('').sort((x,y)=>{
         if(x < y) return 1;
         if(x > y) return -1;
         if(x === y) return 0;
     }).join('')
 }