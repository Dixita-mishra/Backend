let arr=[1,2,3,4];
let k=2;//window size
let sum=[];
let windowSum=0;
for(let i=0;i<k;i++){
   windowSum+=arr[i]; 
}
sum.push(windowSum);
for(let i=k;i<arr.length;i++){
    windowSum+=arr[i]-arr[i-k];
    sum.push(windowSum);
}
console.log(sum);