let arr=[1,2,3];
let i=1;
//using filter method
let result=arr.filter(x=> arr.indexOf(x)!==i);
console.log(result);

//using spread+slice method
let result2=[...arr.slice(0,i),...arr.slice(i+1)];
console.log(result2);   