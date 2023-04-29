let burgerBar = document.getElementById("burgerBar");
let ulItem = document.getElementById("ul-item");

burgerBar.addEventListener("click", function () {
  ulItem.classList.toggle("toggleUlNavigation");
  burgerBar.classList.toggle("activeBurgerbar");
});

let navBar = document.getElementById("navBar");

window.onscroll = function () {
    let top = window.scrollY;
  if (top >= 50) {
    navBar.classList.add("navBarActive");
  } else {
    navBar.classList.remove("navBarActive");
  }
};
