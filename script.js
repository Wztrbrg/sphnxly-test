const modal = document.querySelector(".login-modal");
const modalLoginBtn = document.querySelector(".nav-login-btn");
const closeBtn = document.querySelector(".close");
const userMessage = document.querySelector(".user-message");
const userInfo = document.querySelector(".user-info");
const heroSection = document.querySelector(".hero-section");
const heroHeading = document.querySelector(".hero-heading");
const heroPara = document.querySelector(".hero-para");
const navToggle = document.querySelector(".nav-toggle");
const navExpand = document.querySelector(".nav-list");
const closeMenu = document.querySelector(".close-menu");
const usernameField = document.querySelector(".username-field");
const usernameLabel = document.querySelector(".username-label");

//toggle expandable nav menu on mobile devices
let showMenu = false;

const toggleMenu = () => {
  if (!showMenu) {
    navToggle.classList.add("close-menu");
    navExpand.classList.add("expand");
    heroHeading.classList.add("hide");
    heroPara.classList.add("hide");

    showMenu = true;
  } else {
    navToggle.classList.remove("close-menu");
    navExpand.classList.remove("expand");
    heroHeading.classList.remove("hide");
    heroPara.classList.remove("hide");

    showMenu = false;
  }
};

navToggle.addEventListener("click", toggleMenu);

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
  currentUser = document.querySelector(".username-field").value.toUpperCase();
  setUserInfo();
  users.push(currentUser);
  localStorage.setItem("users", JSON.stringify(users));
  modal.classList.remove("show");
  heroSection.classList.remove("contrast");
  heroHeading.classList.remove("hide");
  heroPara.classList.remove("hide");
};

const handleLogout = () => {
  modalLoginBtn.innerText = "LOGGA UT";
  modalLoginBtn.classList.add("logout");
  modalLoginBtn.addEventListener("click", () => {
    location.reload();
  });
};

//Checking if current user exists in localStorage or not
//and setting welcome message accordingly
const setUserInfo = () => {
  if (users.includes(currentUser)) {
    userMessage.innerHTML = "VÄLKOMMEN TILLBAKA! DU ÄR INLOGGAD SOM ";
    userInfo.innerHTML = currentUser;
    handleLogout();
  } else {
    userMessage.innerHTML = "DU ÄR INLOGGAD SOM ";
    userInfo.innerHTML = currentUser;
    handleLogout();
  }
};

//Show login modal when top nav login button is clicked
modalLoginBtn.addEventListener("click", () => {
  if (!modalLoginBtn.classList.contains("logout")) {
    navExpand.classList.remove("expand");
    navToggle.classList.remove("close-menu");
    showMenu = false;
    modal.classList.add("show");
    heroSection.classList.add("contrast");
    heroHeading.classList.add("hide");
    heroPara.classList.add("hide");
  }
});

//Hide login modal when login modal close button is clicked
closeBtn.addEventListener("click", () => {
  modal.classList.remove("show");
  heroSection.classList.remove("contrast");
  heroHeading.classList.remove("hide");
  heroPara.classList.remove("hide");
});

//Hide login modal when clicking outside of login modal
window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.classList.remove("show");
    heroSection.classList.remove("contrast");
    heroHeading.classList.remove("hide");
    heroPara.classList.remove("hide");
  }
});
