const arr=new Array(7,3,9,0);
const min=arr.reduce((min,num)=>min<num?min:num,Infinity);
console.log(min);