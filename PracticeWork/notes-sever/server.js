const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
   const method=req.method;
   const url=new URL(req.url,`http://${req.headers.host}`);
   const pathname=url.pathname;
   if(req.method==="GET" && pathname==="/notes"){
    fs.readFile("notes.json","utf8",(err,data)=>{
        if(err){
            Console.log(err);
            errors.end("error");
        }
        res.writeHead(200,{"Content-Type":"application/json"});
        res.end(data);

    });
   }
   else if(req.method==="POST" && pathname==="/notes"){
    let body="";
    req.on("data",(chunk)=>{
        body+=chunk;
    });
    req.on("end",()=>{
        const newNote=JSON.parse(body);
        fs.readFile("notes.json","utf8",(err,data)=>{
            const notes=JSON.parse(data);
            notes.push(newNote);
            fs.writeFile("notes.json",JSON.stringify(notes),()=>{
                res.writeHead(201,{"Content-Type":"application/json"});
                res.end("notes added");
                 });
        });
    });
   }
    
});
server.listen(3000,()=>{
    console.log("Server is listening on port 3000");
})