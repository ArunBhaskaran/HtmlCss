function username() {
    // No focus = Changes the background color of input to red
  
    var user=document.getElementById("user").value;
    var len=user.length;
   console.log(user);
    var regex = /^[a-zA-Z]+$/;
      if(regex.test(user) == false)
      {
       
     document.getElementById("uu").innerHTML="only alphabets";
     document.getElementById("user").focus;
      }
      else{
        document.getElementById("uu").innerHTML="";
        document.getElementById("user").focus;
      }
      if(user =="")
      {
        document.getElementById("uu").innerHTML="Name Field cannot be left empty";
      }
  }
  function email(){
    var email=document.getElementById("email").value;
    var regex = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;
      if(regex.test(email)== true)
      {
       
        document.getElementById("em").innerHTML="";
      }
      else{
        document.getElementById("em").innerHTML="This is not a valid email address";
        return false;
      }
    }
      function password()
      {
        var pas=document.getElementById("pass").value;
        console.log(pas);
        var regex= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        if(regex.test(pas)==true)
        {
          
          document.getElementById("ps").innerHTML="";
        }
        else{
          
          document.getElementById("ps").innerHTML="password between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character";
        }
      }
      function cpassword()
      {
        var pas=document.getElementById("pass").value;
        var cpas=document.getElementById("cpass").value;
        if(pas == cpass)
        {
          document.getElementById("cp").innerHTML="";
        }
        else{
          document.getElementById("cp").innerHTML="password is not match";
        }
  
      }
    function Countword()
    {
      var v=document.getElementById("bio").value.length;
      var charactersLeft =140-v;
      document.getElementById("count").innerHTML= "character:"+charactersLeft;
  
    }

    
         

        
    
