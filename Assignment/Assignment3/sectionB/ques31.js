let inp={name:'A',address:{city:'old',zip:123}};
let res={...inp,address:{...inp.address,city:'new'}};
console.log(res);