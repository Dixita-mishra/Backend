let input=[1,2,3,4,5];
let n=2;
//using loop
let result=[];
for(let i=0;i<input.length;i+=n){
    let mini=input.slice(i,i+n);
    result.push(mini);
}
console.log(result);
