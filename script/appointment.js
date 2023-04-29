let formRegistration = document.getElementById("apointment-form");

formRegistration.addEventListener("submit", function (event) {
  event.preventDefault();
  let errors = {};
  console.log(12312312, errors);
  let form = event.target;

  let name = document.getElementById("name").value;
  if (!name) {
    errors.name = "Name can not be empty";
  }

  let password = document.getElementById("password").value;
  if (!password) {
    errors.password = "Password can not be empty";
  } else {
    delete errors.password;
  }

  let email = document.getElementById("email").value;
  if (!email) {
    errors.email = "Email can not be empty";
  }

  let phone = document.getElementById("phone").value;
  if (!phone) {
    errors.phone = "Phone can not be empty";
  }

  let department = document.getElementById("department").value;
  if (!department) {
    errors.department = "Department can not be empty";
  } else {
    delete errors.department;
  }

  let date = document.getElementById("date").value;
  if (!date) {
    errors.date = "Date can not be empty";
  } else {
    delete errors.date;
  }

  let message = document.getElementById("message").value;
  if (!message) {
    errors.message = "Message can not be empty";
  } else {
    delete errors.message;
  }

  document.querySelectorAll("error-text").forEach((element) => {
    element.innerHTML = "";
  });
  for (let item in errors) {
    let errorText = document.getElementById("error-" + item);

    if (errorText) {
      errorText.innerText = errors[item];
    }
  }
  console.log(123, errors);
  if (!Object.keys(errors).length) {
    let btn = document.getElementById("btn");
    // btn.addEventListener("click", () => {
    if (btn.innerText === "Book Now") {
      btn.innerText = "Booked succesfully";
      btn.style.backgroundColor = "green";
    } else {
      btn.innerText === "Book Now";
    }
  } else {
    btn.innerText === "Book Now";
  }
});

// let confirmationMsg = document.createElement("p");
// confirmationMsg.textContent = "Form submitted successfully!";
// confirmationMsg.style.background.color = "green";
// form.appendChild(confirmationMsg);

// form.reset();

let emailInput = document.getElementById("email");

emailInput.addEventListener("keyup", function () {
  let emailInputValue = document.getElementById("email").value;
  let errorTextEmail = document.getElementById("error-email");
  let emailpattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (emailInputValue.match(emailpattern)) {
    emailInput.style.border = "2px solid green";
    emailInput.style.outline = "none";
    errorTextEmail.innerHTML = "Your Email is valid";
    errorTextEmail.style.color = "green";
  } else {
    emailInput.style.border = "2px solid red";
    emailInput.style.outline = "none";
    errorTextEmail.innerHTML = "Your Email is not valid";
    errorTextEmail.style.color = "red";
  }

  if (emailInputValue == "") {
    errorTextEmail.innerHTML = "";
    emailInput.style.border = "2px solid black";
  }
});

let nameField = document.getElementById("name");

nameField.addEventListener("keyup", function () {
  let nameValue = document.getElementById("name").value;
  let errorTextName = document.getElementById("error-name");
  let namePattern = /^[A-Za-z .]{3,15}$/;

  if (nameValue.match(namePattern)) {
    nameField.style.border = "2px solid green";
    nameField.style.outline = "none";
    errorTextName.innerHTML = "Your Username is valid";
    errorTextName.style.color = "green";
  } else {
    nameField.style.border = "2px solid red";
    nameField.style.outline = "none";
    errorTextName.innerHTML = "Your Username is invalid";
    errorTextName.style.color = "red";
  }

  if (nameValue == "") {
    errorTextName.innerHTML = "";
    nameField.style.border = "2px solid black";
  }
});

let passwordInput = document.getElementById("password");
let toggleIcon = document.getElementById("toggleIcon");

toggleIcon.addEventListener("click", function () {
  if (passwordInput.type == "password") {
    passwordInput.setAttribute("type", "text");
    toggleIcon.classList.remove("fa-eye");
    toggleIcon.classList.add("fa-eye-slash");
  } else {
    passwordInput.setAttribute("type", "password");
    toggleIcon.classList.remove("fa-eye-slash");
    toggleIcon.classList.add("fa-eye");
  }
});

let phoneInput = document.getElementById("phone");

