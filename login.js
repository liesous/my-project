let username = [];
let password = [];

function loginButton() {
  const userName = document.getElementById("email").value;
  const passWord = document.getElementById("password").value;

  if (!userName || !passWord) {
    alert("You need to Sign-Up First");
  } else {
    let loggedIn = false;
    for (let i = 0; i < username.length; i++) {
      if (userName == username[i] && passWord == password[i]) {
        loggedIn = true;
        break;
      }
    }

    if (loggedIn) {
      alert('LOGIN SUCCESSFUL');
      location.replace("http://127.0.0.1:5500/index.html")
    } else {
      alert('Enter the correct Username and Password');
    }
  }
}

function getUserRegister() {
  let user = document.getElementById("email-input").value;
  let pass = document.getElementById("password-input").value;

  if (!user || !pass) {
    alert("Username and Password cannot be empty");
  } else {
    username.push(user);
    password.push(pass);
    document.getElementById("email-input").value = "";
    document.getElementById("password-input").value = "";
    alert("Registration successful");
  }
}


function registrationToggle(){
  let createAcc = document.getElementById("registration");
  // let closeButton = document.getElementById("close");

  createAcc.classList.toggle("active");
  }
