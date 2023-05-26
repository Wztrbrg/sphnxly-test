const modal = document.querySelector(".login-modal");
const modalLoginBtn = document.querySelector(".nav-login-btn");
const closeBtn = document.querySelector(".close");
const userInfo = document.querySelector(".user-info");

//Initialize current user
let currentUser = "";

//Initialize empty/existing array of users
if (localStorage.getItem("users")) {
  users = JSON.parse(localStorage.getItem("users"));
} else {
  users = [];
}

//Login handler, sets current user to value of username field
//calls setUserInfo function to set the right welcome message
//stores current user in users array
//stores array in localStorage and closes modal
const handleLogin = () => {
  currentUser = document.querySelector(".username-field").value;
  setUserInfo();
  users.push(currentUser);
  localStorage.setItem("users", JSON.stringify(users));
  modal.classList.remove("show");
};

//Checking if current user exists in localStorage or not
//and setting welcome message accordingly
const setUserInfo = () => {
  if (users.includes(currentUser)) {
    userInfo.innerHTML =
      "Välkommen tillbaka! Du är inloggad som " + currentUser;
  } else {
    userInfo.innerHTML = "Du är inloggad som " + currentUser;
  }
};

//Show login modal when top nav login button is clicked
modalLoginBtn.addEventListener("click", () => {
  modal.classList.add("show");
});

//Hide login modal when login modal close button is clicked
closeBtn.addEventListener("click", () => {
  modal.classList.remove("show");
});

//Hide login modal when clicking outside of login modal
window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.classList.remove("show");
  }
});