phoneInput.addEventListener("keyup", function () {
  let phoneInputValue = document.getElementById("phone").value;
  let errorTextPhone = document.getElementById("error-phone");
  //   let phonePattern = " ^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$";

  let pattern = new RegExp("^[(]?[+]?[0-9]{3}[)]?[5][0-9]{2}[0-9]{6}");

  //   let phonePattern ="/^(\+?995)?(5|79)\d{7}$/, ";

  if (phoneInputValue.match(pattern)) {
    phoneInput.style.border = "2px solid green";
    phoneInput.style.outline = "none";
    errorTextPhone.innerHTML = "Phone number is valid";
    errorTextPhone.style.color = "green";
  } else {
    phoneInput.style.border = "2px solid red";
    phoneInput.style.outline = "none";
    errorTextPhone.innerHTML = "Phone number is not valid";
    errorTextPhone.style.color = "red";
  }

  if (phoneInputValue == "") {
    errorTextPhone.innerHTML = "";
    phoneInput.style.border = "2px solid black";
  }
});

let dateField = document.getElementById("date");
dateField.addEventListener("change", function () {
  let dateValue = document.getElementById("date").value;
  console.log(123, date);
  let errorTextName = document.getElementById("error-date");

  if (dateValue) {
    dateField.style.border = "2px solid green";
    dateField.style.outline = "none";
    errorTextName.innerHTML = "Your date is valid";
    errorTextName.style.color = "green";
  } else {
    dateField.style.border = "2px solid red";
    dateField.style.outline = "none";
    errorTextName.innerHTML = "Your date is invalid";
    errorTextName.style.color = "red";
  }

  if (dateValue == "") {
    errorTextName.innerHTML = "";
    dateField.style.border = "2px solid black";
  }
});

let departmentField = document.getElementById("department");
departmentField.addEventListener("keyup", function () {
  let departmentValue = document.getElementById("department").value;

  let errorTextName = document.getElementById("error-department");

  if (departmentValue) {
    departmentField.style.border = "2px solid green";
    departmentField.style.outline = "none";
    errorTextName.innerHTML = "Your department is valid";
    errorTextName.style.color = "green";
  } else {
    departmentField.style.border = "2px solid red";
    departmentField.style.outline = "none";
    errorTextName.innerHTML = "Your department is invalid";
    errorTextName.style.color = "red";
  }

  if (departmentValue == "") {
    errorTextName.innerHTML = "";
    departmentField.style.border = "2px solid black";
  }
});

let messageField = document.getElementById("message");
messageField.addEventListener("keyup", function () {
  let messagetValue = document.getElementById("message").value;

  let errorTextName = document.getElementById("error-message");

  if (messagetValue) {
    messageField.style.border = "2px solid green";
    messageField.style.outline = "none";
    errorTextName.innerHTML = "Your department is valid";
    errorTextName.style.color = "green";
  } else {
    messageField.style.border = "2px solid red";
    messageField.style.outline = "none";
    errorTextName.innerHTML = "Your message is invalid";
    errorTextName.style.color = "red";
  }

  if (messagetValue == "") {
    errorTextName.innerHTML = "";
    messageField.style.border = "2px solid black";
  }
});

let passwordField = document.getElementById("password");
passwordField.addEventListener("keyup", function () {
  let passwordValue = document.getElementById("password").value;

  let errorTextName = document.getElementById("error-password");

  if (passwordValue) {
    passwordField.style.border = "2px solid green";
    passwordField.style.outline = "none";
    errorTextName.innerHTML = "Your password is valid";
    errorTextName.style.color = "green";
  } else {
    passwordField.style.border = "2px solid red";
    passwordField.style.outline = "none";
    errorTextName.innerHTML = "Your password is invalid";
    errorTextName.style.color = "red";
  }

  if (passwordValue == "") {
    errorTextName.innerHTML = "";
    passwordField.style.border = "2px solid black";
  }
});
// ------------------------cookies &  local storage-------------------

document.getElementById("name").addEventListener("keyup", function () {
  let nameValue = document.getElementById("name").value;

  document.cookie = `name=${nameValue} `;
  // console.log(nameValue);
});

document.getElementById("email").addEventListener("keyup", function () {
  let emailValue = document.getElementById("email").value;

  document.cookie = `email=${emailValue} `;
  // console.log(emailValue);
});

document.getElementById("phone").addEventListener("keyup", function () {
  let phoneValue = document.getElementById("phone").value;

  document.cookie = `phone=${phoneValue} `;
  // console.log(phoneValue);
});
