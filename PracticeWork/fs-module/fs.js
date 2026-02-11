const fs=require('fs');
//reading a file
fs.readFile('file.txt','UTF-8',(err,data)=>{
    if(err) console.log(err.message);
    else console.log(data);
});
//write file
fs.writeFile('file.txt','hello world','UTF-8',(err)=>{
    if(err)console.log(err.message);
});