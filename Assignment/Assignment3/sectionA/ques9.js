let arr=[1,2,3,4];
let k=1;
const n=arr.length;
k=k%n;
let result=[];
result.push(...arr.slice(n-k));
result.push(...arr.slice(0,n-k));
console.log(result);