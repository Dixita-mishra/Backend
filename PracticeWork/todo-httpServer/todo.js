const http=require('http');
const fs=require('fs');
const path=require('path');
const todo=path.join(__dirname,"todo.json");
const server=http.createServer((req,res)=>{
    const method=req.method;
    const url=new URL(req.url,`http://${req.headers.host}`);
    const pathname=url.pathname;
    if(method==="GET" && pathname==="/todos"){
        fs.readFile(todo,"utf-8",(err,data)=>{
            if(err){
                res.writeHead(500);
                res.end("Error in fetching data");
                return;
            }
            res.writeHead(200,{"Content-Type":"application/json"});
            res.end(data);

        })
    }
})