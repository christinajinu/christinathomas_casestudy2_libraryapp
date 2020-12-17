const mongoose= require('mongoose')
// require('mongoose-type-email');
// mongoose.SchemaTypes.Email.defaults.message = 'Email address is invalid'
// connecton code for connecting with database and server
mongoose.connect('mongodb://localhost:27017/library');
// accessing schema from mongoose  Schema definition
const Schema= mongoose.Schema;

const SignupSchema = new Schema(
    {
        name:String,
       
        email:{
            type:String,
            required: [true, 'email is required'],
      
      
    },
        password:String,
        cpassword:String,
        
    }
);
// model creation
var Signupdata= mongoose.model('signupdata',SignupSchema);
module.exports= Signupdata;