const obj={name:'A',password:'x'};
const newobj={...obj};
delete newobj.password;
console.log(newobj);
//destructuring+rest
const {password,...rest}=obj;
console.log(rest);
