const fs=require("fs");
// const data = fs.readFileSync("file.txt","utf-8");
// console.log(data);
// fs.readFile("file.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log(err.message);
//     }
//     else{
//         console.log(data);
//     }
// })
// fs.writeFile("file.txt","kuchh aur",{flag: "r+"},(err)=>{
//     if(err){
//         console.log(err.message);
//     }
// });
fs.writeFile("file.txt","ayush bhadwa",{flag: "w+"},(err)=>{
    if(err){
        console.log(err.message);
    }
});

