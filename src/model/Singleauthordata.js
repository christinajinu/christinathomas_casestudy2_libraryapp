const mongoose= require('mongoose')
// connecton code for connecting with database and server
mongoose.connect('mongodb+srv://userone:userone@casestudychristina.zlpng.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
// accessing schema from mongoose  Schema definition
const Schema= mongoose.Schema;

const SingleauthorSchema = new Schema(
    {
        name:String,
        genre:String,
        book1:String,
        book2:String,
        image:String
    }
);
// model creation
var Singleauthordata= mongoose.model('singleauthordata',SingleauthorSchema);
module.exports= Singleauthordata;