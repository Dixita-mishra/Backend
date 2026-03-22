let arr=[1,[2,3],4];
//flatten using loop
let result=[];
for(const num of arr){
    if(Array.isArray(num)){
        result.push(...num);
    }
    else result.push(num);
}
console.log(result);
//using reduce
result=arr.reduce((res,num)=>{
    if(Array.isArray(num))res.push(...num);
    else res.push(num);
    return res;
},[]);
console.log(result);