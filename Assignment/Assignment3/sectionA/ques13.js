let arr1=[1,2];
let arr2=[3,4];
//using loop
let result=[];
for(const num of arr1){
    result.push(num);
}
for(const num of arr2){
    result.push(num);
}
console.log(result);
//using spread
let ans=[];
ans.push(...arr1,...arr2);
console.log(ans);

//both the methods have complexity of O(N),for large values spread will be faster for modern engines but it comsumes slightly more internal memory