const obj={name:"Aman"};
const newobj={...obj,role:'admin'};
console.log(newobj);
//The spread operator allows us to create a new object by copying the properties of an existing object and adding new properties to it. 
//In this case, we create a new object newobj that contains all the properties of obj and adds a new property role with the value 'admin'.