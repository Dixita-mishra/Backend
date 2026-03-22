let obj={name:"Aman",age:22};
//using for in loop
for(let key in obj){
    console.log(`${key} ${obj[key]}`);
}
//using Object.keys() method
Object.keys(obj).forEach(key=>{
    console.log(`${key} ${obj[key]}`);
});
//Object.keys() method returns an array of keys of the object, so we can use forEach to iterate over the keys and access the values using obj[key].
