let obj={a:1,b:2};
console.log(Object.keys(obj).length);

//if we used for..in loop
let count=0;
for(let key in obj){
count++;
}
console.log(count);