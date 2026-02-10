const fs=require("fs");
const p=require("path");
const todoFile=p.join(__dirname,"todo.json");
console.log(todoFile);
//read file
const readTodo=function(){
const data=fs.readFileSync(todoFile,"utf-8");
return JSON.parse(data);
};
//write file
const writeTodo=function(todos){
    fs.writeFileSync(todoFile,JSON.stringify(todos));
};
//add todo
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
//list todos
function listTodo(){
const todos=readTodo();
if(todos.length==0){
    console.log("no tasks found");
    return;
}
todos.forEach((todo,index)=>{
    const status=todo.done?"✅":"❌";
    console.log(`${index+1}.${status}${todo.task}`);});
}
//mark todo as done
function markDone(id) {
const todos =readTodos();

const todo = todos.find(t => t.id === id);

if (!todo) {
console.log("❌ Todo not found");
return;
  }

  todo.done =true;
writeTodos(todos);

console.log("🎉 Todo marked as done!");
}
//delete todo
function deleteTodo(id) {
const todos =readTodo();
const filteredTodos = todos.filter(t => t.id !== id);

if (todos.length === filteredTodos.length) {
console.log("❌ Todo not found");
return;
  }

writeTodo(filteredTodos);
console.log("🗑️ Todo deleted!");
}

module.exports = {
  addTodo,
  listTodo,
  markDone,
  deleteTodo
};

addTodo("Learn Node.js fs");
addTodo("Build mini backend");
listTodo();




