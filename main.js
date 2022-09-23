const burger = document.querySelector(".burger > img");
const products = document.querySelector(".products span");
const closeBtn = document.querySelector(".close-btn");

products.addEventListener("click", active);
burger.addEventListener("click", active);
closeBtn.addEventListener("click", close);

function active() {
  this.parentElement.classList.toggle("active");
}

function close() {
  burger.parentElement.classList.toggle("active");
}
