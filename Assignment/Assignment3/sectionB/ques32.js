let inp={fullname:'A',age:20};
let {fullname,...rest}=inp;
let res={name:fullname,...rest};
console.log(res);
