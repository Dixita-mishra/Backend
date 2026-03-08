const fs=require('fs');
const path=require('path');

const todo=path.join(__dirname,"todo.json");
//read todos
function readtodo(){
    const data=fs.readFileSync(todo,"utf-8");
    return JSON.parse(data);
}
//write todo
function writetodo(todos){
fs.writeFileSync(todo,JSON.stringify(todos));
}
function addtodo(task){
    const todos=readtodo();
    const newtodo={
        id:Date.now(),
        task: task,
        done:false
    };
    todos.push(newtodo);
    writetodo(todos);
}
//list todo
function listtodo(){
    const todos=readtodo();
    if(todos.length===0){
        console.log("no tasks found");
    }
    todos.forEach((todo,index)=>{
        const status=todo.done?"done":"pending";
        console.log(`${index+1}.${status} ${todo.task}`);
    });
}
//mark todo done
function marktodo(id){
    const todos=readtodo();
    const todo=todos.find(t=>t.id==id);
    if(!todo){
        console.log("todo not found");
        return;
    }
    todo.done=true;
    writetodo(todos);
}
//delete todo
function deletetodo(id){
const todos=readtodo();
const filtered=todos.filter(t=>t.id!=id);
writetodo(filtered);
}
