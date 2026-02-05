const fs=require("fs");
const p=require("path");
const todoFile=p.join(__dirname,"todo.json");
console.log(todoFile);
const readTodo=function(){
const data=fs.readFileSync(todoFile,"utf-8");
return JSON.parse(data);
};
const writeTodo=function(todos){
    fs.writeFileSync(todoFile,JSON.stringify(todos));
};

function addTodo(task){
    const todos=readTodo();
    const newTodo={
        id:Date.now(),
        task:task,
        done:false
    };
    todos.push(newTodo);
    writeTodo(todos);
    console.log("Todo added: ",task);
}
function listTodo(){
const todos=readTodo();
if(todos.length==0){
    console.log("no tasks found");
    return;
}
todos.forEach((todo,index))=>{
    const status=todo.done?"✅":"❌";
    console.log(`${index+1}.${status}${todo.task}`);}
};

