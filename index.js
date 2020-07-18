const checkbox = document.querySelector(".checkbox");
const monthly = [...document.querySelectorAll(".monthly")];
const annually = [...document.querySelectorAll(".annually")];

checkbox.addEventListener("click", (e) => {
  if (checkbox.checked) {
    monthly.map((el) => el.classList.remove("hide"));
    annually.map((el) => el.classList.add("hide"));
  } else {
    monthly.map((el) => el.classList.add("hide"));
    annually.map((el) => el.classList.remove("hide"));
  }
});
