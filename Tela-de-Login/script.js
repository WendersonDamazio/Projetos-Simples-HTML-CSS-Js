var usuario = "wenso@gmail.com";
var password = "1729vivi";

function check_login(){
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    if(usuario == email && password == senha){
        document.location.href = "login.html";
    }else{
        alert("Usario ou senha errados")
        document.getElementById("forget").style.display = "flex";
    }
}