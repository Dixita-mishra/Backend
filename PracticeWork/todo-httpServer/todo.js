const http=require('http');
const fs=require('fs');
const path=require('path');
const todo=path.join(__dirname,"todo.json");
const server=http.createServer((req,res)=>{
    const method=req.method;
    const url=new URL(req.url,`http://${req.headers.host}`);
    const pathname=url.pathname;
    if(method==="GET" && pathname==="/todos"){
        fs.readFile(path,"utf-8",(err,data)=>{
            if(err){
                res.writeHead(500);
                res.end("Error in fetching data");
                return;
            }
            res.writeHead(200,{"Content-Type":"application/json"});
            res.end(data);

        })
    }
    else if(method==="POST" && pathname==="/todos"){
        let body="";
        req.on("data",(chunk)=>{
            body+=chunk;
        });
        req.on("end",()=>{
            const parsed=JSON.parse(body);
            fs.readFile(path,"utf-8",(err,data)=>{
                if(err){
                    res.writeHead(500);
                    res.end("error in fetching data");
                    return;
                }
                const note=JSON.parse(data);
                const id=note.length?note[note.length-1].id+1:1;
                const newtodo={id:id,title:parsed.title,completed:false};
                note.push(newtodo);
                fs.writeFile(path,JSON.stringify(note),(err)=>{
                    if(err){
                        res.end("error in writing data");
                        return;
                    }
                    res.writeHead(201);
                    res.end("notes successfully written");
                })
                

            })
        })
    }
})