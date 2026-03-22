let a1=[1,2];
let b1=[10,20,30];
let minlen=Math.min(a1.length,b1.length);
let result=[];
for(let i=0;i<minlen;i++){
    result.push(a1[i],b1[i]);
}
if(a1.length>minlen)result.push(...a1.slice(minlen));
if(b1.length>minlen)result.push(...b1.slice(minlen));
console.log(result);