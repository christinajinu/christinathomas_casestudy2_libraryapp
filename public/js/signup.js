
function validate()
 {
    var name = document.forms["myform"]["name"].value;
    if(name==""){
    alert("Please enter the name");
    return false;
    }
   
   
                               // email validation
 var email = document.getElementById("email");
let regexp = /^([A-Za-z0-9\.\-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(\.[a-z]{2,3})?$/
    if(regexp.test(email.value))
    {
       
        error.innerHTML = "valid";
    error.style.color = "green";
    }

  else 

 {
     
    error.innerHTML = "Please enter valid mail ID";
    error.style.color = "red";
    
    return false;
 }


 
                            //  password validation

var pwd = document.getElementById("pwd");
var cnpwd = document.getElementById("cnpwd");


var a= pwd.value;
var b=cnpwd.value;
// if (a=="")
// {
//     console.log("enter pwd");
//     // document.getElementById("message").innerHTML="**Please enter the Password";
//     // return false;
// }
let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    if(regex.test(a))
    {
       
        document.getElementById("message").innerHTML="**Password correct";
        
    }

  else 

 {
     
    document.getElementById("message").innerHTML="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters";
    return false;
 }
 
 if (a!= b)
 {
     document.getElementById("message").innerHTML="**Password doesn't match";
     return false;
 }
 else{
     document.getElementById("message").innerHTML="**Hurray!!Password matches"; 
     document.getElementById("message").style.color="green";
     return true;
 }
 

if (a.length<8)
{
    document.getElementById("message").innerHTML="**Password length must be greater than 8 characters";
    return false;
}
if (a.length>15)
{
    document.getElementById("message").innerHTML="**Password length must be smaller than 15 characters";
    return false;
}

if (a!= b)
{
    document.getElementById("message").innerHTML="**Password doesn't match";
    return false;
}
else{
    document.getElementById("message").innerHTML="**Hurray!!Password matches"; 
    document.getElementById("message").style.color="green";
    return true;
}


}
 pwd.addEventListener('keyup',function(){
     strength();
 })
function strength(){
    var val=document.getElementById("pwd").value;
    var status=document.getElementById("length");
    var counter=0;

if(val!="")
{

    if(val.length<5)
    counter=1;
    if(val.length >= 5 && val.length <= 8)
    counter=2;
    if(val.length > 8 && val.length <= 15)
    counter=3;
if(counter==1)
{
    status.innerHTML = "WEAK";
    status.style.background="red";
    status.style.color="#ffffff";
}

if(counter==2)
{
    status.innerHTML = "GOOD";
    status.style.background="orange";
    status.style.color="white";
}
if(counter==3)
{
    status.innerHTML = "STRONG";
    status.style.background="green";
    status.style.color="#ffffff";
}

}


}









 
 