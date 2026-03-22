//task to remove falsy values
let arr=[0,1,false,2,'',3,null];
let result=arr.filter(Boolean);
//Boolean is a constructor that returns boolean equivalent of the value passed
console.log(result);
//alternative method
let alter=arr.filter(x=> !!x);
console.log(alter);