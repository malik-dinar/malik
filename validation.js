function isname(){
    var y = document.getElementById("fName").value;
    var z = 0;
    z = /\d/.test(y);
    if (z == 0 )
    {
        document.getElementById("nameOneWarning").innerHTML= ""
    }
    else{
        document.getElementById("nameOneWarning").innerHTML= "invalid name"
    }
    
}

function issname(){
    var letters = /^[A-Za-z]+$/;
    var y = document.getElementById("fName").value;
    z=y.length
    if(z == 0)
    {
        document.getElementById("nameOneWarning").innerHTML= "name cannot be empty"
    } 
    else if (/^[A-Za-z]+[ A-Za-z]+$/.test(y))
    {
        document.getElementById("nameOneWarning").innerHTML= ""
    }
    else{
        document.getElementById("nameOneWarning").innerHTML= "invalid name"
    }   
}

function ValidateEmail() 
{
    var y = document.getElementById("email").value;
    var len = y.length;
    
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(y) || len == 0)
    {
        document.getElementById("emailWarning").innerHTML=""
    }
    else{
        document.getElementById("emailWarning").innerHTML="Enter email format correctly"
    }
}
