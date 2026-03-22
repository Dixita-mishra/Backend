let arr=new Array(1,2,3);
//reverse using loop
let i=0;
let j=arr.length-1;
while(i<j){
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
    i++;
    j--;
}
console.log(arr);

//using reduce
arr=[1,2,3];
const rev=arr.reduce((nums,num)=>{nums.unshift(num);return nums;},[]);
console.log(rev);