const express= require("express");

// express.Router() is a class to create route handlers
const booksRouter = express.Router(); 
const Singlebookdata = require('../model/Singlebookdata')
// const Updatebookdata = require('../model/Updatebookdata')
booksRouter.use(express.static("./public"));
function router()
{
    const navigate=[
        {
            link:'/home',name:'Home'
        },
       
        // {
        //     link:'/authors',name:'authors'
        // },
        
        {
        link:'/books/newbook',name:'Add new book'
        },
        {
            link:'/edit',name:'Edit Books'
        },
        {
            link:'/',name:'Log Out'
        }
    
    
    ];
    const nav=[
        {
            link:'/home',name:'Home'
        },
        {
            link:'/books',name:'Books'
        },
      {
            link:'/',name:'Log Out'
        }
    
    
    ];

    
    const navi=[
        {
            link:'/home',name:'Home'
        },
        {
            link:'/books',name:'Books'
        },
        {
            link:'/',name:'Log Out'
        }
    
    
    ];
// var books=[
//     {
//         title: "Wings of Fire ",
//         author:"A P J Abdul Kalam, Arun Tiwari",
//         genre:"Autobiography",
//         img:"imgkalam.jpg"

//     },
//     {
//         title: "To Kill a Mockingbird ",
//         author:"Harper Lee",
//         genre:"Novel",
//         img:"img2.jpg"

//     },
//     {
//         title: "Harry Potter and the Philosopher’s Stone ",
//         author:"J.K. Rowling",
//         genre:"Fantasy Fiction",
//         img:"img3.jpg"

//     },
//     {
//         title: "The Diary of Anne Frank  ",
//         author:"Anne Frank ",
//         genre:"Nonfiction",
//         img:"img1.jpg"

//     },
//     {
//         title: "Randamoozham  ",
//         author:"M.T. Vasudevan Nair ",
//         genre:"Drama",
//         img:"img5.jpg"

//     }
// ]
booksRouter.get('/',function(req,res)
{
    Singlebookdata.find()
    .then(function(books){
    res.render("books",{
        navigate,title:"Books",books
        
            });
        });
});
booksRouter.get('/newbook',function(req,res)
{
    
  res.render('newbook',{
      nav,title:"Add Book"
  })


   
});
booksRouter.post('/newbook/addbook',function(req,res)
{
    var item={
  title:req.body.title,
 author: req.body.author,
  genre:req.body.genre,
  image:req.body.image
    }
    var book= Singlebookdata(item);
    // saving to database
    book.save();
    res.redirect('/books');
});


booksRouter.get('/:id',function(req,res)
{
    const id= req.params.id;
    Singlebookdata.findOne({_id:id})
    .then(function(singlebook){
        res.render('singlebook',{
            navi,title:"Books",singlebook
          });
        
    })
  
   
});

return booksRouter;
}
module.exports=router;