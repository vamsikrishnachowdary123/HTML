
function formValidate()
{

    
    var email=document.forms['loginform']['email'];
    var password=document.forms['loginform']['password'];

    var email_error=document.getElementById("email_error");
    var password_error=document.getElementById("password_error");
    var email_regex=/^[A-Za-z._]{3,}[0-9]{0,}@[A-Za-z]{3,}[.]{1}[A-Za-z]{2,6}$/;
  

    if(email.value=="")
    {
     

       email_error.innerHTML="Email should not be Empty";
       email.focus();
        return false;

    }
    else if(password.value=="")
    {

        password_error.innerHTML="Password should not be Empty";
        password.focus();
        return false;
    }
    else if(!email_regex.test(email.value))
    {
    
      email_error.innerHTML="Invalid email address";
      email.focus();
      return false;
    }
else{


email_error.innerHTML="";
password_error.innerHTML="";

    return true;
}







}

