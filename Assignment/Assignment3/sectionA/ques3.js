const arr=new Array(5,1,9,3);
//maximum value using loop
let max_loop=-Infinity;
for(let i=0;i<arr.length;i++){
    if(arr[i]>max_loop)max_loop=arr[i];
}
console.log(max_loop);
//maximum using reduce
const max_reduce=arr.reduce((max,num)=>max>num?max:num,-Infinity);
console.log(max_reduce);