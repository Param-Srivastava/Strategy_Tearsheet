const express=require("express");
const app=express();
app.get("/",function(req,res){
   res.sendFile(__dirname+"/docs/tearsheet.html");
});
app.listen(3001,function(){
  console.log("Server up on port 3001");
});