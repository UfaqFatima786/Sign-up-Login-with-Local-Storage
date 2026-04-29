function signup() {
  var signupEmail = document.getElementById("signup-email").value;
  var signupPassword = document.getElementById("signup-password").value;
  console.log(signupEmail, signupPassword);
  
  if (signupEmail == "" || signupPassword == "") {
    Swal.fire({
      icon: "warning",
      title: "Missing Fields",
      text: "Please enter email and password"
    });
    return;
  }

  localStorage.setItem("signupEmail", signupEmail);
  localStorage.setItem("signupPassword", signupPassword);
}













function tosignup() {
  window.location.href = "signup.html"
}
function tologin() {
  window.location.href = "login.html"
}