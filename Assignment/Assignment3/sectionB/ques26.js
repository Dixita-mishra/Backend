const input={a:{b:2}};
//deep copy using JSON.parse 
const deepCopy=JSON.parse(JSON.stringify(input));
console.log(deepCopy);


