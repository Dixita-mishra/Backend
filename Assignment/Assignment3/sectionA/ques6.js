let arr=new Array(1,2,2,3,1);
//using loop
let answer=[];
for(const num of arr){
    if(answer.includes(num))continue;
    answer.push(num);
}
console.log(answer);
//using map
let seen={};
answer=[];
for(const num of arr){
    if(seen[num])continue;
    seen[num]=true;
    answer.push(num);
}
console.log(answer);