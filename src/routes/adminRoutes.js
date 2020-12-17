const express= require("express");

// express.Router() is a class to create route handlers

const adminRouter = express.Router(); 
const Singlebookdata = require('../model/Singlebookdata')
adminRouter.use(express.static("./public"));
function router()
{
    const navi=[
        {
            link:'/home',name:'Home'
        },
        {
            link:'/books',name:'Books'
        },
        // {
        //     link:'/books/edit',name:'update book'
        // },
        
        
        {
            link:'/',name:'Log Out'
        }
    
    
    ]; 

   
adminRouter.get('/',function(req,res)
{
    Singlebookdata.find()
    .then(function(books){
    res.render("editbooks",{
        navi,title:"Books",books
        
            });
        });
    })
    adminRouter.get('/:id',function(req,res)
    {
        
      res.render('updatebook',{
          navi,title:"Update Book"
      })
    })
    adminRouter.post('/:id/update',function (req,res)
    {
        
            var item={
          title:req.body.title,
         author: req.body.author,
          genre:req.body.genre,
          image:req.body.image
            }
            var book= Singlebookdata(item);
           
        const id=req.params.id;
        Singlebookdata.findOneAndReplace({id},(err,doc)=>{
        // .then(function(){
        //     // book.save();
        //     res.redirect("/books",{book})
        
            if(!err)
            // book.save();
            res.redirect("/books")
        })
        // .then (function(){
        //     res.redirect("/books")
         })
    

adminRouter.get('/delete/:id',function(req,res)
{
const id= req.params.id;
// var condition={"_id":id};
Singlebookdata.deleteOne({_id: id})
    .then(function(){
    res.redirect("/books")
        
        
     })
  

})

// adminRouter.get('/:id',function(req,res)
// {
//     Singlebookdata.findById(req.params.id,(err,doc)=>
//     {
//         if(!err)
//         res.render("updatebook",{title:"updatebook",navi,book:doc
            
//     })
    
        
//             });
//         });
        
//      adminRouter.post('/:id/update',function(req,res)
//  {
//     var item={
//   title:req.body.title,
//  author: req.body.author,
//   genre:req.body.genre,
//   image:req.body.image
//     };
//     Singlebookdata.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
//    if (!err) { res.redirect('/editbooks'); }

//     else
    
//     console.log('Error during record update : ' + err);
// })

//     // .then(function(books){
//     //     res.redirect("books",{books})
//     // });
// });
//     var book= Updatebookdata(item);
//     // saving to database
//     book.save();
//     res.redirect('/books');
// });




// adminRouter.get('/delete/books[i]._id',(req,res)=>{
//    Singlebookdata.deleteOne(req.params.id,function(err){
//        if(err)
//        {
//        res.redirect('/');
//        }
//        else{
//         res.redirect('/');    
//        }
//    })
// })
return adminRouter;
}
module.exports=router;