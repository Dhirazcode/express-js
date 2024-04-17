const express=require("express");
const path=require("path")
const bodyparser=require("body-parser")
const router=require("./router.js")


const app=express();
const port=4091;
const localhost="localhost";

app.use(bodyparser.urlencoded({extended:false}))
app.use(express.json());
app.use("/api/v1",router);


app.get("/",(req,res)=>{

    res.sendFile(path.join(__dirname+"/index.html"))
//  res.json({
//     name:"dhiraj",
//     email:"sample@sample.com",
//     password:"hexed"
//  })
    
})



app.listen(port,()=>{
    console.log(`your server is working on http://localhost:${port}`)
})
// app.get("/contact",(req,res)=>{

//     res.send("<h1>welcome to contact page </h1>")
    
// })
// app.get("/about",(req,res)=>{

//     res.send("<h1>welcome to about page</h1>")
    
// })