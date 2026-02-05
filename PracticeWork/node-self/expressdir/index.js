const express=require('express');
const app=express();
let port =3000;

app.listen(port,()=>{
    console.log("server is listening");
});
// app.use((req,res)=>{
//     console.log("request entered");});
app.get('/',(req,res)=>{
    res.send("hello from express, I am root page (/:))");
});
app.get('/about',(req,res)=>{
    res.send("hello from about us page");
});   
// app.get("*",(req,res)=>{
//     res.send("404 page not found");
// });