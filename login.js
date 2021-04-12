function validate(){
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

if (username=="007" && password=="007"){
    alert("login succesfully")
    return false ;
}
else{
    alert("login failed")
}
}