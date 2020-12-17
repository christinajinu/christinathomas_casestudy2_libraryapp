const express= require("express");

// express.Router() is a class to create route handlers

const authoradminRouter = express.Router(); 
const Singleauthordata = require('../model/Singleauthordata')
authoradminRouter.use(express.static("./public"));
function router()
{
    const navi=[
        {
            link:'/home',name:'Home'
        },
        {
            link:'/authors',name:'Authors'
        },
        // {
        //     link:'/books/edit',name:'update book'
        // },
        
        
        {
            link:'/',name:'Log Out'
        }
    
    
    ]; 

   
authoradminRouter.get('/',function(req,res)
{
    Singleauthordata.find()
    .then(function(authors){
    res.render("editauthors",{
        navi,title:"Authors",authors
        
            });
        });
    })


authoradminRouter.get('/delete/:id',function(req,res)
{
const id= req.params.id;
// var condition={"_id":id};
Singleauthordata.deleteOne({_id: id})
    .then(function(){
    res.redirect("/authors")
        
        
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
return authoradminRouter;
}
module.exports=router;