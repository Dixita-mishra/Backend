const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    const method=req.method;
    const url=req.url;
    const user={
        name:"Dixita",
        age:"24",
        course:"Btech"
    };
    if(method=='GET' && url==='/users'){
        res.writeHead(200,{'content-Type':'application/json'});
        res.end(JSON.stringify(user));
    }
    if(method=='POST' && url==='/data'){
        let body='';
        req.on('data',(chunk)=>{
            body+=chunk;
        })
        req.on('end',()=>{
            fs.writeFile('./file.txt',body,'utf-8',()=>{
                res.writeHead(200,"data saved successfully");
                res.end();
            })
           
        })
    }

})
server.listen(3000,()=>{
    console.log("Server is listening");
})