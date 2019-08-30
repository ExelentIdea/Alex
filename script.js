 
function error(){
  document.getElementById("error").style.display = "block";
  document.getElementById("login").style.border = "1px solid #ED4159";
  document.getElementById("login").style.color = "#ED4159";
};

 function validate(){

    var log=new Array(),
        pas=new Array(),
        login_ok = false,
        user_name,
        password;

    log[0]="user@example.com";
    pas[0]="mercdev";

    user_name = document.getElementById("log").value;
    user_name = user_name.toLowerCase();
    password = document.getElementById("pass").value;
    password = password.toLowerCase();
    if (user_name== log[0] && password== pas[0]) {
     login_ok=true;
     window.location.href="account.html";
    };

    if (login_ok==false) {alert("Неверный логин или пароль!")};
    }




