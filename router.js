const express=require("express");

const router=express.Router();
const registeruser=require("./contoller.js");
router.route("/homepage").post(registeruser)
.get((req,res)=>{ 
    res.send("<h1>Working</h1>")
    
    });


module.exports=router;