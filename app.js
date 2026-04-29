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


  localStorage.setItem("email", signupEmail);
  localStorage.setItem("password", signupPassword);

  Swal.fire({
    icon: "success",
    title: "Signup Successful",
    text: "Account created!"
  });
  setTimeout(() => {
    window.location.href = "login.html";
  }, 1500);
}


function login() {

  var email = document.getElementById("login-email").value;
  var password = document.getElementById("login-password").value;
  console.log(email, password);

  if (email === "" || password === "") {
    Swal.fire({
      icon: "warning",
      title: "Empty Fields",
      text: "Please enter email and password"
    });
    return;
  }
 var storedEmail = localStorage.getItem("email");
  var storedPassword = localStorage.getItem("password");

  if (email === storedEmail && password === storedPassword) {
    Swal.fire({
      icon: "success",
      title: "Login Successful",
      text: "Welcome back!"
    });

      window.location.href = "local.storage.html";
    


  } else {
    Swal.fire({
      icon: "error",
      title: "Wrong Email and Password",
      text: "Please check your email and password"
    });
  }
}












function tosignup() {
  window.location.href = "signup.html"
}
function tologin() {
  window.location.href = "login.html"
}