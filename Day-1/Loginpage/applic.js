function handlelogin() {
  const usernameinput = document.getElementById("uname");
  const passwordinput = document.getElementById("pword");

  const username = usernameinput.value;
  const password = passwordinput.value;

  if (username === "admin" && password === "Admin@123") {
    alert("LoginSuccessful");
    window.location.href("Welcome To MEDIANV");
  } else {
    alert("please check your password");
  }
}
const loginbutton = document.getElementById("loginbutton");
loginbutton.addEventListener("click", handlelogin);
