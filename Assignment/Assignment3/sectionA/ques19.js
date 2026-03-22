 const arr=new Array(3,1,2,3,2);
 const result=arr.reduce((acc,x)=>{
    if(!acc.includes(x)){
        acc.push(x);
    }
    return acc;
 },[]);
console.log(result.sort());