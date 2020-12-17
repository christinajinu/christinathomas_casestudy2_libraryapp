const mongoose= require('mongoose')

// connecton code for connecting with database and server
mongoose.connect('mongodb+srv://userone:userone@casestudychristina.zlpng.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
// accessing schema from mongoose  Schema definition
const Schema= mongoose.Schema;

const SinglebookSchema = new Schema(
    {
        title:String,
        author:String,
        genre:String,
        image:String
    }
);
// model creation
var Singlebookdata= mongoose.model('singlebookdata',SinglebookSchema);
module.exports= Singlebookdata;