function vaildate(){
    var user = document.getElementById("user").value
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    var confirm= document.getElementById("confirm").value
    var result = document.getElementById("result")

 if( user=="" && email=="" && password=="" && confirm==""){
    result.innerHTML = "Enter your data";
    return false;
 } else if(user.length <5|| user.length>15){
    result.innerHTML = "Enter 5-15 caracter";
    return false; 
 }else if(email.indexof("@",3) ==-1){
    result.innerHTML = "Enter valid email";
    return false;
 }else if (password.length<8){
    result.innerHTML = "Enter 8 caracter in password";
    return false;
 } else if(password != confirm){
    result.innerHTML = "Enter the same password";
    return false;
 }else{
    return true} ;

}