const toggler = document.querySelector(".nav-toggler");
const form = document.getElementById("form");
const email = document.getElementById("email");
const p = document.querySelector("#p");
// console.log(email);
// console.log(form);
toggler.addEventListener("click", () => {
  let tog = document.querySelector(".hidden");
  if (tog.style.display === "block") {
    tog.style.display = "none";
    toggler.innerHTML =
      ' <svg xmlns="http://www.w3.org/2000/svg" width="25" height="18"><g fill="#242D52" fill-rule="evenodd"><path d="M0 0h25v4H0zM0 7h25v4H0zM0 14h25v4H0z"/></g></svg>';
  } else {
    tog.style.display = "block";
    toggler.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="21" height="22"><path fill="#242D52" fill-rule="evenodd" d="M17.925.747l2.828 2.828L13.328 11l7.425 7.425-2.828 2.828-7.425-7.425-7.425 7.425-2.828-2.828L7.671 11 .247 3.575 3.075.747 10.5 8.171 17.925.747z"/></svg> ';
  }
});

function inIt() {
  form.addEventListener("submit", e => {
    e.preventDefault();
    checkEmail();
  });
}

function checkEmail() {
  // console.log(email);
  const emailValue = email.value.trim();
  if (emailValue === "") {
    setError(email);
    p.innerText = "Email cannot be empty";
    p.style.color = "red";
  } else if (!isEmail(emailValue)) {
    p.innerText = "Invalid email";
    p.style.color = "red";
  } else {
    setSuccess(email);
    p.innerText = "Success";
    p.style.color = "green";
  }
}

function setError(input) {
  input.style.border = "2px solid red";
}
function setSuccess(input) {
  input.style.border = " 2px solid green";
}
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

inIt();
