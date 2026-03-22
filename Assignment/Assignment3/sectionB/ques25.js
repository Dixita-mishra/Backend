let obj={a:1,b:2};
//changing key to value and value to key
let res=Object.entries(obj).reduce((acc,[key,value])=>{
    acc[value]=key;
    return acc;
},{});
console.log(res);
//This code uses Object.entries() to get an array of key-value pairs from the original object, then uses reduce() to create a new object where the keys and values are swapped. The initial value for the accumulator is an empty object {}.