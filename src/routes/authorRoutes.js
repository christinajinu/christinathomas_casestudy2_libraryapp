const express= require("express");
// express.Router() is a class to create route handlers
const authorsRouter = express.Router(); 
const Singleauthordata = require('../model/Singleauthordata')
authorsRouter.use(express.static("./public"));
function router()
{
    const navigate=[
        {
            link:'/home',name:'Home'
        },
        // {
        //     link:'/authors',name:'Authors'
        // },
        // {
        //     link:'/books',name:'Books'
        // },
        {
        link:'/authors/newauthor',name:'Add new Author'
        },
        {
            link:'/change',name:'Edit Authors'
        },
        {
            link:'/',name:'Log Out'
        }
    
    
    ];
// var authors=[
//     {
//         title: "A P J Abdul Kalam",
//         author:" India 2020: A Vision for the New Millennium,   Wings of Fire: An Autobiography,  Spirit of India",
//         genre:" Autobiography ,  science",
//         img:"KALAM.jpg"

//     },
//     {
//         title: "Harper Lee",
//         author:"To Kill a Mockingbird ,  Go Set a Watchman",
//         genre:"Novel,  Fiction",
//         img:"HARPER.jpg"

//     },
//     {
//         title: "J.K. Rowling",
//         author:"Harry Potter Series, Cormoran Strike series",	
//         genre:"Fantasy Fiction, Drama, Crime Fiction",
//         img:"ROWLING.jpg"

//     },
//     {
//         title: "Anne Frank",
//         author:"The Diary of Anne Frank,  Tales from the Secret Annex",
//         genre:"Nonfiction, Short Story",
//         img:"ANNE.jpg"

//     },
//     {
//         title: "M.T. Vasudevan Nair  ",
//         author:"Randamoozham, Naalukettu ",
//         genre:"Drama ,  Novel",
//         img:"MT.jpg"

//     }
// ]
authorsRouter.get('/',function(req,res)
{
    Singleauthordata.find()
    .then(function(authors){
    res.render("authors",{
        navigate,title:"Authors",authors
        
            });
        });
});
authorsRouter.get('/newauthor',function(req,res)
{
    
  res.render('newauthor',{
      navigate,title:"Add Author"
  })


   
});
authorsRouter.get('/:id',function(req,res)
{
    const id= req.params.id;
    Singleauthordata.findOne({_id:id})
    .then(function(singleauthor){
        res.render('singleauthor',{
            navigate,title:"Authors",singleauthor
          });
        
    })
  
   
});
authorsRouter.post('/newauthor/addauthor',function(req,res)
{
    var items={
  name:req.body.name,
 genre: req.body.genre,
 book1:req.body.book1,
 book2:req.body.book2,
  image:req.body.image
    }
    var author= Singleauthordata(items);
    // saving to database
    author.save();
    res.redirect('/authors');
});
return authorsRouter;
}
module.exports=router;