let obj1={x:1};
let obj2={y:2};
let res={...obj1,...obj2};
console.log(res);
//this is shallow merge, so nested objects are cloned instead of merged.
//  If there are nested objects, the reference to the nested object will be copied, not the actual nested object itself.
//  So if you modify the nested object in one of the original objects, it will affect the merged object as well.