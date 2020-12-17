var email = document.getElementById("email");
var password = document.getElementById("password");
 
function validate()
{
     
let regexp = /^([A-Za-z0-9\.\-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(\.[a-z]{2,3})?$/
if(regexp.test(email.value))
{
    error.innerHTML = "Valid"; 
    error.style.color = "green";  
    
}

else 

{
error.innerHTML = "Please enter valid mail ID";
error.style.color = "red";

return false;
}
var a=password.value;
if (a == "")
{
    document.getElementById("message").innerHTML="**Please enter the Password";
    return false;
}
else
{
return true;
}
}