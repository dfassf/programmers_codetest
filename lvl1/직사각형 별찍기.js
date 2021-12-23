process.stdin.setEncoding('utf8')
process.stdin.on('data',data=>{
    const n = data.split(' ');
    n.map(v=>{return Number(v)})
    const[a,b]=n;
    
    let tmp="";
    for(let i=0;i<a;i++){
        tmp +="*"
    }
    for(let j=0;j<b;j++){
        console.log(tmp)
    }
})