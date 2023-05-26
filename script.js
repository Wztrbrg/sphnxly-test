const modal = document.querySelector(".login-modal");
const modalLoginBtn = document.querySelector(".nav-login-btn");
const closeBtn = document.querySelector(".close");
const userInfo = document.querySelector(".user-info");

const handleLogin = () => {
  let username = document.querySelector(".username-field").value;
  localStorage.setItem("username", username);
  modal.classList.remove("show");
  console.log(localStorage);
  setUserInfo();
};

const setUserInfo = () => {
  let username = localStorage.getItem("username");
  if (localStorage) userInfo.innerHTML = "Du är inloggad som " + username;
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
