const loginBtn = document.querySelector(".header__login-btn");
const modal = document.getElementById("loginModal");
const closeBtn = modal.querySelector(".modal__close");
const overlay = modal.querySelector(".modal__overlay");

loginBtn.addEventListener("click", () => {
  modal.setAttribute("aria-hidden", "false");
});

closeBtn.addEventListener("click", () => {
  modal.setAttribute("aria-hidden", "true");
});

overlay.addEventListener("click", () => {
  modal.setAttribute("aria-hidden", "true");
});
