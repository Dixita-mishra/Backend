let arr=new Array(1,2,3,4);
//sum using for loop
let total=0;
for(let i=0;i<arr.length;i++){
    total+=arr[i];
}
console.log(total);

//using reduce method
const sum=arr.reduce((total,num)=>total+num,0);
console.log(sum);