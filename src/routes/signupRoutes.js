const express= require("express");

// express.Router() is a class to create route handlers
const signupRouter = express.Router(); 
const Signupdata = require('../model/Signupdata')
signupRouter.use(express.static("./public"));
function router()
{
    signupRouter.get('/',function(req,res)
    {
        Signupdata.find()
        .then(function(authors){
        res.render("signup",{
        title:"Library",authors
            
                });
            });
    });

    signupRouter.post('/register',function(req,res)
    {
        var items={
      name:req.body.name,
     email: req.body.email,
     password:req.body.password,
     cpassword:req.body.cpassword,
    
        }
        var signup= Signupdata(items);
        // saving to database
        signup.save();
        res.redirect('/');
    });
   
    return signupRouter;
  }
  module.exports=router;      