let cardElement = document.querySelectorAll(".card");
// let iElement = document.querySelector("fa-solid fa-plus");

cardElement.forEach((element) => {
  element.addEventListener("click", function () {
    this.classList.toggle("activeCard");
    console.log(this);
  });
});

let cardTitleElement = document.querySelectorAll(".card-title");
cardTitleElement.forEach((element) => {
  // console.log(111, element);
  // let iElement = document.createElement("i");
  // element.appendChild(iElement);
  element.addEventListener("click", function () {
    let lastChild = element.lastElementChild;
    let firstChild = element.firstElementChild;
    // let iElement = document.getElementsByClassName("fa-plus");
    // console.log(2323223, lastChild.classList);

    if (lastChild.classList.contains("fa-plus")) {
      // console.log("fa-plus fa-plus");
      lastChild.classList.remove("fa-plus");
      lastChild.classList.add("fa-minus");

      var cardContent = (element.parentElement.getElementsByClassName(
        "card-content"
      )[0].style.display = "block");

      console.log(123, cardContent);
    } else {
      lastChild.classList.add("fa-plus");
      lastChild.classList.remove("fa-minus");
      var cardContent = (element.parentElement.getElementsByClassName(
        "card-content"
      )[0].style.display = "none");
    }
  });
});

// cardTitleElement.forEach((element) => {
//   let iElement = document.createElement("i");
//   iElement.classList.toggle("fa-minus");
// });

// if (cardTitleElement.classList.contains(".fa-plus")) {
//   cardTitleElement.classList.remove("fa-plus");
// } else {
//   cardTitleElement.classList.add("fa-minus");
// }
