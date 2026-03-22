let arr=[5,12,8,20];
//using filter method
function findlen(array,condition){
    let result=array.filter(condition);
    return result.length;
}
console.log(findlen(arr,x=> x>10));

//using reduce method   
function findlen2(array,condition){
    let result=array.reduce((acc,x)=>{
        if(condition(x)){
            acc++;
        }
        return acc;
    },0);
    return result;
}
console.log(findlen2(arr,x=> x>10) );

