const registeruser=(req,res)=>{ 
    // res.send("<h1>Working</h1>")
    const username=req.body.name;
    const useremail=req.body.email;
    const passWord=req.body.password;
    // console.log(req.body);
  
    res.json({

        success:true,
        name:username,
        email:useremail,
        password:passWord,
    });
}
module.exports=registeruser;