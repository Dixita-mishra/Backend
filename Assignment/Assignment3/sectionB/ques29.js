let inp={id:1,name:'A',email:'a@x'};
let keys=['id','email'];
let res=keys.reduce((acc,key)=>{
    acc[key]=inp[key];
    return acc;
},{});
console.log(res);

